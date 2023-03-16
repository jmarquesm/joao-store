// vendors
import { useState, useEffect } from "react";
import axios from "axios";

// components
import { DepartamentsProduct } from "../components/common/Home/Departaments/Departaments";
import { Products } from "../components/common/Home/ProductsCarousel/ProductsCarousel";

// typings
import { Product } from "../typings/products";
import { Departaments } from "../typings/departaments";

// styles

const api = axios.create({
  baseURL: "/api",
});

interface HomePageProps {
  items: Product[];
  setItems: (items: Product[]) => void;
}

export default function HomePage({ items, setItems }: HomePageProps) {
  const [products, setProducts] = useState<Product>();
  const [departaments, setDepartaments] = useState<{ items: Departaments[] }>();

  async function fetchAndLoadOffers() {
    const response = await api.get("/offers");
    setProducts(response.data);
  }

  async function fetchAndLoadDepartaments() {
    const response = await api.get("/departaments");
    setDepartaments(response.data);
  }

  useEffect(() => {
    fetchAndLoadOffers();
    fetchAndLoadDepartaments();
  }, []);

  if (!products) {
    return;
  }

  if (!departaments) {
    return;
  }

  return (
    <>
      <h2>Promoção</h2>

      <Products products={products} loading={!products?.items} items={items} setItems={setItems} />

      <h2>Departamentos</h2>

      <DepartamentsProduct departaments={departaments} loading={departaments.items.length == 0} />
    </>
  );
}
