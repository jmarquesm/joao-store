import { Footer } from "./Footer";
import { Header } from "./Header";
import { ScrollTop } from "./ScrollTop";

function Layout({ children }) {
  return (
    <div>
      <Header />

      {children}

      <Footer />
      <ScrollTop />
    </div>
  );
}

export default Layout;
