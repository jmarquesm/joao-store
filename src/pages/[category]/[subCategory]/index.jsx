import { Container, Grid, Loader, Title } from "@mantine/core";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { FeaturesCard } from "../../../components/FeaturesCard";
import Layout from "../../../components/common/Layout";
import styled from "@emotion/styled";
import { css } from "@emotion/react";

const StyledContainer = styled(Container)`
  min-height: calc(100vh - 140px);

  ${(props) =>
    props.loading &&
    css`
      display: flex;
      align-items: center;
      justify-content: center;
    `}
`;

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

  const loading = Object.keys(category).length === 0;

  return (
    <Layout items={items} setItems={setItems}>
      <StyledContainer loading={loading}>
        {loading ? (
          <Loader />
        ) : (
          <>
            <Title size="h2" my="md">
              {category.name}
            </Title>

            <Grid>
              {category?.items?.map((produto) => (
                <Grid.Col lg={3} md={4} sm={4} xs={6} span={12} key={produto.id}>
                  <FeaturesCard produto={produto} items={items} setItems={setItems} />
                </Grid.Col>
              ))}
            </Grid>
          </>
        )}
      </StyledContainer>
    </Layout>
  );
}

export default DepartamentsPage;
