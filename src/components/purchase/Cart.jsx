import styled from "@emotion/styled";
import { Avatar, Grid, Box, Text, ActionIcon, Button, Title } from "@mantine/core";
import {
  IconBarcode,
  IconCircleMinus,
  IconCirclePlus,
  IconCreditCard,
  IconShoppingCart,
  IconTrash,
} from "@tabler/icons";
import React from "react";

const StyledTitleDiv = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

const StyledClearCartButton = styled(Button)`
  width: 293px;
  margin-left: 15px;
`;

const StyledGlobalCol = styled(Grid.Col)`
  border-radius: 10;
  padding: 0px;
  margin: auto;
  margin-top: 0px;
`;

const StyledGridProductsDescription = styled(Grid)`
  margin: 0px;
`;

const StyledElementCol = styled(Grid.Col)`
  display: flex;
  align-content: center;
  margin: auto;
  font-size: 13px;
`;

const StyledBoxUnitsSection = styled(Box)`
  display: flex;
  align-items: center;
`;

const StyledRemoveItemGrid = styled(Grid.Col)`
  padding: 0;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const StyledGlobalCol2 = styled(Grid.Col)`
  margin-top: 14.9px;
  padding-top: 0px;
  position: sticky;
  top: 20px;
  height: 300px;
`;

const StyledBoxValue = styled(Box)`
  border-radius: 5;
  padding: 5px;
  margin: auto;
  min-width: 200px;
  align-content: center;
  font-size: 13px;
`;

const StyledBoxValueCalc = styled(Box)`
  display: flex;
  justify-content: space-between;
  align-content: center;
  font-size: 13px;
`;

const StyledBoxDiscount = styled(Box)`
  display: flex;
  justify-content: space-between;
  align-content: center;
  font-size: 13px;
  border-top: solid;
  border-top-width: 1px;
`;

const StyledBoxTotalPrice = styled(Box)`
  display: flex;
  justify-content: space-between;
  align-content: center;
  font-size: 13px;
  border-top: solid;
  border-top-width: 1px;
  height: 50px;
  align-items: center;
`;

const StyledBoxFee = styled(Box)`
  display: flex;
  justify-content: flex-start;
  align-content: center;
  font-size: 13px;
  border-top: solid;
  border-top-width: 1px;
  height: 50px;
  align-items: center;
`;

const StyledButtonBox = styled(Box)`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

export function Cart({ items, setItems }) {
  function valueCalc(items) {
    const totalPrices = items
      .reduce((prevValue, element) => prevValue + element.price * element.units, 0)
      .toFixed(2);

    return totalPrices;
  }

  function clearAllCart() {
    setItems([]);
  }

  function removeItemCart(product) {
    const newItems = items.filter((productCart) => productCart.description !== product.description);
    setItems(newItems);
  }

  function incrementUnits(produto) {
    let produtoSelecionado = produto.description;

    items.forEach((_, index) => {
      if (produtoSelecionado === items[index].description) {
        items[index].units += 1;
      }
    });
    const newItems = [...items];
    setItems(newItems);
  }

  function decrementUnits(produto) {
    let produtoSelecionado = produto.description;

    items.forEach((_, index) => {
      if (produtoSelecionado === items[index].description) {
        if (items[index].units <= 1) {
          items[index].units = 1;
        } else {
          items[index].units -= 1;
        }
      }
    });

    const newItems = [...items];
    setItems(newItems);
  }

  return (
    <>
      <StyledTitleDiv>
        <Title size={"h2"} my={"md"}>
          Carrinho
        </Title>
        <StyledClearCartButton variant="default" onClick={clearAllCart}>
          <IconTrash size={18} />
          Limpar Carrinho
        </StyledClearCartButton>
      </StyledTitleDiv>
      <Grid grow gutter="xl">
        <StyledGlobalCol span={12} md={8}>
          {items.map((produto) => (
            <StyledGridProductsDescription key={produto.description}>
              <StyledElementCol span={"content"}>
                <Avatar size={50} src={produto.coverImage} />
              </StyledElementCol>

              <StyledElementCol span={"auto"}>
                <Text lineClamp={2}>{produto.description}</Text>
              </StyledElementCol>

              <StyledElementCol span={2} xs={2} sm={1} md={2}>
                <StyledBoxUnitsSection>
                  <ActionIcon variant="transparent" onClick={() => decrementUnits(produto)}>
                    <IconCircleMinus size={16} />
                  </ActionIcon>
                  <Text>{produto.units}</Text>
                  <ActionIcon variant="transparent" onClick={() => incrementUnits(produto)}>
                    <IconCirclePlus size={16} />
                  </ActionIcon>
                </StyledBoxUnitsSection>
              </StyledElementCol>

              <StyledElementCol span={2.5} xs={2} sm={2} md={2.5}>
                <Text>R$ {produto.price.toFixed(2).replace(".", ",")}</Text>
              </StyledElementCol>

              <StyledRemoveItemGrid span={1} xs={1} sm={1} md={1}>
                <ActionIcon
                  onClick={function () {
                    removeItemCart(produto);
                  }}
                >
                  <IconTrash size={16} />
                </ActionIcon>
              </StyledRemoveItemGrid>
            </StyledGridProductsDescription>
          ))}
        </StyledGlobalCol>

        <StyledGlobalCol2 span={12} sm={4}>
          <StyledBoxValue>
            <StyledBoxValueCalc>
              <span>Subtotal:</span>
              <span>R$ {valueCalc(items).replace(".", ",")}</span>
            </StyledBoxValueCalc>

            <StyledBoxValueCalc>
              <span>Frete:</span>
              <span>R$ 0,00</span>
            </StyledBoxValueCalc>

            <StyledBoxDiscount>
              <span>Desconto Cupom:</span>
              <span>R$ 0,00</span>
            </StyledBoxDiscount>

            <StyledBoxTotalPrice>
              <span>TOTAL</span>
              <span>R$ {valueCalc(items).replace(".", ",")}</span>
            </StyledBoxTotalPrice>

            <StyledBoxFee>
              <IconCreditCard size={25} />
              <Box>
                <span>
                  12x de R$
                  {(valueCalc(items) / 12).toFixed(2).replace(".", ",")}
                </span>
                <span> s/ juros</span>
              </Box>
            </StyledBoxFee>

            <StyledBoxFee>
              <IconBarcode size={25} />
              <Box>
                <span>R$ {(valueCalc(items) * 0.88).toFixed(2).replace(".", ",")} </span>
                <span>com 12% de desconto à vista no boleto ou no pix</span>
              </Box>
            </StyledBoxFee>
          </StyledBoxValue>
          <StyledButtonBox>
            <Button>
              <IconShoppingCart size={18} />
              Finalizar Compra
            </Button>
          </StyledButtonBox>
        </StyledGlobalCol2>
      </Grid>
    </>
  );
}
