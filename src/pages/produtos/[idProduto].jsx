// vendors
import { useEffect, useState } from "react";
import { Button as MantineButton, Grid, Image, Loader, Text } from "@mantine/core";
import { useRouter } from "next/router";

// components
import Layout from "../../components/common/Layout/Layout";

// utils
import { addToCart } from "../../utils/addToCart";
import { api } from "../../lib/api";

// icons
import { IconShoppingCart } from "@tabler/icons";

// pages
import NotFoundPage from "../404";

// styles
import * as S from "../../styles/products-page";

export default function ProductsPage({ items, setItems }) {
  const [product, setProduct] = useState();
  const router = useRouter();
  const productId = router.query.idProduto;
  const [error, setError] = useState();
  const [mainImage, setMainImage] = useState();

  useEffect(() => {
    async function fetchAndLoadProduct() {
      try {
        const response = await api.get(`/products/${productId}`);
        setProduct(response.data);
        setMainImage(response.data.coverImage);
      } catch (error) {
        setError(true);
      }
    }

    if (productId) fetchAndLoadProduct();
  }, [productId]);

  if (error) {
    return <NotFoundPage items={items} setItems={setItems} />;
  }

  let imageToRender = [];
  if (product != undefined) {
    imageToRender = [product.coverImage];
    for (let index = 0; index < product.images.length; index++) {
      imageToRender.push(product.images[index]);
    }
  }

  function changeImageProduct(event) {
    setMainImage(event.target.currentSrc);
  }

  return (
    <Layout items={items} setItems={setItems}>
      {product === undefined ? (
        <S.LoaderPage>
          <Loader color={"#228be6"} />
        </S.LoaderPage>
      ) : (
        <Grid grow gutter="xs">
          <S.ImagesGrid span={1}>
            {imageToRender?.map((image) => (
              <S.ImagesBox key={image} onClick={changeImageProduct}>
                <Image src={image} alt={product.title} />
              </S.ImagesBox>
            ))}
          </S.ImagesGrid>

          <S.MainImageGrid span={4}>
            <Image src={mainImage} alt={product.title} />
          </S.MainImageGrid>

          <S.InformationGrid span={4}>
            <S.ProductDescription>{product.description}</S.ProductDescription>

            <S.Inventory>
              <S.InventoryText color={"green.8"}>Produto Em Estoque</S.InventoryText>
            </S.Inventory>

            <S.CashPayment>
              <Text>à vista</Text>
              <S.CashPaymentText color={"green.8"}>
                R$ {(product.price * 0.88).toFixed(2).replace(".", ",")}
              </S.CashPaymentText>
              <Text> no pix com 12% de desconto</Text>
            </S.CashPayment>

            <S.CardPayment>
              <Text>no cartão</Text>
              <S.CardPaymentText color={"blue.7"}>
                R$ {product.price.toFixed(2).replace(".", ",")}
              </S.CardPaymentText>
              <Text> em 12x sem juros</Text>
            </S.CardPayment>

            <S.Button>
              <MantineButton size="md" onClick={() => addToCart(product, items, setItems)}>
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
