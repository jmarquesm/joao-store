// vendors
import React, { useEffect, useState } from "react";
import { Grid, Loader } from "@mantine/core";
import { useRouter } from "next/router";

// components
import { FeaturesCard } from "../../../components/FeaturesCard/FeaturesCard";
import Layout from "../../../components/common/Layout/Layout";

// styles
import * as S from "./styles";

function Products({ loading, category, items, setItems }) {
  if (loading) {
    return (
      <S.LoadingContainer loading={loading}>
        <Loader />
      </S.LoadingContainer>
    );
  }
  return (
    <>
      <h2>{category.name}</h2>

      <Grid>
        {category?.items?.map((produto) => (
          <Grid.Col lg={3} md={4} sm={4} xs={6} span={12} key={produto.id}>
            <FeaturesCard produto={produto} items={items} setItems={setItems} />
          </Grid.Col>
        ))}
      </Grid>
    </>
  );
}

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
      <Products
        loading={Object.keys(category).length === 0}
        category={category}
        items={items}
        setItems={setItems}
      ></Products>
    </Layout>
  );
}

export default DepartamentsPage;
