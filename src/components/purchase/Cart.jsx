import {
  createStyles,
  Avatar,
  Grid,
  Box,
  Text,
  ActionIcon,
  Button,
} from "@mantine/core";
import { IconBarcode, IconCreditCard, IconTrash } from "@tabler/icons";
import React from "react";
import Amount from "./Amount";

const useStyles = createStyles(() => ({
  div: {
    borderRadius: 10,
    padding: 0,
    marginTop: 10,
    marginBottom: 10,
    marginRight: 10,
    marginLeft: 0,
  },

  boxValores: {
    borderRadius: 5,
    padding: 5,
    margin: "auto",
    minWidth: 200,
    alignContent: "center",
    fontSize: 13,
  },

  boxValoresCalculo: {
    display: "flex",
    justifyContent: "space-between",
    alignContent: "center",
    margin: "auto",
    fontSize: 13,
    paddingLeft: 5,
  },

  globalCol: {
    borderRadius: 10,
    padding: 0,
    margin: "auto",
  },

  elementCol: {
    display: "flex",
    alignContent: "center",
    margin: "auto",
    fontSize: 13,
  },
}));

export function Cart({ items, setItems }) {
  const { classes } = useStyles();

  function valueCalc(items) {
    const totalPrices = items
      .reduce((prevValue, element) => prevValue + element.price, 0)
      .toFixed(2);

    return totalPrices;
  }

  function clearAllCart() {
    setItems([]);
  }

  function removeItemCart(product) {
    const newItems = items.filter(
      (productCart) => productCart.description !== product.description
    );
    setItems(newItems);
  }

  return (
    <Grid grow gutter="xl">
      <Grid.Col span={12} md={8} className={classes.globalCol}>
        {items.map((produto) => (
          <Grid key={produto.description} sx={{ margin: 0 }}>
            <Grid.Col span={"content"} className={classes.elementCol}>
              <Avatar size={50} src={produto.image} />
            </Grid.Col>

            <Grid.Col span={"auto"} className={classes.elementCol}>
              <Text lineClamp={2} className={classes.name}>
                {produto.description}
              </Text>
            </Grid.Col>

            <Grid.Col
              span={2}
              xs={2}
              sm={1}
              md={1.5}
              className={classes.elementCol}
            >
              <Text className={classes.name}>
                <Amount amount={produto.units} />
              </Text>
            </Grid.Col>

            <Grid.Col
              span={3}
              xs={2}
              sm={2}
              md={2}
              className={classes.elementCol}
            >
              <Text className={classes.name}>
                R$ {produto.price.toFixed(2).replace(".", ",")}
              </Text>
            </Grid.Col>
            <Grid.Col
              span={1}
              xs={1}
              sm={1}
              md={0.5}
              sx={{
                padding: 0,
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
              }}
            >
              <ActionIcon
                onClick={function () {
                  removeItemCart(produto);
                }}
              >
                <IconTrash size={16} />
              </ActionIcon>
            </Grid.Col>
          </Grid>
        ))}
      </Grid.Col>

      <Grid.Col span={12} sm={4}>
        <Box className={classes.boxValores}>
          <Box className={classes.boxValoresCalculo}>
            <span>Subtotal:</span>
            <span>R$ {valueCalc(items).replace(".", ",")}</span>
          </Box>

          <Box className={classes.boxValoresCalculo}>
            <span>Frete:</span>
            <span>R$ 0,00</span>
          </Box>

          <Box
            sx={{ borderTop: "solid", borderTopWidth: 1 }}
            className={classes.boxValoresCalculo}
          >
            <span>Desconto Cupom:</span>
            <span>R$ 0,00</span>
          </Box>

          <Box
            className={classes.boxValoresCalculo}
            sx={{
              borderTop: "solid",
              borderTopWidth: 1,
              height: 50,
              alignItems: "center",
            }}
          >
            <span>TOTAL</span>
            <span>R$ {valueCalc(items).replace(".", ",")}</span>
          </Box>

          <Box
            className={classes.boxValoresCalculo}
            sx={{
              height: 50,
              justifyContent: "flex-start",
              borderTop: "solid",
              borderTopWidth: 1,
              alignItems: "center",
            }}
          >
            <IconCreditCard size={25} />
            <Box>
              <span>
                12x de R$ {(valueCalc(items) / 12).toFixed(2).replace(".", ",")}
              </span>
              <span> s/ juros</span>
            </Box>
          </Box>

          <Box
            className={classes.boxValoresCalculo}
            sx={{
              height: 50,
              justifyContent: "flex-start",
              borderTop: "solid",
              borderTopWidth: 1,
              alignItems: "center",
            }}
          >
            <IconBarcode size={25} />
            <Box>
              <span>
                R$ {(valueCalc(items) * 0.88).toFixed(2).replace(".", ",")}{" "}
              </span>
              <span>com 12% de desconto à vista no boleto ou no pix</span>
            </Box>
          </Box>
        </Box>
        <Button onClick={clearAllCart}>
          <IconTrash size={18} />
          Limpar Carrinho
        </Button>
      </Grid.Col>
    </Grid>
  );
}
