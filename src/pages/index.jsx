import { StatsGroup } from "../components/StatsGroup";
import { Box, Container, Image, Loader, SimpleGrid, Title } from "@mantine/core";
import { useState, useEffect } from "react";
import Layout from "../components/common/Layout";
import { Carousel } from "@mantine/carousel";
import Link from "next/link";
import { FeaturesCard } from "../components/FeaturesCard";
import styled from "@emotion/styled";

const StyledDepartamentGridCol = styled.div`
  font-weight: 700;
  text-align: center;
  padding: 16px;
  display: flex;
  overflow: hidden;
  align-items: top;
  justify-content: center;
  border: 1px solid
    ${({ theme }) => (theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[3])};
  border-radius: 8px;
  flex-direction: column;
  cursor: pointer;
`;

const StyledStatsLoaderBox = styled(Box)`
  min-height: 190.1px;

  background-image: linear-gradient(
    -60 deg,
    ${({ theme }) => theme.colors[theme.primaryColor][4]} 00%,
    ${({ theme }) => theme.colors[theme.primaryColor][7]} 100%
  );

  padding: ${({ theme }) => theme.spacing.xl * 1.5}px;
  border-radius: ${({ theme }) => theme.radius.md}px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledCarouselLoaderBox = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 450;
`;

const StyledDepartamentLoaderBox = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 460;
`;

function HomePage({ items, setItems }) {
  const [stats, setStats] = useState([]);
  const [products, setProducts] = useState();
  const [departments, setDepartaments] = useState([]);

  useEffect(() => {
    setProducts({});

    return () => {
      setProducts({});
    };
  }, []);

  useEffect(() => {
    fetch(`/api/estatistica`)
      .then((response) => response.json())
      .then((statsData) => {
        setStats(statsData);
      });
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

  if (departments.items == undefined) {
    return;
  }

  return (
    <Layout items={items} setItems={setItems}>
      <Container>
        <Title size={"h2"} my={"md"}>
          Promoção
        </Title>
        {!products?.items ? (
          <StyledCarouselLoaderBox>
            <Loader color="blue.8" />
          </StyledCarouselLoaderBox>
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
            {products?.items?.map((produto) => (
              <Carousel.Slide key={produto.id}>
                <FeaturesCard isInCarousel produto={produto} items={items} setItems={setItems} />
              </Carousel.Slide>
            ))}
          </Carousel>
        )}
      </Container>
      <Container>
        <Title size={"h2"} my={"md"}>
          Departamentos
        </Title>
        {departments.items.length == 0 ? (
          <StyledDepartamentLoaderBox>
            <Loader color={"#228be6"} />
          </StyledDepartamentLoaderBox>
        ) : (
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
                <StyledDepartamentGridCol>
                  <div> {item.name}</div>
                  <div>
                    <Image src={item.image} alt={item.name} />
                  </div>
                </StyledDepartamentGridCol>
              </Link>
            ))}
          </SimpleGrid>
        )}
      </Container>
      <Container>
        <Title size={"h2"} my={"md"}>
          Estatísticas
        </Title>
        {stats.length == 0 ? (
          <StyledStatsLoaderBox>
            <Loader color={"white"} />
          </StyledStatsLoaderBox>
        ) : (
          <StatsGroup data={stats} />
        )}
      </Container>
    </Layout>
  );
}

export default HomePage;
