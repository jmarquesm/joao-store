// vendors
import { Carousel } from "@mantine/carousel";

// components
import { FeaturesCard } from "../../../FeaturesCard/FeaturesCard";

// typings
import { Product } from "../../../../typings/products";

interface ProductsProps {
  products: Product[];
  items: Product[];
  setItems: (items: Product[]) => void;
}

export function Products({ products, items, setItems }: ProductsProps) {
  return (
    <Carousel
      styles={{
        indicator: {
          background: "gray",
        },
      }}
      withIndicators
      height={450}
      slideSize="33.333333%"
      slideGap="md"
      breakpoints={[
        { maxWidth: "sm", slideSize: "50%" },
        { maxWidth: "xs", slideSize: "100%", slideGap: 0 },
      ]}
      align="start"
      dragFree
      loop
    >
      {products?.map((products) => (
        <Carousel.Slide key={products.id}>
          <FeaturesCard isInCarousel product={products} items={items} setItems={setItems} />
        </Carousel.Slide>
      ))}
    </Carousel>
  );
}
