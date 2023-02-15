// components
import Layout from "../components/common/Layout/Layout";
import { Cart } from "../components/purchase/Cart";

// styles
import * as S from "../styles/carrinho";

export default function Carrinho({ items, setItems }) {
  return (
    <Layout items={items} setItems={setItems}>
      <S.Container>
        {items === null || items.length === 0 || items === [] ? (
          <S.CartIsEmpty my={200}>
            <S.TextCartIsEmpty>Carrinho Vazio</S.TextCartIsEmpty>
          </S.CartIsEmpty>
        ) : (
          <Cart items={items} setItems={setItems} />
        )}
      </S.Container>
    </Layout>
  );
}
