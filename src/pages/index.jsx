import { StatsGroup } from "../components/StatsGroup";
import {
  Box,
  Container,
  createStyles,
  Image,
  Loader,
  SimpleGrid,
  Title,
} from "@mantine/core";
import { useState, useEffect } from "react";
import Layout from "../components/common/Layout";
import { Carousel } from "@mantine/carousel";
import Link from "next/link";
import { FeaturesCard } from "../components/FeaturesCard";

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
  departamentGridCol: {
    fontWeight: 700,
    textAlign: "center",
    height: 220,
    padding: 16,
    display: "flex",
    overflow: "hidden",
    alignItems: "top",
    justifyContent: "center",
    border: `1px solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[3]
    }`,
    borderRadius: 8,
    flexDirection: "column",
    cursor: "pointer",
  },
  departamentGridImg: {
    display: "flex",
    flexWrap: "nowrap",
    flexDirection: "column",
    alignItems: "stretch",
  },
}));

function HomePage({ items, setItems }) {
  const [stats, setStats] = useState([]);
  const [products, setProducts] = useState();
  const [departments, setDepartaments] = useState([]);
  const { classes } = useStyles();

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
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              minHeight: 450,
            }}
          >
            <Loader color={"#228be6"} />
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
              { maxWidth: "xs", slideSize: "100%", slideGap: 0 },
            ]}
            align="start"
            dragFree
            loop
          >
            {products?.items?.map((produto) => (
              <Carousel.Slide key={produto.id}>
                <FeaturesCard
                  isInCarousel
                  produto={produto}
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
          Departamentos
        </Title>
        {departments.items.length == 0 ? (
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              minHeight: 460,
            }}
          >
            <Loader color={"#228be6"} />
          </Box>
        ) : (
          <SimpleGrid
            cols={4}
            spacing="lg"
            breakpoints={[
              { maxWidth: 980, cols: 3, spacing: "md" },
              { maxWidth: 755, cols: 2, spacing: "sm" },
              { maxWidth: 600, cols: 1, spacing: "sm" },
            ]}
          >
            {departments.items.map((item) => (
              <Link key={item.name} href={`/${item.departament}/${item.slug}`}>
                <div className={classes.departamentGridCol}>
                  <div> {item.name}</div>
                  <div className={classes.departamentGridImg}>
                    <Image src={item.image} alt={item.name} />
                  </div>
                </div>
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
