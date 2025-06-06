import { useState } from "react";
import { Product } from "../services/products";

type Props = {
  product: Product;
};

export default function   ProductCard({ product }: Props) {
  return (
    <div className="border border-gray rounded-2xl relative w-full h-full lg:aspect-video lg:grid lg:place-items-center p-5 group">
      <a
        href={`/product/${product.id}`}
        aria-label={`Navigate to: ${product.title}`}
        className="flex flex-col lg:flex-row gap-4 lg:gap-0"
      >
        <div className="lg:w-1/2 aspect-square">
          {product.images[0] && (
            <img
              src={product.images[0]}
              alt={product.title}
              className="w-full object-fit"
            />
          )}
        </div>
        <div className="lg:w-1/2 flex flex-col justify-between">
          <div className="flex flex-col gap-2">
            <h3 className="font-bold text-[1.3rem] leading-tight line-clamp-3">
              {product.title}
            </h3>
            {product.brand && (
              <h4 className="font-light text-[1rem] leading-tight">
                {product.brand}
              </h4>
            )}
            {product.price && (
              <span className="text-[1rem] leading-tight font-bold lg:hidden">
                {product.price}€
              </span>
            )}
          </div>
          <div className="hidden lg:flex flex-col gap-3 transition opacity-0 group-hover:opacity-100 duration-300 ease-in-out">
            {product.description && 
                <p className="text-[0.8rem] line-clamp-3 font-light">{product.description}</p>
            }
            {product.price && (
              <span className="text-[1rem] leading-tight font-bold">
                {product.price}€
              </span>
            )}
          </div>
        </div>
      </a>
    </div>
  );
}
