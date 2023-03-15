// components
import { Cart } from "../components/purchase/Cart";

// typings
import { Product } from "../typings/products";

// styles
import * as S from "../styles/carrinho";

interface CarrinhoProps {
  items: Product[];
  setItems: (items: Product[]) => void;
}

export default function Carrinho({ items, setItems }: CarrinhoProps) {
  return (
    <>
      {!items || items.length === 0 ? (
        <S.Container>
          <S.CartIsEmpty my={200}>
            <S.TextCartIsEmpty>Carrinho Vazio</S.TextCartIsEmpty>
          </S.CartIsEmpty>
        </S.Container>
      ) : (
        <Cart items={items} setItems={setItems} />
      )}
    </>
  );
}
