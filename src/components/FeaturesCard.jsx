import styled from "@emotion/styled";
import { Card, Image, Text, Badge, Button, Box } from "@mantine/core";

import { showNotification } from "@mantine/notifications";
import { IconCheck, IconShoppingCartPlus } from "@tabler/icons";
import Link from "next/link";
import { addToCart } from "../utils/addToCart";

const StyledCard = styled(Card)`
  background-color: ${({ theme }) => (theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white)};
`;

const StyleImageSectionCard = styled(Card.Section)`
  display: flex;
  height: 200px;
  overflow: hidden;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid
    ${({ theme }) => (theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[3])};
  cursor: pointer;
`;

const StyledImage = styled(Image)`
  padding: ${({ isInCarousel }) => (isInCarousel ? "50px" : "0px")};
`;

const StyledTitleCard = styled(Card.Section)`
  height: 70px;
  align-items: baseline;
  padding-left: 16px;
  padding-right: 16px;
`;

const StyledPriceSectionCard = styled(Card.Section)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: ${({ theme }) => theme.spacing.md}px;
  border-top: 1px solid
    ${({ theme }) => (theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[3])};
  padding-bottom: 0px;
`;

const StyledPriceBox = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 25px;
`;

const StyledBoxButton = styled(Box)`
  margin-top: 16px;
  padding: 0px;
`;

const StyledButton = styled(Button)`
  margin-left: auto;
  width: -webkit-fill-available;
`;

export function FeaturesCard({ produto, isInCarousel, items, setItems }) {
  function NotificationPurchase() {
    showNotification({
      icon: <IconCheck size={20} />,
      title: "Produto adicionado ao carrinho",
      autoClose: 2000,
    });
  }

  return (
    <StyledCard withBorder radius="md">
      <StyleImageSectionCard>
        <Link href={`/produtos/${produto.id}`}>
          <StyledImage isInCarousel={isInCarousel} src={produto.coverImage} alt={produto.title} />
        </Link>
      </StyleImageSectionCard>

      <StyledTitleCard position="apart" mt="md">
        <div>
          <Text weight={200}>{produto.title}</Text>

          <Text lineClamp={2} size="xs" color="dimmed">
            {produto.description}
          </Text>
        </div>
      </StyledTitleCard>

      <StyledPriceSectionCard>
        <StyledPriceBox>
          <Text size="md" weight={400} sx={{ lineHeight: 1 }}>
            R${produto.price.toFixed(2).replace(".", ",")}
          </Text>
          <Text>{produto.offer && <Badge variant="outline">{produto.offer}% OFF</Badge>}</Text>
        </StyledPriceBox>

        <StyledBoxButton>
          <StyledButton
            onClick={() => {
              addToCart(produto, items, setItems);
              NotificationPurchase();
            }}
          >
            <IconShoppingCartPlus size={20} />
            Adicionar
          </StyledButton>
        </StyledBoxButton>
      </StyledPriceSectionCard>
    </StyledCard>
  );
}
