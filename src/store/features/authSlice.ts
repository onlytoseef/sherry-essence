import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { auth, db } from "../../config/firebase";
import { User, AuthState } from "../../Types/Types";

// Register User Thunk
export const registerUser = createAsyncThunk<
  User,
  { firstName: string; lastName: string; email: string; password: string },
  { rejectValue: string }
>(
  "auth/registerUser",
  async ({ firstName, lastName, email, password }, { rejectWithValue }) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;

      let role: "customer" | "admin" = "customer";

      // Store user details in Firestore
      await setDoc(doc(db, "users", user.uid), {
        firstName,
        lastName,
        email: user.email,
        role,
      });

      return { uid: user.uid, firstName, lastName, email: user.email, role };
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);
export const logoutUser = createAsyncThunk("auth/logout", async () => {
  // Simulate removing user from local storage
  localStorage.removeItem("user");
  return null;
});

// Initial State
const initialState: AuthState = {
  user: null,
  loading: false,
  error: null,
};

// Create Slice
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.user = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(registerUser.fulfilled, (state, action: PayloadAction<User>) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      .addCase(logoutUser.fulfilled, (state) => {
        state.user = null;
      });
  },
});

// Export Actions and Reducer
export const { logout } = authSlice.actions;
export default authSlice.reducer;
