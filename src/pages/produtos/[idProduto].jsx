// vendors
import { useEffect, useState } from "react";
import { Button as MantineButton, Grid, Image, Loader, Text } from "@mantine/core";
import { useRouter } from "next/router";

// components
import Layout from "../../components/common/Layout/Layout";

// utils
import { addToCart } from "../../utils/addToCart";

// icons
import { IconShoppingCart } from "@tabler/icons";

// pages
import NotFoundPage from "../404";

// styles
import * as S from "./styles";

export default function ProductsPage({ items, setItems }) {
  const [produto, setProduto] = useState();
  const router = useRouter();
  const produtoId = router.query.idProduto;
  const [error, setError] = useState();
  const [mainImage, setMainImage] = useState();

  useEffect(() => {
    if (produtoId)
      fetch(`/api/products/${produtoId}`)
        .then((response) => response.json())
        .then((produtoData) => {
          setProduto(produtoData);
          setMainImage(produtoData.coverImage);
        })
        .catch(() => {
          setError(true);
        });
  }, [produtoId]);

  if (error) {
    return <NotFoundPage items={items} setItems={setItems} />;
  }

  let imageToRender = [];
  if (produto != undefined) {
    imageToRender = [produto.coverImage];
    for (let index = 0; index < produto.images.length; index++) {
      imageToRender.push(produto.images[index]);
    }
  }

  function changeImageProduct(event) {
    setMainImage(event.target.currentSrc);
  }

  return (
    <Layout items={items} setItems={setItems}>
      {produto === undefined ? (
        <S.LoaderPage>
          <Loader color={"#228be6"} />
        </S.LoaderPage>
      ) : (
        <Grid grow gutter="xs">
          <S.ImagesGrid span={1}>
            {imageToRender?.map((image) => (
              <S.ImagesBox key={image} onClick={changeImageProduct}>
                <Image src={image} alt={produto.title} />
              </S.ImagesBox>
            ))}
          </S.ImagesGrid>

          <S.MainImageGrid span={4}>
            <Image src={mainImage} alt={produto.title} />
          </S.MainImageGrid>

          <S.InformationGrid span={4}>
            <S.ProductDescription>{produto.description}</S.ProductDescription>

            <S.Inventory>
              <S.InventoryText color={"green.8"}>Produto Em Estoque</S.InventoryText>
            </S.Inventory>

            <S.CashPayment>
              <Text>à vista</Text>
              <S.CashPaymentText color={"green.8"}>
                R$ {(produto.price * 0.88).toFixed(2).replace(".", ",")}
              </S.CashPaymentText>
              <Text> no pix com 12% de desconto</Text>
            </S.CashPayment>

            <S.CardPayment>
              <Text>no cartão</Text>
              <S.CardPaymentText color={"blue.7"}>
                R$ {produto.price.toFixed(2).replace(".", ",")}
              </S.CardPaymentText>
              <Text> em 12x sem juros</Text>
            </S.CardPayment>

            <S.Button>
              <MantineButton size="md" onClick={() => addToCart(produto, items, setItems)}>
                <IconShoppingCart size={18} />
                Adicionar ao Carrinho
              </MantineButton>
            </S.Button>
          </S.InformationGrid>
        </Grid>
      )}
    </Layout>
  );
}
