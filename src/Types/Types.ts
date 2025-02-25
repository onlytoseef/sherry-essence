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
  image: string[];
  bottleSize: string;
  stock: number;
  category: "male" | "female";
  collection: "flora" | "lora" | "aura";
}

export interface ProductState {
  products: Product[];
  loading: boolean;
  error: string | null;
}

export interface ProductData {
  name: string;
  description: string;
  originalPrice: number;
  salePrice: number;
  image: any;
  bottleSize: string;
  stock: number;
  category: string;
  collection: string;
}
