import { Container, Title } from "@mantine/core";
import Layout from "../components/common/Layout";
import { TableSelection as Cart } from "../components/purchase/Cart";

export default function Carrinho() {
  return (
    <Layout>
      <Container
        style={{
          minHeight: "calc(100vh - 130px)",
          padding: 16,
        }}
      >
        <Title size={"h2"} my={"md"}>
          Carrinho
        </Title>
        <Cart></Cart>
      </Container>
    </Layout>
  );
}
