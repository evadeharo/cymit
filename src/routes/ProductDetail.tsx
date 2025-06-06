import { Navigate, useParams } from "react-router-dom";
import { useProducts } from "../context/ProductContext";

export function ProductDetail() {
  const { id } = useParams<{ id: string }>();
  const { products, loading, error } = useProducts();

  const product = products.find((p) => String(p.id) === id);

  if (loading) return <p className="text-center mt-10">Cargando producto...</p>;
  if (error)
    return <p className="text-center mt-10 text-red-600">Error: {error}</p>;

  if (!product) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="pt-32 p-12 flex flex-col gap-24 relative">
      <nav className="fixed inset-0 h-16 z-50 flex items-center justify-center border-b border-px mx-12">
        <span className="font-bold text-[1.6rem]">CYMIT</span>
      </nav>

      <h1 className="text-[3rem] leading-tight font-bold w-1/2 m-auto text-center">
        {product.title}
      </h1>
    </div>
  );
}
