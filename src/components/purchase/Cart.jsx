import { useEffect, useState } from "react";
import { createStyles, Avatar, Grid, Box, Text } from "@mantine/core";
import { IconBarcode, IconCreditCard } from "@tabler/icons";
import Amount from "./Amount";

const useStyles = createStyles((theme) => ({
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

  // name: {
  //   fontSize: 13,
  // },
  globalCol: {
    borderRadius: 10,
    padding: 0,
    margin: "auto",
  },

  elementCol: {
    // background: "blue",
    display: "flex",
    alignContent: "center",
    margin: "auto",
    fontSize: 13,
  },
}));

export function TableSelection({ data }) {
  const [stats, setStats] = useState();
  const { classes } = useStyles();

  useEffect(() => {
    fetch(`/api/product/hardware/placa-mae`)
      .then((response) => response.json())
      .then((statsData) => {
        setStats(statsData);
      });
  }, []);

  if (stats === undefined) {
    return "Loading";
  }

  return (
    <Grid grow gutter="xl">
      <Grid.Col span={12} md={8} className={classes.globalCol}>
        {stats.items.map((stats) => (
          <Grid key={stats.name} sx={{ margin: 0 }}>
            <Grid.Col span={"content"} className={classes.elementCol}>
              <Avatar size={50} radius={20} src={stats.image} />
            </Grid.Col>
            <Grid.Col
              span={"auto"}
              lineClamp={3}
              className={classes.elementCol}
            >
              <Text lineClamp={2} className={classes.name}>
                {stats.name}
              </Text>
            </Grid.Col>
            <Grid.Col
              span={2}
              xs={1}
              sm={1}
              md={2}
              className={classes.elementCol}
            >
              <Text className={classes.name}>
                <Amount />
              </Text>
            </Grid.Col>
            <Grid.Col
              span={3}
              xs={2}
              sm={2}
              md={2}
              className={classes.elementCol}
            >
              <Text className={classes.name}>R${stats.price}</Text>
            </Grid.Col>
          </Grid>
        ))}
      </Grid.Col>

      <Grid.Col span={12} sm={4}>
        <Box className={classes.boxValores}>
          <Box className={classes.boxValoresCalculo}>
            <span>Subtotal:</span>
            <span>R$ 5.540,00</span>
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
            <span>5.540,00</span>
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
              <span>12x de R$ 556,00</span>
              <span>s/ juros</span>
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
              <span>R$ 5.777,98 </span>
              <span>com desconto à vista no boleto ou no pix</span>
            </Box>
          </Box>
        </Box>
      </Grid.Col>
    </Grid>
  );
}
