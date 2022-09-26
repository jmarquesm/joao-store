import {
  createStyles,
  Title,
  Text,
  Button,
  Container,
  Group,
} from "@mantine/core";
import Link from "next/link";
import Layout from "../components/common/Layout";

const useStyles = createStyles((theme) => ({
  root: {
    paddingTop: 80,
    paddingBottom: 80,
  },

  label: {
    textAlign: "center",
    fontWeight: 900,
    fontSize: 220,
    lineHeight: 1,
    marginBottom: theme.spacing.xl * 1.5,
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[4]
        : theme.colors.gray[2],

    [theme.fn.smallerThan("sm")]: {
      fontSize: 120,
    },
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    textAlign: "center",
    fontWeight: 900,
    fontSize: 38,

    [theme.fn.smallerThan("sm")]: {
      fontSize: 32,
    },
  },

  description: {
    maxWidth: 500,
    margin: "auto",
    marginTop: theme.spacing.xl,
    marginBottom: theme.spacing.xl * 1.5,
  },
}));

function NotFoundPage({ items, setItems }) {
  const { classes } = useStyles();

  return (
    <Layout items={items} setItems={setItems}>
      <Container
        className={classes.root}
        style={{
          minHeight: "calc(100vh - 140px)",
        }}
      >
        <div className={classes.label}>404</div>
        <Title className={classes.title}>
          Você encontrou um local secreto.
        </Title>
        <Text
          color="dimmed"
          size="lg"
          align="center"
          className={classes.description}
        >
          Infelizmente, está é apenas uma pagina de não encontrado.
        </Text>
        <Group position="center">
          <Button variant="subtle" size="md">
            <Link href="/">
              <a>Voltar para a Pagina Inicial</a>
            </Link>
          </Button>
        </Group>
      </Container>
    </Layout>
  );
}

export default NotFoundPage;
