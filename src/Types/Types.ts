export interface User {
  uid: string;
  email: string;
  role: "admin" | "customer";
}

export interface AuthState {
  user: User | null;
  loading: boolean;
  error: string | null;
}
