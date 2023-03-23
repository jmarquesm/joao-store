// vendors
import { useEffect, useState } from "react";
import Head from "next/head";
import { MantineProvider, ColorSchemeProvider, ColorScheme } from "@mantine/core";
import { useLocalStorage } from "@mantine/hooks";
import { NotificationsProvider } from "@mantine/notifications";
import { AppProps } from "next/app";
import { Analytics } from "@vercel/analytics/react";

// components
import Layout from "../components/common/Layout/Layout";

// typings
import { Product } from "../typings/products";

// styles
import "../styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  const [colorScheme, setColorScheme] = useLocalStorage<"light" | "dark">({
    defaultValue: "light",
    key: "ativation",
  });

  const [items, setItems] = useState<Product[]>([]);

  useEffect(() => {
    const cart = localStorage.getItem("produtos");

    if (cart === null) {
      setItems([]);
    } else {
      setItems(JSON.parse(cart));
    }
  }, []);

  function customSetItems(_items: Product[]) {
    localStorage.setItem("produtos", JSON.stringify(_items));
    setItems(_items);
  }

  function toggleColorScheme(value?: ColorScheme) {
    setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"));
  }

  return (
    <>
      <Head>
        <title>João Store</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>

      <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
        <MantineProvider
          withGlobalStyles
          withNormalizeCSS
          theme={{
            colorScheme,
          }}
        >
          <NotificationsProvider position="bottom-left" limit={3} containerWidth={320}>
            <Layout items={items}>
              <Component {...pageProps} items={items} setItems={customSetItems} />
              <Analytics />
            </Layout>
          </NotificationsProvider>
        </MantineProvider>
      </ColorSchemeProvider>
    </>
  );
}
