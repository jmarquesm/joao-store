import { Container, Grid, Loader, Title } from "@mantine/core";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { FeaturesCard } from "../../../components/FeaturesCard";
import Layout from "../../../components/common/Layout";

function ProductsPage() {
  const [category, setCategory] = useState({});
  const router = useRouter();
  const categoryid = router.query.category;
  const subCategoryid = router.query.subCategory;

  useEffect(() => {
    if (categoryid && subCategoryid)
      fetch(`/api/product/${categoryid}/${subCategoryid}`)
        .then((response) => response.json())
        .then((categoryData) => {
          setCategory(categoryData);
        });
  }, [categoryid, subCategoryid]);

  return (
    <Layout>
      {Object.keys(category).length === 0 ? (
        <Container
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          style={{
            minHeight: "calc(100vh - 140px)",
          }}
        >
          <Loader />
        </Container>
      ) : (
        <Container
          style={{
            minHeight: "calc(100vh - 140px)",
          }}
        >
          <Title size={"h2"} my={"md"}>
            {category.name}
          </Title>

          <Grid>
            {category?.items?.map((produto) => (
              <Grid.Col
                lg={3}
                md={4}
                sm={4}
                xs={6}
                span={12}
                key={produto.name}
              >
                <FeaturesCard
                  image={produto.image}
                  title={produto.marca}
                  description={produto.name}
                  price={produto.price}
                  offer={produto.offer}
                />
              </Grid.Col>
            ))}
          </Grid>
        </Container>
      )}
    </Layout>
  );
}

export default ProductsPage;
