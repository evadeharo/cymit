import useEmblaCarousel from "embla-carousel-react";
import { NextButton, PrevButton, usePrevNextButtons } from "./EmblaButtons";
import { Product } from "../services/products";
import ProductCard from "./ProductCard";

type Props = {
  items: Product[];
  title?: string;
};

export default function EmblaSlider({ items, title }: Props) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ align: "start" });

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  return (
    <section className="relative flex flex-col gap-8 overflow-hidden p-12">
      <div className="flex justify-between items-center">
        {title && <h2 className="font-bold text-[2rem]">{title}</h2>}

        <div className="flex justify-center gap-4">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>
      </div>
      <div className="w-full" ref={emblaRef}>
        <ul className="flex gap-6">
          {items.map((product) => (
            <li key={product.id} className="flex-[0_0_30%]">
              <ProductCard product={product} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
