export interface User {
  uid: string;
  firstName: string;
  lastName: string;
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
  loaded: boolean;
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
export interface Review {
  id: string;
  userId: string;
  customerName: string;
  rating: number;
  comment: string;
  createdAt: string;
}

export interface Product {
  id?: string;
  name: string;
  originalPrice: number;
  salePrice: number;
  stock: number;
  details: string;
  image: string[];
  reviews: Review[];
}
