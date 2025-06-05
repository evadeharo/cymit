type ReviewType = {
  rating: number;
  comment: string;
  date: string;
  reviewerName: string;
  reviewerEmail: string;
};

export type Product = {
  id: number;
  title: string;
  description: string;
  price: number;
  category: string;
  thumbnail: string;
  images: string[];
  discountPercentage: number;
  rating: number;
  stock: number;
  tags: string[];
  brand: string;
  warrantyInformation: string;
  shippingInformation: string;
  reviews: ReviewType[];
};

export type ProductsResponse = {
  products: Product[];
  total: number;
  skip: number;
  limit: number;
};

export async function fetchProducts(): Promise<ProductsResponse> {
  const apiUrl = "https://dummyjson.com/products";
  const response = await fetch(apiUrl);

  if (!response.ok) {
    throw new Error(`Error fetching products: ${response.statusText}`);
  }

  const data: ProductsResponse = await response.json();
  return data;
}
