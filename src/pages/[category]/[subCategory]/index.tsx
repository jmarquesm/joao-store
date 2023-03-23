// vendors
import React from "react";
import { GetServerSidePropsContext, InferGetServerSidePropsType } from "next";

// components
import { Products } from "../../../components/common/Products/ProductsComponent";

// data
import { getCategory, getProductsByCategory } from "../../api/categories/[slug]";

// typing
import { Product } from "../../../typings/products";

interface ProductsPageProps extends InferGetServerSidePropsType<typeof getServerSideProps> {
  items: Product[];
  setItems: (items: Product[]) => void;
}

export default function ProductsPage({ products, category, items, setItems }: ProductsPageProps) {
  return <Products products={products} category={category} items={items} setItems={setItems} />;
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const slug = String(context.query.subCategory);
  const category = await getCategory(slug);
  const products = await getProductsByCategory(slug);

  if (!category) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      category,
      products,
    },
  };
}
