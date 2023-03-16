// vendors
import { Loader } from "@mantine/core";
import { Carousel } from "@mantine/carousel";

// components
import { FeaturesCard } from "../../../FeaturesCard/FeaturesCard";

// typings
import { Product } from "../../../../typings/products";

// styles
import * as S from "./styles";

interface ProductsProps {
  loading: boolean;
  products: {
    items?: Product[];
  };
  items: Product[];
  setItems: (items: Product[]) => void;
}

export function Products({ loading, products, items, setItems }: ProductsProps) {
  return (
    <>
      {loading ? (
        <S.CarouselLoaderBox>
          <Loader color="blue.8" />
        </S.CarouselLoaderBox>
      ) : (
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
          {products?.items?.map((products) => (
            <Carousel.Slide key={products.id}>
              <FeaturesCard isInCarousel product={products} items={items} setItems={setItems} />
            </Carousel.Slide>
          ))}
        </Carousel>
      )}
    </>
  );
}
