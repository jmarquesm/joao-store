// vendors
import { Button, Group } from "@mantine/core";
import Link from "next/link";

// components
import Layout from "../components/common/Layout/Layout";

// typing
import { Product } from "../typings/products";

// styles
import * as S from "../styles/404";

interface NotFoundProps{
  items: Product[]
  setItems: ()=>void
}

function NotFoundPage({ items, setItems }:NotFoundProps) {
  return (
    <Layout items={items} setItems={setItems}>
      <S.Container>
        <S.Div404>404</S.Div404>

        <S.Title>Você encontrou um local secreto.</S.Title>

        <S.Text color="dimmed" size="lg">
          Infelizmente, está é apenas uma pagina de não encontrado.
        </S.Text>

        <Group position="center">
          <Button variant="subtle" size="md">
            <Link href="/">
              <span>Voltar para a Pagina Inicial</span>
            </Link>
          </Button>
        </Group>
      </S.Container>
    </Layout>
  );
}

export default NotFoundPage;
