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
  bottleSize: number;
  stock: number;
  category: "male" | "female";
  collection: "flora" | "lora" | "aura";
  details: string;
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
  bottleSize: number;
  stock: number;
  category: string;
  collection: string;
  details: string;
}
