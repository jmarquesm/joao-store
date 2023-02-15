// vendors
import { Button, Group } from "@mantine/core";
import Link from "next/link";

// components
import Layout from "../components/common/Layout/Layout";

// styles
import * as S from "../styles/404";

function NotFoundPage({ items, setItems }) {
  return (
    <Layout items={items} setItems={setItems}>
      <S.Div404>404</S.Div404>

      <S.Title>Você encontrou um local secreto.</S.Title>

      <S.Text color="dimmed" size="lg">
        Infelizmente, está é apenas uma pagina de não encontrado.
      </S.Text>

      <Group position="center">
        <Button variant="subtle" size="md">
          <Link href="/">
            <a>Voltar para a Pagina Inicial</a>
          </Link>
        </Button>
      </Group>
    </Layout>
  );
}

export default NotFoundPage;
