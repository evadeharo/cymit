import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Product } from "../services/products";
import EmblaSlider from "./EmblaSlider";
import AppearAnimation from "./AppearAnimation";

type Props = {
  products: Product[];
};

export default function Search({ products }: Props) {
  const [query, setQuery] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [filtered, setFiltered] = useState<Product[] | null>(null);
  const [hasSearched, setHasSearched] = useState(false);

  const handleSearch = () => {
    const trimmed = query.trim();
    const results = products.filter((product) =>
      product.title.toLowerCase().includes(trimmed.toLowerCase())
    );
    setFiltered(results);
    setSearchTerm(trimmed);
    setHasSearched(true);
  };

  return (
    <div className="flex flex-col gap-6 py-6 lg:py-12">
      <AppearAnimation>
        <h2 className="h2Styles px-12 text-center">Encuentra lo que buscas</h2>
      </AppearAnimation>

      <div className="flex justify-center gap-4 items-center lg:pb-10">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Buscar por nombre..."
          className="px-4 py-2 border border-gray rounded-full w-full max-w-[70vw] lg:max-w-md h-10 lg:h-12"
        />
        <button
          onClick={handleSearch}
          className="h-10 lg:h-12 aspect-square grid place-items-center border border-gray text-black hover:bg-gray p-2 rounded-full hover:bg-gray-800"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-5"
          >
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
        </button>
      </div>

      <AnimatePresence mode="wait">
        {hasSearched && filtered !== null && (
          <motion.div
            key={filtered.length > 0 ? "results" : "no-results"}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            transition={{ duration: 0.3 }}
          >
            {filtered.length > 0 ? (
              <EmblaSlider
                items={filtered}
                title={`Resultados para "${searchTerm}"`}
              />
            ) : (
              <div className="text-center text-gray-500 px-12">
                No se encontraron resultados para{" "}
                <strong>"{searchTerm}"</strong>.
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
