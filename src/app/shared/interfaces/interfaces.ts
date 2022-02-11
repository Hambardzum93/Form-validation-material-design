export interface Environment {
  production: boolean;
  apiKey: string;
  fbDbUrl: string
}

export interface Product {
  id?: string;
  name: string;
  price: number;
  address: string;
  email: string;
  phoneNumber?: number;
  date?: Date
}
export interface FbCreateResponse {
  name: string
}
