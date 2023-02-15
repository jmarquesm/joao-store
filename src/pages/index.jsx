// vendors
import { Loader, SimpleGrid } from "@mantine/core";
import { useState, useEffect } from "react";
import { Carousel } from "@mantine/carousel";
import Link from "next/link";

// components
import Layout from "../components/common/Layout/Layout";
import { FeaturesCard } from "../components/FeaturesCard/FeaturesCard";

// styles
import * as S from "../styles/index";

function Products({ loading, products, items, setItems }) {
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
      {products?.items?.map((produto) => (
        <Carousel.Slide key={produto.id}>
          <FeaturesCard isInCarousel produto={produto} items={items} setItems={setItems} />
        </Carousel.Slide>
      ))}
    </Carousel>
  );
}

function Departaments({ loading, departments }) {
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
      {departments.items.map((item) => (
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

export default function HomePage({ items, setItems }) {
  const [products, setProducts] = useState();
  const [departments, setDepartaments] = useState([]);

  useEffect(() => {
    setProducts({});

    return () => {
      setProducts({});
    };
  }, []);

  useEffect(() => {
    fetch(`/api/offers`)
      .then((response) => response.json())
      .then((productData) => {
        setProducts(productData);
      });
    fetch(`/api/departaments`)
      .then((response) => response.json())
      .then((departamentData) => {
        setDepartaments(departamentData);
      });
  }, []);

  if (!departments.items) {
    return;
  }

  return (
    <Layout items={items} setItems={setItems}>
      <h2>Promoção</h2>

      <Products products={products} loading={!products?.items} items={items} setItems={setItems} />

      <h2>Departamentos</h2>

      <Departaments departments={departments} loading={departments.items.length == 0} />
    </Layout>
  );
}
