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
  produto: Product;
  isInCarousel?: boolean;
  items: Product[];
  setItems: (items: Product[]) => void;
}

export function FeaturesCard({ produto, isInCarousel, items, setItems }: Props) {
  return (
    <S.Container withBorder radius="md">
      <S.ImageCard>
        <Link href={`/produtos/${produto.id}`}>
          <S.Image $isInCarousel={!!isInCarousel} src={produto.coverImage} alt={produto.title} />
        </Link>
      </S.ImageCard>

      <S.Title mt="md">
        <div>
          <Text weight={200}>{produto.title}</Text>

          <Text lineClamp={2} size="xs" color="dimmed">
            {produto.description}
          </Text>
        </div>
      </S.Title>

      <S.Price>
        <S.PriceBox>
          <Text size="md" weight={400} sx={{ lineHeight: 1 }}>
            R${produto.price.toFixed(2).replace(".", ",")}
          </Text>
          <Text>{produto.offer && <Badge variant="outline">{produto.offer}% OFF</Badge>}</Text>
        </S.PriceBox>

        <S.ButtonBox>
          <S.Button
            onClick={() => {
              addToCart(produto, items, setItems);
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
