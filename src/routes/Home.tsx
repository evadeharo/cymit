import { useProducts } from "../context/ProductContext";
import { Layout } from "../components/Layout";
import EmblaSlider from "../components/EmblaSlider";
import Search from "../components/Search";
import AppearAnimation from "../components/AppearAnimation";

export function Home() {
  const { products, loading, error } = useProducts();

  if (loading) return <Layout />;

  if (error)
    return (
      <Layout>
        <p className="text-center mt-10 text-red-600">Error: {error}</p>
      </Layout>
    );

  return (
    <>
      <Layout>
        <AppearAnimation>
            <h1 className="text-[2rem] lg:text-[3rem] leading-tight font-bold lg:w-1/2 m-auto text-center pt-24">
            Explora nuestra colección de productos cosméticos
            </h1>
        </AppearAnimation>
      </Layout>

      <Search products={products} />

      <EmblaSlider
        items={products.filter((product) => product.stock < 8)}
        title="¡Cuidado! Que se acaban"
      />

      <EmblaSlider
        items={products.filter((product) => product.rating > 4)}
        title="Los mejores valorados"
      />
    </>
  );
}
