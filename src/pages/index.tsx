// vendors
import { Loader, SimpleGrid } from "@mantine/core";
import { useState, useEffect } from "react";
import { Carousel } from "@mantine/carousel";
import Link from "next/link";
import axios from "axios";

// components
import { FeaturesCard } from "../components/FeaturesCard/FeaturesCard";

// typings
import { Product } from "../typings/products";
import { Departaments } from "../typings/departaments";

// styles
import * as S from "../styles/index";

const api = axios.create({
  baseURL: "/api",
});

interface ProductsProps {
  loading: boolean;
  products: {
    items?: Product[];
  };
  items: Product[];
  setItems: (items: Product[]) => void;
}

function Products({ loading, products, items, setItems }: ProductsProps) {
  if (loading) {
    return (
      <S.CarouselLoaderBox>
        <Loader color="blue.8" />
      </S.CarouselLoaderBox>
    );
  }

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
      {products?.items?.map((products) => (
        <Carousel.Slide key={products.id}>
          <FeaturesCard isInCarousel produto={products} items={items} setItems={setItems} />
        </Carousel.Slide>
      ))}
    </Carousel>
  );
}

interface DepartamentsProps {
  loading: boolean;
  departaments: {
    items: Departaments[];
  };
}

function DepartamentsProduct({ loading, departaments }: DepartamentsProps) {
  if (loading) {
    return (
      <S.DepartamentLoaderBox>
        <Loader color="blue.8" />
      </S.DepartamentLoaderBox>
    );
  }

  return (
    <SimpleGrid
      cols={4}
      spacing="lg"
      breakpoints={[
        { maxWidth: 980, cols: 3, spacing: "md" },
        { maxWidth: 755, cols: 2, spacing: "sm" },
        { maxWidth: 400, cols: 1, spacing: "xs" },
      ]}
    >
      {departaments.items.map((item) => (
        <Link key={item.name} href={`/${item.departament}/${item.slug}`}>
          <S.DepartamentGridCol>
            <div> {item.name}</div>
            <div>
              <S.Images src={item.image} alt={item.name} />
            </div>
          </S.DepartamentGridCol>
        </Link>
      ))}
    </SimpleGrid>
  );
}

interface HomePageProps {
  items: Product[];
  setItems: (items: Product[]) => void;
}

export default function HomePage({ items, setItems }: HomePageProps) {
  const [products, setProducts] = useState<Product>();
  const [departaments, setDepartaments] = useState<{ items: Departaments[] }>();

  async function fetchAndLoadOffers() {
    const response = await api.get("/offers");
    setProducts(response.data);
  }

  async function fetchAndLoadDepartaments() {
    const response = await api.get("/departaments");
    setDepartaments(response.data);
  }

  useEffect(() => {
    fetchAndLoadOffers();
    fetchAndLoadDepartaments();
  }, []);

  if (!products) {
    return;
  }

  if (!departaments) {
    return;
  }

  return (
    <>
      <h2>Promoção</h2>

      <Products products={products} loading={!products?.items} items={items} setItems={setItems} />

      <h2>Departamentos</h2>

      <DepartamentsProduct departaments={departaments} loading={departaments.items.length == 0} />
    </>
  );
}
