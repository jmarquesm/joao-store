// vendors
import React, { useEffect, useState } from "react";
import { Grid, Loader } from "@mantine/core";
import { useRouter } from "next/router";
import axios from "axios";

// components
import { FeaturesCard } from "../../../components/FeaturesCard/FeaturesCard";

// utils
import { isEmpty } from "../../../utils/isEmpty";

// typing
import { Product } from "../../../typings/products";

// styles
import * as S from "../../../styles/departaments-page";

const api = axios.create({
  baseURL: "/api",
});

interface Category {
  id: string;
  items: Product[];
  name: string;
}

interface ProductProps {
  loading: boolean;
  category?: Category;
  items: Product[];
  setItems: (items: Product[]) => void;
}

interface DepartamentProps {
  items: Product[];
  setItems: (items: Product[]) => void;
}

function Products({ loading, category, items, setItems }: ProductProps) {
  if (loading || !category) {
    return (
      <S.LoadingContainer $loading={loading}>
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
            <FeaturesCard product={produto} items={items} setItems={setItems} />
          </Grid.Col>
        ))}
      </Grid>
    </>
  );
}

function DepartamentsPage({ items, setItems }: DepartamentProps) {
  const [category, setCategory] = useState<Category>();
  const router = useRouter();
  const categoryid = router.query.category;
  const subCategoryid = router.query.subCategory;

  useEffect(() => {
    async function fetchAndLoadSubCategoryId() {
      const response = await api.get(`/categories/${categoryid}/${subCategoryid}`);
      setCategory(response.data);
    }

    if (categoryid && subCategoryid) {
      fetchAndLoadSubCategoryId();
    }
  }, [categoryid, subCategoryid]);

  return <Products loading={isEmpty(category)} category={category} items={items} setItems={setItems} />;
}

export default DepartamentsPage;
