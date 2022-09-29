import { StatsGroup } from "../components/StatsGroup";
import { Box, Container, createStyles, Loader, Title } from "@mantine/core";
import { useState, useEffect } from "react";
import Layout from "../components/common/Layout";
import { Carousel } from "@mantine/carousel";
import { CaroselsCard } from "../components/CaroselsCard";

const useStyles = createStyles((theme) => ({
  root: {
    minHeight: 190.1,
    display: "flex",
    backgroundImage: `linear-gradient(-60deg, ${
      theme.colors[theme.primaryColor][4]
    } 00%, ${theme.colors[theme.primaryColor][7]} 100%)`,
    padding: theme.spacing.xl * 1.5,
    borderRadius: theme.radius.md,

    [theme.fn.smallerThan("sm")]: {
      flexDirection: "column",
    },
  },
}));

function HomePage({ items, setItems }) {
  const [stats, setStats] = useState([]);
  const [products, setProducts] = useState({});
  const { classes } = useStyles();

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
  }, []);

  return (
    <Layout items={items} setItems={setItems}>
      <Container>
        <Title size={"h2"} my={"md"}>
          Promoção
        </Title>
        {!products?.items ? (
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              minHeight: 450,
            }}
          >
            <Loader color={"white"} />
          </Box>
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
              { maxWidth: "md", slideSize: "50%" },
              { maxWidth: "sm", slideSize: "100%", slideGap: 0 },
            ]}
            align="start"
            dragFree
            loop
          >
            {products?.items?.map((produto) => (
              <Carousel.Slide key={produto.name}>
                <CaroselsCard
                  image={produto.image}
                  title={produto.marca}
                  description={produto.name}
                  price={produto.price}
                  offer={produto.offer}
                  items={items}
                  setItems={setItems}
                />
              </Carousel.Slide>
            ))}
          </Carousel>
        )}
      </Container>

      <Container>
        <Title size={"h2"} my={"md"}>
          Estatísticas
        </Title>
        {stats.length == 0 ? (
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            className={classes.root}
          >
            <Loader color={"white"} />
          </Box>
        ) : (
          <StatsGroup data={stats} />
        )}
      </Container>
    </Layout>
  );
}

export default HomePage;
