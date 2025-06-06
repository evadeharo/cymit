import { Navigate, useParams } from "react-router-dom";
import { useProducts } from "../context/ProductContext";
import { Layout } from "../components/Layout";
import { useMemo } from "react";
import EmblaSlider from "../components/EmblaSlider";
import AppearAnimation from "../components/AppearAnimation";

function ProductHeader({ title, brand }: { title: string; brand: string }) {
  return (
    <div className="flex flex-col gap-4">
      <AppearAnimation>
        <h1 className="text-[2rem] lg:text-[3rem] leading-tight font-bold lg:w-2/3 m-auto text-center pt-24">
          {title}
        </h1>
      </AppearAnimation>
      <AppearAnimation>
        <h2 className="text-[1.6rem] lg:text-[2rem] leading-tight font-light lg:w-1/2 m-auto text-center">
          {brand}
        </h2>
      </AppearAnimation>
    </div>
  );
}

function ProductMeta({ product }: { product: any }) {
  return (
    <div className="flex flex-col lg:flex-row justify-between">
      <div className="lg:w-[40%] aspect-square rounded-2xl border border-gray">
        <img
          src={product.images?.[0]}
          alt={product.title}
          className="w-full object-fit"
        />
      </div>

      <div className="lg:w-[55%] flex flex-col justify-between gap-6 pt-8 lg:pt-0">
        <div className="flex flex-col gap-8 lg:gap-6">
          <div className="flex flex-col gap-3">
            <AppearAnimation>
              <h2 className="h2Styles">Conoce más sobre este producto</h2>
            </AppearAnimation>
            <p className="text-[1rem] lg:w-[80%]">{product.description}</p>
          </div>

          <div className="flex flex-col lg:flex-row gap-8 lg:gap-20">
            <div className="flex flex-col gap-3 max-w-1/2">
              <AppearAnimation>
                <h2 className="h2Styles">Categoría</h2>
              </AppearAnimation>
              <p className="text-[1rem] px-3 py-1 capitalize border border-gray rounded-full w-max">
                {product.category}
              </p>
            </div>

            <div className="flex flex-col gap-3 w-1/2">
              <AppearAnimation>
                <h2 className="h2Styles">Tags</h2>
              </AppearAnimation>
              <ul className="flex gap-2 flex-wrap">
                {product.tags.map((tag: string, index: number) => (
                  <li
                    key={index}
                    className="text-[1rem] px-3 py-1 capitalize border border-gray rounded-full w-max"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <div className="flex gap-3">
            {product.warrantyInformation && (
              <p className="text-[1rem]">{product.warrantyInformation}</p>
            )}
            {product.shippingInformation && (
              <>
                {product.warrantyInformation && <span>|</span>}
                <p className="text-[1rem]">{product.shippingInformation}</p>
              </>
            )}
          </div>

          {product.stock > 0 && (
            <div className="flex gap-3">
              <AppearAnimation>
                <h2 className="h2Styles">Cómpralo por:</h2>
              </AppearAnimation>
              <p className="text-[1rem] px-3 py-1 border border-gray rounded-full w-max">
                {product.price}€
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function ReviewCard({ review }: { review: any }) {
  return (
    <div className="w-full lg:w-[32%] rounded-2xl border border-gray p-4">
      <div className="w-full flex justify-between gap-4">
        <span className="text-[1rem] font-bold">{review.reviewerName}</span>
        <div className="flex gap-2">
          <span>{review.rating}/5</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="fill-gray w-4"
          >
            <path d="M12 2l2.9 6.6L22 9.3l-5.5 5.1 1.3 7.3L12 18l-5.8 3.7L7.5 14.4 2 9.3l7.1-0.7L12 2z" />
          </svg>
        </div>
      </div>
      <p className="text-[1rem]">{review.comment}</p>
    </div>
  );
}

function Reviews({ reviews }: { reviews: any[] }) {
  return (
    <div className="flex flex-col gap-8 overflow-hidden">
      <AppearAnimation>
        <h2 className="h2Styles">Lo que opina la gente</h2>
      </AppearAnimation>
      <div className="flex flex-wrap gap-6">
        {reviews.map((review, index) => (
          <ReviewCard key={index} review={review} />
        ))}
      </div>
    </div>
  );
}

export function ProductDetail() {
  const { id } = useParams<{ id: string }>();
  const { products, loading, error } = useProducts();

  const product = useMemo(
    () => products.find((p) => String(p.id) === id),
    [products, id]
  );

  if (loading) return <Layout />;

  if (error)
    return (
      <Layout>
        <p className="text-center mt-10 text-red-600">Error: {error}</p>
      </Layout>
    );

  if (!product) {
    return <Navigate to="/" replace />;
  }

  return (
    <>
      <Layout>
        <ProductHeader title={product.title} brand={product.brand} />
        <ProductMeta product={product} />
        <Reviews reviews={product.reviews} />
      </Layout>
      <EmblaSlider
        items={products.filter((item) => item.category === product.category && item.id !== product.id)}
        title="De la misma categoría"
      />
    </>
  );
}
