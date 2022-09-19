import {
  Card,
  Image,
  Text,
  Group,
  Badge,
  createStyles,
  Button,
} from "@mantine/core";

const useStyles = createStyles((theme) => ({
  card: {
    backgroundColor:
      theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white,
  },

  cardTitle: { height: "100px", alignItems: "baseline" },

  cardValue: { height: "50px" },

  cardButton: { marginLeft: "auto" },

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

  label: {
    marginBottom: theme.spacing.xs,
    lineHeight: 1,
    fontWeight: 700,
    fontSize: theme.fontSizes.xs,
    letterSpacing: -0.25,
    textTransform: "uppercase",
  },

  section: {
    padding: theme.spacing.md,
    borderTop: `1px solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[3]
    }`,
  },

  icon: {
    marginRight: 5,
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[2]
        : theme.colors.gray[5],
  },
}));

export function FeaturesCard({ image, title, description, price, offer }) {
  const { classes } = useStyles();

  return (
    <Card withBorder radius="md" className={classes.card}>
      <Card.Section className={classes.imageSection}>
        <Image src={image} alt={title} />
      </Card.Section>

      <Group className={classes.cardTitle} position="apart" mt="md">
        <div>
          <Text weight={200}>{title}</Text>
          <Text lineClamp={2} size="xs" color="dimmed">
            {description}
          </Text>
        </div>
      </Group>

      <Card.Section className={classes.section}>
        <Group className={classes.cardValue} spacing={10}>
          <div>
            <Text size="md" weight={400} sx={{ lineHeight: 1 }}>
              R${price}
            </Text>
            {offer && <Badge variant="outline">{offer}% OFF</Badge>}
          </div>

          <Button className={classes.cardButton} radius="xl">
            Comprar
          </Button>
        </Group>
      </Card.Section>
    </Card>
  );
}
