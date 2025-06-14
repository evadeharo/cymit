import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
  useMemo,
} from "react";
import { fetchProducts, Product } from "../services/products";

interface ProductContextValue {
  products: Product[];
  loading: boolean;
  error: string | null;
}

const ProductContext = createContext<ProductContextValue | undefined>(
  undefined
);

export function ProductProvider({ children }: { children: ReactNode }) {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchProducts()
      .then((data) => {
        setProducts(data.products);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  const value = useMemo(
    () => ({
      products,
      loading,
      error,
    }),
    [products, loading, error]
  );

  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  );
}

export function useProducts() {
  const context = useContext(ProductContext);
  if (!context)
    throw new Error("useProducts must be used within a ProductProvider");
  return context;
}
