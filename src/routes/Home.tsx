import React, { useEffect, useState } from "react";
import { fetchProducts, Product } from "../services/products";
import { useProducts } from "../context/ProductContext";

export function Home() {
  const { products, loading, error } = useProducts();

  if (loading) return <p>Cargando productos...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="pt-32 p-12 flex flex-col gap-24 relative">
      <nav className="fixed inset-0 h-16 z-50 flex items-center justify-center border-b border-px mx-12">
        <span className="font-bold text-[1.6rem]">CYMIT</span>
      </nav>

      <h1 className="text-[3rem] leading-tight font-bold w-1/2 m-auto text-center">
        Explora nuestra colección de productos cosméticos
      </h1>

      <div className="flex flex-col gap-6">
        <h2 className="font-bold text-[2rem]">Encuentra lo que buscas</h2>
        <div>Aquí el buscador</div>
      </div>
      <div className="flex flex-col gap-6">
        <h2 className="font-bold text-[2rem]">¡Cuidado! Que se acaban</h2>
        <ul className="grid grid-cols-4 lg:grid-cols-12 gap-4 w-full">
          {products
            .filter((product) => product.stock < 8)
            .map((product) => (
              <li
                className="col-span-3 aspect-square relative bg-gray rounded-2xl"
                key={product.id}
              >
                <a
                  href={`/product/${product.id}`}
                  aria-label={`Navigate to: ${product.title}`}
                >
                  {product.title} - ${product.price}
                  {product.images[0] && (
                    <img
                      src={product.images[0]}
                      alt={product.title}
                      className="w-full h-auto object-cover absolute inset-0"
                    />
                  )}
                </a>
              </li>
            ))}
        </ul>
      </div>

      <div className="flex flex-col gap-6">
        <h2 className="font-bold text-[2rem]">Los mejores valorados</h2>
        <ul className="grid grid-cols-4 lg:grid-cols-12 gap-4 w-full">
          {products
            .filter((product) => product.rating > 4)
            .map((product) => (
              <li
                className="col-span-3 aspect-square bg-gra relative bg-gray rounded-2xl"
                key={product.id}
              >
                <a
                  href={`/product/${product.id}`}
                  aria-label={`Navigate to: ${product.title}`}
                >
                  {product.title} - ${product.price}
                  {product.images[0] && (
                    <img
                      src={product.images[0]}
                      alt={product.title}
                      className="w-full h-auto object-cover absolute inset-0"
                    />
                  )}
                </a>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
}
