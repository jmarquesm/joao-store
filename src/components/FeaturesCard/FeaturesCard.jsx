// vendors
import { Text, Badge } from "@mantine/core";
import { showNotification } from "@mantine/notifications";
import Link from "next/link";

// components
import { addToCart } from "../../utils/addToCart";

// icons
import { IconCheck, IconShoppingCartPlus } from "@tabler/icons";

// styles
import * as S from "./styles";

export function FeaturesCard({ produto, isInCarousel, items, setItems }) {
  function NotificationPurchase() {
    showNotification({
      icon: <IconCheck size={20} />,
      title: "Produto adicionado ao carrinho",
      autoClose: 2000,
    });
  }

  return (
    <S.Container withBorder radius="md">
      <S.ImageCard>
        <Link href={`/produtos/${produto.id}`}>
          <S.StyledImage isInCarousel={isInCarousel} src={produto.coverImage} alt={produto.title} />
        </Link>
      </S.ImageCard>

      <S.Title position="apart" mt="md">
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
              NotificationPurchase();
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
