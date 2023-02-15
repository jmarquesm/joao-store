// vendors
import React from "react";
import { Avatar, Grid, Box, Text, ActionIcon, Button, Title } from "@mantine/core";

// icons
import {
  IconBarcode,
  IconCircleMinus,
  IconCirclePlus,
  IconCreditCard,
  IconShoppingCart,
  IconTrash,
} from "@tabler/icons";

// styles
import * as S from "./styles";

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
      <S.Title>
        <Title size={"h2"} my={"md"}>
          Carrinho
        </Title>
        <S.ClearCartButton variant="default" onClick={clearAllCart}>
          <IconTrash size={18} />
          Limpar Carrinho
        </S.ClearCartButton>
      </S.Title>
      <Grid grow gutter="xl">
        <S.GlobalCol span={12} md={8}>
          {items.map((produto) => (
            <S.ProductsDescription key={produto.description}>
              <S.ElementCol span={"content"}>
                <Avatar size={50} src={produto.coverImage} />
              </S.ElementCol>

              <S.ElementCol span={"auto"}>
                <Text lineClamp={2}>{produto.description}</Text>
              </S.ElementCol>

              <S.ElementCol span={3} xs={2} sm={1} md={2}>
                <S.Units>
                  <ActionIcon variant="transparent" onClick={() => decrementUnits(produto)}>
                    <IconCircleMinus size={16} />
                  </ActionIcon>
                  <Text>{produto.units}</Text>
                  <ActionIcon variant="transparent" onClick={() => incrementUnits(produto)}>
                    <IconCirclePlus size={16} />
                  </ActionIcon>
                </S.Units>
              </S.ElementCol>

              <S.ElementCol span={2.5} xs={2} sm={2} md={2.5}>
                <Text>R$ {produto.price.toFixed(2).replace(".", ",")}</Text>
              </S.ElementCol>

              <S.RemoveItemGrid span={1} xs={1} sm={1} md={1}>
                <ActionIcon
                  onClick={function () {
                    removeItemCart(produto);
                  }}
                >
                  <IconTrash size={16} />
                </ActionIcon>
              </S.RemoveItemGrid>
            </S.ProductsDescription>
          ))}
        </S.GlobalCol>

        <S.GlobalCol2 span={12} sm={4}>
          <S.Value>
            <S.ValueCalc>
              <span>Subtotal:</span>
              <span>R$ {valueCalc(items).replace(".", ",")}</span>
            </S.ValueCalc>

            <S.ValueCalc>
              <span>Frete:</span>
              <span>R$ 0,00</span>
            </S.ValueCalc>

            <S.Discount>
              <span>Desconto Cupom:</span>
              <span>R$ 0,00</span>
            </S.Discount>

            <S.TotalPrice>
              <span>TOTAL</span>
              <span>R$ {valueCalc(items).replace(".", ",")}</span>
            </S.TotalPrice>

            <S.Fee>
              <IconCreditCard size={25} />
              <Box>
                <span>
                  12x de R$
                  {(valueCalc(items) / 12).toFixed(2).replace(".", ",")}
                </span>
                <span> s/ juros</span>
              </Box>
            </S.Fee>

            <S.Fee>
              <IconBarcode size={25} />
              <Box>
                <span>R$ {(valueCalc(items) * 0.88).toFixed(2).replace(".", ",")} </span>
                <span>com 12% de desconto à vista no boleto ou no pix</span>
              </Box>
            </S.Fee>
          </S.Value>
          <S.ButtonBox>
            <Button>
              <IconShoppingCart size={18} />
              Finalizar Compra
            </Button>
          </S.ButtonBox>
        </S.GlobalCol2>
      </Grid>
    </>
  );
}
