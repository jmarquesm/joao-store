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

// typings
import { Product } from "../../typings/products";

// styles
import * as S from "../../styles/products-page";

interface ProductsPageProps{
  items: Product[]
  setItems: ()=>void
}

interface ProductComponentProps{
  items: Product[]
  setItems: ()=>void
  product: Product
  mainImage: string
  imageToRender: string[]
  changeImageProduct: (event)=>void
}

function ProductComponent({items, setItems, product, mainImage, imageToRender, changeImageProduct}:ProductComponentProps){
  return(
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
  )
}

export default function ProductsPage({ items, setItems }:ProductsPageProps) {
  const [product, setProduct] = useState<Product>();
  const router = useRouter();
  const productId = router.query.idProduto;
  const [error, setError] = useState(false);
  const [mainImage, setMainImage] = useState<string>();

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
  if (product) {
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
      {!product ? (
        <S.LoaderPage>
          <Loader color={"#228be6"} />
        </S.LoaderPage>
      ) : (
        <ProductComponent items={items} setItems={setItems} product={product} mainImage={mainImage} imageToRender={imageToRender} changeImageProduct={changeImageProduct}/>
      )}
    </Layout>
  );
}
