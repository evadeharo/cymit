import React, { useEffect, useState } from "react";
import { fetchProducts, Product } from "../services/products";
import { useProducts } from "../context/ProductContext";
import EmblaSlider from "../components/EmblaSlider";
import Header from "../components/Header";

export function Home() {
  const { products, loading, error } = useProducts();

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

  return (
    <>
      <div className="pt-32 p-12 flex flex-col gap-24 relative">
        <Header />

        <h1 className="text-[3rem] leading-tight font-bold w-1/2 m-auto text-center">
          Explora nuestra colección de productos cosméticos
        </h1>

        <div className="flex flex-col gap-6">
          <h2 className="font-bold text-[2rem]">Encuentra lo que buscas</h2>
          <div>Aquí el buscador</div>
        </div>
      </div>

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
