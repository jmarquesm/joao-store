// vendors
import { Button as MantineButton, Grid, Image, Text } from "@mantine/core";

// utils
import { addToCart } from "../../../utils/addToCart";

// icons
import { IconShoppingCart } from "@tabler/icons";

// typings
import { Product } from "../../../typings/products";

// styles
import * as S from "./styles";

interface ProductComponentProps {
  items: Product[];
  setItems: (items: Product[]) => void;
  product: Product;
  mainImage: string;
  imageToRender: string[];
  changeImageProduct: (event: React.MouseEvent) => void;
}

export function ProductComponent({
  items,
  setItems,
  product,
  mainImage,
  imageToRender,
  changeImageProduct,
}: ProductComponentProps) {
  return (
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
  );
}
