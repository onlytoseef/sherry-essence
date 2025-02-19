export interface AuthState {
  user: User | null;
  loading: boolean;
  error: string | null;
}
export type User = {
  uid: string;
  firstName: string;
  lastName: string;
  email: string | null;
  role: "customer" | "admin";
};
