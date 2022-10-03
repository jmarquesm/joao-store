import { Container, Grid, Loader, Title } from "@mantine/core";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { FeaturesCard } from "../../../components/FeaturesCard";
import Layout from "../../../components/common/Layout";

function DepartamentsPage({ items, setItems }) {
  const [category, setCategory] = useState({});
  const router = useRouter();
  const categoryid = router.query.category;
  const subCategoryid = router.query.subCategory;

  useEffect(() => {
    if (categoryid && subCategoryid)
      fetch(`/api/categories/${categoryid}/${subCategoryid}`)
        .then((response) => response.json())
        .then((categoryData) => {
          setCategory(categoryData);
        });
  }, [categoryid, subCategoryid]);

  return (
    <Layout items={items} setItems={setItems}>
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
              <Grid.Col lg={3} md={4} sm={4} xs={6} span={12} key={produto.id}>
                <FeaturesCard
                  produto={produto}
                  items={items}
                  setItems={setItems}
                />
              </Grid.Col>
            ))}
          </Grid>
        </Container>
      )}
    </Layout>
  );
}

export default DepartamentsPage;
