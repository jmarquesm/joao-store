// components
import { Footer } from "../Footer/Footer";
import { Header } from "../Header/Header";
import { ScrollTop } from "../ScrollTop";

// typings
import { Product } from "../../../typings/products";

// styles
import * as S from "./styles";

interface Props{
  children: any,
  items: Product[],
  setItems: ()=>void
}

function Layout({ children, items}:Props) {
  
  return (
    <div>
      <Header items={items} />

      <S.Container>{children}</S.Container>
      <Footer />
      <ScrollTop />
    </div>
  );
}

export default Layout;
