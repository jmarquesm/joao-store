// vendors
import { Text, Badge } from "@mantine/core";
import Link from "next/link";

// components
import { addToCart } from "../../utils/addToCart";

// icons
import { IconShoppingCartPlus } from "@tabler/icons";

// typings
import { Product } from "../../typings/products";

// styles
import * as S from "./styles";

interface Props {
  product: Product;
  isInCarousel?: boolean;
  items: Product[];
  setItems: (items: Product[]) => void;
}

export function FeaturesCard({ product, isInCarousel, items, setItems }: Props) {
  return (
    <S.Container withBorder radius="md">
      <S.ImageCard>
        <Link href={`/produtos/${product.id}`}>
          <S.Image $isInCarousel={!!isInCarousel} src={product.coverImage} alt={product.title} />
        </Link>
      </S.ImageCard>

      <S.Title mt="md">
        <div>
          <Text weight={200}>{product.title}</Text>

          <Text lineClamp={2} size="xs" color="dimmed">
            {product.description}
          </Text>
        </div>
      </S.Title>

      <S.Price>
        <S.PriceBox>
          <Text size="md" weight={400} sx={{ lineHeight: 1 }}>
            R${product.price.toFixed(2).replace(".", ",")}
          </Text>
          <Text>{product.offer && <Badge variant="outline">{product.offer}% OFF</Badge>}</Text>
        </S.PriceBox>

        <S.ButtonBox>
          <S.Button
            onClick={() => {
              addToCart(product, items, setItems);
            }}
          >
            <IconShoppingCartPlus size={20} />
            Adicionar
          </S.Button>
        </S.ButtonBox>
      </S.Price>
    </S.Container>
  );
}
