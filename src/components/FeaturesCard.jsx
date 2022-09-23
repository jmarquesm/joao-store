import { Card, Image, Text, Badge, Button, Box } from "@mantine/core";
import { createStyles } from "@mantine/core";
import { IconShoppingCartPlus } from "@tabler/icons";

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
  },

  titleSection: {
    height: "100px",
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

export default function removeItemCart(produto) {
  let carrinho = localStorage.getItem("produto");
  carrinho = JSON.parse(carrinho);

  const itemToDelete = carrinho.filter(
    (itemToDeleteSelection) =>
      itemToDeleteSelection.description !== produto.description
  );

  localStorage.setItem("produto", JSON.stringify(itemToDelete));
}

export function FeaturesCard({ image, title, description, price, offer }) {
  const { classes } = useStyles();

  function addToCart() {
    let carrinho = localStorage.getItem("produto");
    if (carrinho === null) {
      carrinho = [];
    } else {
      carrinho = JSON.parse(carrinho);
    }
    const produto = {
      image,
      title,
      description,
      price,
      offer,
      units: 1,
    };
    let itemAllReadyExist = false;
    for (let indexDoItemDoCarrinho in carrinho) {
      const itemDoCarrinho = carrinho[indexDoItemDoCarrinho];
      if (itemDoCarrinho.description === produto.description) {
        carrinho[indexDoItemDoCarrinho].units += 1;
        itemAllReadyExist = true;
      }
    }
    if (!itemAllReadyExist) carrinho.push(produto);
    localStorage.setItem("produto", JSON.stringify(carrinho));
  }

  return (
    <Card withBorder radius="md" className={classes.card}>
      <Card.Section className={classes.imageSection}>
        <Image src={image} alt={title} />
      </Card.Section>

      <Card.Section className={classes.titleSection} position="apart" mt="md">
        <div>
          <Text weight={200}>{title}</Text>

          <Text lineClamp={2} size="xs" color="dimmed">
            {description}
          </Text>
        </div>
      </Card.Section>

      <Card.Section className={classes.priceSection}>
        <Box className={classes.price}>
          <Text size="md" weight={400} sx={{ lineHeight: 1 }}>
            R${price}
          </Text>
          <Text>{offer && <Badge variant="outline">{offer}% OFF</Badge>}</Text>
        </Box>

        <Box sx={{ marginTop: 16 }}>
          <Button className={classes.button} onClick={addToCart}>
            <IconShoppingCartPlus size={20} />
            Adicionar
          </Button>
        </Box>
      </Card.Section>
    </Card>
  );
}
