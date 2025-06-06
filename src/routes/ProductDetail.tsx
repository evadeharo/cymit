import { Navigate, useParams } from "react-router-dom";
import { useProducts } from "../context/ProductContext";
import EmblaSlider from "../components/EmblaSlider";
import Header from "../components/Header";

export function ProductDetail() {
  const { id } = useParams<{ id: string }>();
  const { products, loading, error } = useProducts();

  const product = products.find((p) => String(p.id) === id);

  if (loading)
    return (
      <div className="pt-32 p-12 flex flex-col gap-24 relative">
        <Header />
      </div>
    );

  if (error)
    return (
      <div className="pt-32 p-12 flex flex-col gap-24 relative">
        <Header />
        <p className="text-center mt-10 text-red-600">Error: {error}</p>
      </div>
    );

  if (!product) {
    return <Navigate to="/" replace />;
  }

  return (
    <>
      <div className="pt-32 p-12 flex flex-col gap-24 relative">
        <Header />

        <div className="flex flex-col gap-4">
          <h1 className="text-[3rem] leading-tight font-bold w-2/3 m-auto text-center">
            {product.title}
          </h1>
          <h2 className="text-[2rem] leading-tight font-light w-1/2 m-auto text-center">
            {product.brand}
          </h2>
        </div>

        <div className="flex justify-between">
          <div className="w-[40%] aspect-square rounded-2xl border border-gray">
            <img
              src={product.images[0]}
              alt={product.title}
              className="w-full object-fit"
            />
          </div>
          <div className="w-[55%] flex flex-col justify-between gap-6">
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-3">
                <h2 className="text-[1.4rem] font-bold">
                  Know more about this product
                </h2>
                <p className="text-[1rem] w-[80%]">{product.description}</p>
              </div>

              <div className="flex gap-20">
                <div className="flex flex-col gap-3 max-w-1/2">
                  <h2 className="text-[1.4rem] font-bold">Category</h2>
                  <p className="text-[1rem] px-3 py-1 capitalize border border-gray rounded-full w-max">
                    {product.category}
                  </p>
                </div>

                <div className="flex flex-col gap-3 w-1/2">
                  <h2 className="text-[1.4rem] font-bold">Tags</h2>
                  <ul className="flex gap-2">
                    {product.tags.map((tag) => (
                      <li className="text-[1rem] px-3 py-1 capitalize border border-gray rounded-full w-max">
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
                {(product.shippingInformation ||
                  (!product.warrantyInformation &&
                    product.shippingInformation)) && <span>|</span>}
                {product.shippingInformation && (
                  <p className="text-[1rem]">{product.shippingInformation}</p>
                )}
              </div>

              {product.stock > 0 && (
                <div className="flex gap-3">
                  <h2 className="text-[1.4rem] font-bold">Cómpralo por:</h2>
                  <p className="text-[1rem] px-3 py-1 border border-gray rounded-full w-max">
                    {product.price}€
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-8 overflow-hidden">
          <h2 className="font-bold text-[2rem]">Lo que opina la gente</h2>
          <div className="flex flex-wrap gap-6">
            {product.reviews.map((review, index) => (
              <div
                key={index}
                className="w-[32%] rounded-2xl border border-gray p-4"
              >
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
            ))}
          </div>
        </div>
      </div>

      <EmblaSlider
        items={products.filter((item) => item.category === product.category)}
        title="De la misma categoría"
      />
    </>
  );
}
