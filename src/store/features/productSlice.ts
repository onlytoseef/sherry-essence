import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { db } from "../../config/firebase";
import { RootState } from "../store";
import { Product, ProductState } from "../../Types/Types";

const initialState: ProductState = {
  products: [],
  loading: false,
  error: null,
};

// Fetch Products
export const fetchProducts = createAsyncThunk<
  Product[],
  void,
  { state: RootState }
>("products/fetchProducts", async (_, { rejectWithValue }) => {
  try {
    const querySnapshot = await getDocs(collection(db, "products"));
    const products: Product[] = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...(doc.data() as Product),
      originalPrice: Number(doc.data().originalPrice),
      salePrice: Number(doc.data().salePrice),
      stock: Number(doc.data().stock),
      details: doc.data().details || "", // ✅ Ensure details field is included
    }));
    return products;
  } catch (error) {
    return rejectWithValue((error as Error).message);
  }
});

// Add Product
export const addProduct = createAsyncThunk<
  Product,
  Product,
  { state: RootState }
>("products/addProduct", async (product, { rejectWithValue }) => {
  try {
    const docRef = await addDoc(collection(db, "products"), {
      ...product,
      originalPrice: Number(product.originalPrice),
      salePrice: Number(product.salePrice),
      stock: Number(product.stock),
      details: product.details, // ✅ Include details field
    });
    return { ...product, id: docRef.id };
  } catch (error) {
    return rejectWithValue((error as Error).message);
  }
});

// Edit Product
export const editProduct = createAsyncThunk<
  Product,
  Product,
  { state: RootState }
>("products/editProduct", async (product, { rejectWithValue }) => {
  try {
    if (!product.id) throw new Error("Product ID is required for editing");
    const productRef = doc(db, "products", product.id);
    await updateDoc(productRef, {
      ...product,
      originalPrice: Number(product.originalPrice),
      salePrice: Number(product.salePrice),
      stock: Number(product.stock),
      details: product.details, // ✅ Ensure details is updated
    });
    return product;
  } catch (error) {
    return rejectWithValue((error as Error).message);
  }
});

// Delete Product
export const deleteProduct = createAsyncThunk<
  string,
  string,
  { state: RootState }
>("products/deleteProduct", async (productId, { rejectWithValue }) => {
  try {
    const productRef = doc(db, "products", productId);
    await deleteDoc(productRef);
    return productId;
  } catch (error) {
    return rejectWithValue((error as Error).message);
  }
});

// Product Slice
const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      .addCase(addProduct.fulfilled, (state, action) => {
        state.loading = false;
        state.products.push(action.payload);
      })
      .addCase(editProduct.fulfilled, (state, action) => {
        state.loading = false;
        const index = state.products.findIndex(
          (p) => p.id === action.payload.id
        );
        if (index !== -1) state.products[index] = action.payload;
      })
      .addCase(deleteProduct.fulfilled, (state, action) => {
        state.loading = false;
        state.products = state.products.filter((p) => p.id !== action.payload);
      });
  },
});

export default productSlice.reducer;
