import { Box, Button, Grid, Image, Loader, Text } from "@mantine/core";
import { IconShoppingCart } from "@tabler/icons";

import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Layout from "../../components/common/Layout";
import NotFoundPage from "../404";

export default function ProductsPage({ items, setItems }) {
  const [produto, setProduto] = useState();
  const router = useRouter();
  const produtoId = router.query.idProduto;
  const [error, setError] = useState();

  useEffect(() => {
    if (produtoId)
      fetch(`/api/products/${produtoId}`)
        .then((response) => response.json())
        .then((produtoData) => {
          setProduto(produtoData);
        })
        .catch(() => {
          setError(true);
        });
  }, [produtoId]);

  if (error) {
    return <NotFoundPage items={items} setItems={setItems} />;
  }

  if (produto == undefined) {
    return;
  }

  let imageToRender = [];
  for (let index = 0; index < produto.images.length; index++) {
    imageToRender.push(produto.images[index]);
  }

  function addToCart() {
    const novoProduto = {
      ...produto,
      units: 1,
    };

    let itemAllReadyExist = false;
    for (let indexDoItemDoCarrinho in items) {
      const itemDoCarrinho = items[indexDoItemDoCarrinho];
      if (itemDoCarrinho.description === novoProduto.description) {
        items[indexDoItemDoCarrinho].units += 1;
        itemAllReadyExist = true;
      }
    }
    if (!itemAllReadyExist) items.push(novoProduto);

    setItems([...items]);
  }

  return (
    <Layout items={items} setItems={setItems}>
      {!imageToRender ? (
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            minHeight: 450,
          }}
        >
          <Loader color={"#228be6"} />
        </Box>
      ) : (
        <Grid grow gutter="xs" sx={{ margin: 0 }}>
          <Grid.Col span={1} sx={{ margin: 0, padding: 0 }}>
            <Box
              sx={{
                border: "1px solid #dee2e6",
                margin: 20,
                borderRadius: 3,
                padding: 1,
                maxHeight: 800,
              }}
            >
              <Image src={produto.coverImage} alt={produto.title} />
            </Box>
            {imageToRender?.map((image) => (
              <Box
                key={image}
                sx={{
                  border: "1px solid #dee2e6",
                  margin: 20,
                  borderRadius: 3,
                }}
              >
                <Image src={image} alt={produto.title} />
              </Box>
            ))}
          </Grid.Col>

          <Grid.Col
            span={4}
            sx={{ border: "1px solid #dee2e6", margin: 20, borderRadius: 3 }}
          >
            <Image src={produto.coverImage} alt={produto.title} />
          </Grid.Col>

          <Grid.Col
            span={4}
            sx={{
              border: "1px solid #dee2e6",
              margin: 20,
              borderRadius: 3,
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Box
              sx={{
                fontSize: 22,
                lineHeight: 1.2,
                borderBottom: "1px solid #dee2e6",
                textTransform: "uppercase",
                fontWeight: 500,
                fontFamily: "Roboto, Verdana",
                padding: 15,
              }}
            >
              {produto.description}
            </Box>

            <Box
              sx={{
                borderBottom: "1px solid #dee2e6",
                padding: 15,
              }}
            >
              <Text
                color={"green.8"}
                sx={{
                  fontWeight: "bold",
                  textTransform: "uppercase",
                }}
              >
                Produto Em Estoque
              </Text>
            </Box>

            <Box
              sx={{
                borderBottom: "1px solid #dee2e6",
                padding: 15,
                fontSize: 13,
              }}
            >
              <Text>à vista</Text>
              <Text
                color={"green.8"}
                sx={{ fontSize: 20, fontWeight: "bolder" }}
              >
                R$ {(produto.price * 0.88).toFixed(2).replace(".", ",")}
              </Text>
              <Text> no pix com 12% de desconto</Text>
            </Box>

            <Box
              sx={{
                borderBottom: "1px solid #dee2e6",
                padding: 15,
                fontSize: 13,
              }}
            >
              <Text>no cartão</Text>
              <Text
                color={"blue.7"}
                sx={{ fontSize: 20, fontWeight: "bolder" }}
              >
                R$ {produto.price.toFixed(2).replace(".", ",")}
              </Text>
              <Text> em 12x sem juros</Text>
            </Box>

            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                flex: 1,
                padding: "0px 20px",
              }}
            >
              <Button size="xl" onClick={addToCart}>
                <IconShoppingCart size={18} />
                Adicionar ao Carrinho
              </Button>
            </Box>
          </Grid.Col>
        </Grid>
      )}
    </Layout>
  );
}
