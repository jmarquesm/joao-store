import { Container, Text } from "@mantine/core";
import Layout from "../components/common/Layout";
import { Cart } from "../components/purchase/Cart";

export default function Carrinho({ items, setItems }) {
  return (
    <Layout items={items} setItems={setItems}>
      <Container
        style={{
          minHeight: "calc(100vh - 130px)",
          padding: 16,
          paddingTop: 0,
        }}
      >
        {items === null || items.length === 0 || items === [] ? (
          <Container align="center" my={200}>
            <Text size={50} weight={600} color="#49505757">
              Carrinho Vazio
            </Text>
          </Container>
        ) : (
          <>
            <Cart items={items} setItems={setItems} />
          </>
        )}
      </Container>
    </Layout>
  );
}
