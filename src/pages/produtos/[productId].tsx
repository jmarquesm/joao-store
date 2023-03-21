// vendors
import { useState } from "react";
import { GetServerSidePropsContext } from "next";

// components
import { ProductComponent } from "../../components/common/ProductPage/ProductComponent";

// typings
import { Product } from "../../typings/products";

// apis
import { getProduct } from "../api/products/[id]";

interface ProductsPageProps {
  items: Product[];
  setItems: (items: Product[]) => void;
  product: Product;
}

export default function ProductPage({ items, setItems, product }: ProductsPageProps) {
  const [mainImage, setMainImage] = useState<string>(product.coverImage);

  function changeImageProduct(event: React.MouseEvent) {
    const imageEl = event.target as HTMLImageElement;
    setMainImage(imageEl.currentSrc);
  }

  let imageToRender: string[] = [];
  if (product) {
    imageToRender = [product.coverImage];
    for (let index = 0; index < product.images.length; index++) {
      imageToRender.push(product.images[index]);
    }
  }

  return (
    <ProductComponent
      items={items}
      setItems={setItems}
      product={product}
      mainImage={mainImage || product.coverImage}
      imageToRender={imageToRender}
      changeImageProduct={changeImageProduct}
    />
  );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const productId = String(context.query.productId);
  const product = await getProduct(+productId);

  if (!product) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      product,
    },
  };
}
