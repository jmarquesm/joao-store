// vendors
import { useEffect, useState } from "react";
import { Loader } from "@mantine/core";
import { useRouter } from "next/router";

// components
import { ProductComponent } from "../../components/common/ProductPage/ProductComponent";

// utils
import { api } from "../../lib/api";

// pages
import NotFoundPage from "../404";

// typings
import { Product } from "../../typings/products";

// styles
import * as S from "../../styles/products-page";

interface ProductsPageProps {
  items: Product[];
  setItems: (items: Product[]) => void;
}

export default function ProductsPage({ items, setItems }: ProductsPageProps) {
  const [product, setProduct] = useState<Product>();
  const router = useRouter();
  const productId = router.query.productId;
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
    return <NotFoundPage />;
  }

  let imageToRender: string[] = [];
  if (product) {
    imageToRender = [product.coverImage];
    for (let index = 0; index < product.images.length; index++) {
      imageToRender.push(product.images[index]);
    }
  }

  function changeImageProduct(event: React.MouseEvent) {
    const imageEl = event.target as HTMLImageElement;
    setMainImage(imageEl.currentSrc);
  }

  return (
    <>
      {!product ? (
        <S.LoaderPage>
          <Loader color={"#228be6"} />
        </S.LoaderPage>
      ) : (
        <ProductComponent
          items={items}
          setItems={setItems}
          product={product}
          mainImage={mainImage || product.coverImage}
          imageToRender={imageToRender}
          changeImageProduct={changeImageProduct}
        />
      )}
    </>
  );
}
