import styled from "@emotion/styled";
import { Container, Text } from "@mantine/core";
import Layout from "../components/common/Layout";
import { Cart } from "../components/purchase/Cart";

const StyledContainerTitle = styled(Container)`
  min-height: calc(100vh - 130px);
  padding: 16px;
  padding-top: 0px;
`;

const StyledContainerCartEmpty = styled(Container)`
  display: flex;
  justify-content: center;
`;

const StyledTextCartEmpty = styled(Text)`
  font-size: 50px;
  font-weight: 600;
  color: #49505757;
`;

export default function Carrinho({ items, setItems }) {
  return (
    <Layout items={items} setItems={setItems}>
      <StyledContainerTitle>
        {items === null || items.length === 0 || items === [] ? (
          <StyledContainerCartEmpty my={200}>
            <StyledTextCartEmpty>Carrinho Vazio</StyledTextCartEmpty>
          </StyledContainerCartEmpty>
        ) : (
          <>
            <Cart items={items} setItems={setItems} />
          </>
        )}
      </StyledContainerTitle>
    </Layout>
  );
}
