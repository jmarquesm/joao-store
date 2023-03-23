// vendors
import { InferGetServerSidePropsType } from "next";

// components
import { DepartamentsProduct } from "../components/common/Home/Departaments/Departaments";
import { Products } from "../components/common/Home/ProductsCarousel/ProductsCarousel";

// typings
import { Product } from "../typings/products";

// data
import { getDepartaments } from "../pages/api/departaments";
import { getOffers } from "../pages/api/offers";

interface HomePageProps extends InferGetServerSidePropsType<typeof getServerSideProps> {
  items: Product[];
  setItems: (items: Product[]) => void;
}

export default function HomePage({ items, setItems, departaments, products }: HomePageProps) {
  return (
    <>
      <h2>Promoção</h2>

      <Products products={products} items={items} setItems={setItems} />

      <h2>Departamentos</h2>

      <DepartamentsProduct departaments={departaments} />
    </>
  );
}

export async function getServerSideProps() {
  const departaments = await getDepartaments();
  const products = await getOffers();

  return {
    props: {
      departaments,
      products,
    },
  };
}
