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

export interface Product {
  id?: string;
  name: string;
  description: string;
  originalPrice: number;
  salePrice: number;
  image: string; // Comma-separated image links
  bottleSize: string; // Example: "500ml"
  stock: number;
  category: "male" | "female";
  collection: "flora" | "lora" | "aura";
}

export interface ProductState {
  products: Product[];
  loading: boolean;
  error: string | null;
}
