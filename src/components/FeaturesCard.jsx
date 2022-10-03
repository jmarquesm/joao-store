import { Card, Image, Text, Badge, Button, Box } from "@mantine/core";
import { createStyles } from "@mantine/core";
import { showNotification } from "@mantine/notifications";
import { IconCheck, IconShoppingCartPlus } from "@tabler/icons";
import Link from "next/link";

const useStyles = createStyles((theme) => ({
  card: {
    backgroundColor:
      theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white,
  },

  imageSection: {
    display: "flex",
    height: "200px",
    overflow: "hidden",
    alignItems: "center",
    justifyContent: "center",
    borderBottom: `1px solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[3]
    }`,
    cursor: "pointer",
  },

  titleSection: {
    height: "70px",
    alignItems: "baseline",
    paddingLeft: 16,
    paddingRight: 16,
  },

  priceSection: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    padding: theme.spacing.md,
    borderTop: `1px solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[3]
    }`,
  },

  price: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    height: 25,
  },

  button: {
    marginLeft: "auto",
    width: "-webkit-fill-available;",
  },
}));

export function FeaturesCard({ produto, isInCarousel, items, setItems }) {
  const { classes } = useStyles();

  function addToCart() {
    const novoProduto = {
      ...produto,
      units: 1,
    };

    let itemAllReadyExist = false;
    for (let indexDoItemDoCarrinho in items) {
      const itemDoCarrinho = items[indexDoItemDoCarrinho];
      if (itemDoCarrinho.description === novoProduto.description) {
        items[indexDoItemDoCarrinho].units += 1;
        itemAllReadyExist = true;
      }
    }
    if (!itemAllReadyExist) items.push(novoProduto);

    setItems([...items]);
  }

  function NotificationPurchase() {
    showNotification({
      icon: <IconCheck size={20} />,
      title: "Produto adicionado ao carrinho",
      autoClose: 2000,
    });
  }

  return (
    <Card withBorder radius="md" className={classes.card}>
      <Card.Section className={classes.imageSection}>
        <Link href={`/produtos/${produto.id}`}>
          <Image
            src={produto.coverImage}
            alt={produto.title}
            sx={{ padding: isInCarousel ? 50 : 0 }}
          />
        </Link>
      </Card.Section>

      <Card.Section className={classes.titleSection} position="apart" mt="md">
        <div>
          <Text weight={200}>{produto.title}</Text>

          <Text lineClamp={2} size="xs" color="dimmed">
            {produto.description}
          </Text>
        </div>
      </Card.Section>

      <Card.Section className={classes.priceSection}>
        <Box className={classes.price}>
          <Text size="md" weight={400} sx={{ lineHeight: 1 }}>
            R${produto.price.toFixed(2).replace(".", ",")}
          </Text>
          <Text>
            {produto.offer && (
              <Badge variant="outline">{produto.offer}% OFF</Badge>
            )}
          </Text>
        </Box>

        <Box sx={{ marginTop: 16 }}>
          <Button
            className={classes.button}
            onClick={() => {
              addToCart();
              NotificationPurchase();
            }}
          >
            <IconShoppingCartPlus size={20} />
            Adicionar
          </Button>
        </Box>
      </Card.Section>
    </Card>
  );
}
