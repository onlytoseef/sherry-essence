import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { addDoc, collection, updateDoc, doc } from "firebase/firestore";
import { db } from "../../config/firebase";
import { RootState } from "../store";

interface Order {
  id?: string;
  orderNumber: number;
  name: string;
  address: string;
  phone: string;
  paymentMethod: string;
  product: {
    id: string;
    name: string;
    image: string;
    quantity: number;
    price: number;
  };
  totalPrice: number;
  status: string;
  createdAt: string;
}

interface OrderState {
  orders: Order[];
  loading: boolean;
  error: string | null;
}

const initialState: OrderState = {
  orders: [],
  loading: false,
  error: null,
};

export const placeOrder = createAsyncThunk<Order, Order, { state: RootState }>(
  "orders/placeOrder",
  async (order, { rejectWithValue }) => {
    try {
      const ordersRef = collection(db, "orders");
      const docRef = await addDoc(ordersRef, order);
      return { ...order, id: docRef.id };
    } catch (error) {
      return rejectWithValue((error as Error).message);
    }
  }
);

export const updateOrderStatus = createAsyncThunk<
  Order,
  { orderId: string; status: string },
  { state: RootState }
>(
  "orders/updateOrderStatus",
  async ({ orderId, status }, { rejectWithValue }) => {
    try {
      const orderRef = doc(db, "orders", orderId);
      await updateDoc(orderRef, { status });
      return { id: orderId, status };
    } catch (error) {
      return rejectWithValue((error as Error).message);
    }
  }
);

const orderSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(placeOrder.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(placeOrder.fulfilled, (state, action) => {
        state.loading = false;
        state.orders.push(action.payload);
      })
      .addCase(placeOrder.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      .addCase(updateOrderStatus.fulfilled, (state, action) => {
        const index = state.orders.findIndex(
          (order) => order.id === action.payload.id
        );
        if (index !== -1) state.orders[index].status = action.payload.status;
      });
  },
});

export default orderSlice.reducer;
