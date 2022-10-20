import styled from "@emotion/styled";
import { Box, Button, Container, Grid, Image, Loader, Text } from "@mantine/core";
import { IconShoppingCart } from "@tabler/icons";

import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Layout from "../../components/common/Layout";
import { addToCart } from "../../utils/addToCart";
import NotFoundPage from "../404";

const StyledContainerPage = styled(Container)`
  min-height: calc(100vh - 140px);
`;

const StyledLoaderPage = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 450px;
`;

const StyledImagesGridCol = styled(Grid.Col)`
  margin: 0px;
  padding: 0px;
`;

const StyledImagesBoxChange = styled(Box)`
  border: 1px solid #dee2e6;
  margin: 20px;
  border-radius: 3%;
  padding: 1px;
  max-height: 800;
`;

const StyledMainImageGridCol = styled(Grid.Col)`
  border: 1px solid #dee2e6;
  margin: 20px;
  margin-left: 0px;
  border-radius: 3px;
  display: flex;
  align-items: center;
`;

const StyledInformationGridCol = styled(Grid.Col)`
  border: 1px solid #dee2e6;
  margin: 20px;
  margin-left: 0px;
  border-radius: 3px;
  display: flex;
  flex-direction: column;
`;

const StyledProductDescriptionBox = styled(Box)`
  font-size: 1.8rem;
  line-height: 1.2;
  text-transform: uppercase;
  font-weight: 500;
  font-family: Roboto, Verdana;
  padding: 15px;
`;

const StyledInventoryBox = styled(Box)`
  border-top: 1px solid #dee2e6;
  border-bottom: 1px solid #dee2e6;
  padding: 15px;
`;

const StyledInventoryText = styled(Text)`
  font-weight: bold;
  text-transform: uppercase;
  font-size: 1.5rem;
`;

const StyledCashPaymentBox = styled(Box)`
  padding: 15px;
  font-size: 1.2rem;
`;

const StyledCashPaymentText = styled(Text)`
  font-size: 1.7rem;
  font-weight: bolder;
`;

const StyledCardPaymentBox = styled(Box)`
  border-top: 1px solid #dee2e6;
  border-bottom: 1px solid #dee2e6;
  padding: 15px;
  font-size: 1.2rem;
`;

const StyledCardPaymentText = styled(Text)`
  font-size: 1.7rem;
  font-weight: bolder;
`;

const StyledButtonBox = styled(Box)`
  display: flex;
  justify-content: center;
  flex-direction: column;
  flex: 1;
  padding: 10px 20px;
`;

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
      <StyledContainerPage>
        {produto === undefined ? (
          <StyledLoaderPage>
            <Loader color={"#228be6"} />
          </StyledLoaderPage>
        ) : (
          <Grid grow gutter="xs">
            <StyledImagesGridCol span={1}>
              {imageToRender?.map((image) => (
                <StyledImagesBoxChange key={image} onClick={changeImageProduct}>
                  <Image src={image} alt={produto.title} />
                </StyledImagesBoxChange>
              ))}
            </StyledImagesGridCol>

            <StyledMainImageGridCol span={4}>
              <Image src={mainImage} alt={produto.title} />
            </StyledMainImageGridCol>

            <StyledInformationGridCol span={4}>
              <StyledProductDescriptionBox>{produto.description}</StyledProductDescriptionBox>

              <StyledInventoryBox>
                <StyledInventoryText color={"green.8"}>Produto Em Estoque</StyledInventoryText>
              </StyledInventoryBox>

              <StyledCashPaymentBox>
                <Text>à vista</Text>
                <StyledCashPaymentText color={"green.8"}>
                  R$ {(produto.price * 0.88).toFixed(2).replace(".", ",")}
                </StyledCashPaymentText>
                <Text> no pix com 12% de desconto</Text>
              </StyledCashPaymentBox>

              <StyledCardPaymentBox>
                <Text>no cartão</Text>
                <StyledCardPaymentText color={"blue.7"}>
                  R$ {produto.price.toFixed(2).replace(".", ",")}
                </StyledCardPaymentText>
                <Text> em 12x sem juros</Text>
              </StyledCardPaymentBox>

              <StyledButtonBox>
                <Button size="md" onClick={() => addToCart(produto, items, setItems)}>
                  <IconShoppingCart size={18} />
                  Adicionar ao Carrinho
                </Button>
              </StyledButtonBox>
            </StyledInformationGridCol>
          </Grid>
        )}
      </StyledContainerPage>
    </Layout>
  );
}
