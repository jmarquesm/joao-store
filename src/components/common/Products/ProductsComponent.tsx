// vendors
import { Grid } from "@mantine/core";

// components
import { FeaturesCard } from "../../../components/FeaturesCard/FeaturesCard";

// typings
import { Product } from "../../../typings/products";

interface Category {
  id: number;
  slug: string;
  name: string;
  departament: string;
  image: string;
}

interface ProductProps {
  products: Product[];
  category: Category;
  items: Product[];
  setItems: (items: Product[]) => void;
}

export function Products({ products, category, items, setItems }: ProductProps) {
  return (
    <>
      <h2>{category.name}</h2>

      <Grid>
        {products.map((product) => (
          <Grid.Col lg={3} md={4} sm={4} xs={6} span={12} key={product.id}>
            <FeaturesCard product={product} items={items} setItems={setItems} />
          </Grid.Col>
        ))}
      </Grid>
    </>
  );
}
