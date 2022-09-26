import { Footer } from "./Footer";
import { Header } from "./Header";
import { ScrollTop } from "./ScrollTop";

function Layout({ children, items, setItems }) {
  return (
    <div>
      <Header items={items} setItems={setItems} />

      {children}

      <Footer />
      <ScrollTop />
    </div>
  );
}

export default Layout;
