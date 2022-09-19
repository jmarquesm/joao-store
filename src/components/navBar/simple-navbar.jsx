import { Navbar, Group, Code, ScrollArea, createStyles } from "@mantine/core";
import { IconNotes, IconFileAnalytics } from "@tabler/icons";
import { UserButton } from "./userButton";
import { LinksGroup } from "./navBarLinkGroup";

const mockdata = [
  {
    label: "Pagina Inicial",
    icon: IconNotes,
    initiallyOpened: true,
    link: "/",
  },
  {
    label: "Hardware",
    icon: IconNotes,
    initiallyOpened: false,
    links: [
      {
        label: "Processador",
        link: {
          pathname: "/[category]/[subCategory]",
          query: { category: "hardware", subCategory: "processador" },
        },
      },
      {
        label: "Placa de Video",
        link: {
          pathname: "/[category]/[subCategory]",
          query: { category: "hardware", subCategory: "placa-de-video" },
        },
      },
      {
        label: "Placa Mãe",
        link: {
          pathname: "/[category]/[subCategory]",
          query: { category: "hardware", subCategory: "placa-mae" },
        },
      },
    ],
  },
  {
    label: "Periféricos",
    icon: IconNotes,
    links: [
      {
        label: "Teclado",
        link: {
          pathname: "/[category]/[subCategory]",
          query: { category: "perifericos", subCategory: "teclado" },
        },
      },
      {
        label: "Mouse",
        link: {
          pathname: "/[category]/[subCategory]",
          query: { category: "perifericos", subCategory: "mouse" },
        },
      },
      {
        label: "Fone de Ouvido",
        link: {
          pathname: "/[category]/[subCategory]",
          query: { category: "perifericos", subCategory: "fone-de-ouvido" },
        },
      },
    ],
  },
  {
    label: "Escritório",
    icon: IconNotes,
    links: [
      {
        label: "Cadeira",
        link: {
          pathname: "/[category]/[subCategory]",
          query: { category: "escritorio", subCategory: "cadeira" },
        },
      },
      {
        label: "Mesa",
        link: {
          pathname: "/[category]/[subCategory]",
          query: { category: "escritorio", subCategory: "mesa" },
        },
      },
      {
        label: "Figure",
        link: {
          pathname: "/[category]/[subCategory]",
          query: { category: "escritorio", subCategory: "figure" },
        },
      },
    ],
  },
  { label: "Contato", icon: IconFileAnalytics },
];

const useStyles = createStyles((theme) => ({
  navbar: {
    backgroundColor:
      theme.colorScheme === "dark" ? theme.colors.dark[6] : theme.white,
    paddingBottom: 0,
  },

  header: {
    padding: theme.spacing.md,
    paddingTop: 0,
    marginLeft: -theme.spacing.md,
    marginRight: -theme.spacing.md,
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
    borderBottom: `1px solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[3]
    }`,
  },

  links: {
    marginLeft: -theme.spacing.md,
    marginRight: -theme.spacing.md,
  },

  linksInner: {
    paddingTop: theme.spacing.xl,
    paddingBottom: theme.spacing.xl,
  },

  footer: {
    marginLeft: -theme.spacing.md,
    marginRight: -theme.spacing.md,
    borderTop: `1px solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[3]
    }`,
  },
}));

export function NavbarNested() {
  const { classes } = useStyles();
  const links = mockdata.map((item) => (
    <LinksGroup {...item} key={item.label} />
  ));

  return (
    <Navbar height={600} width={{ sm: 300 }} p="md" className={classes.navbar}>
      <Navbar.Section className={classes.header}>
        <Group position="apart">
          <Code sx={{ fontWeight: 700 }}>LOGO MARKET</Code>
        </Group>
      </Navbar.Section>

      <Navbar.Section grow className={classes.links} component={ScrollArea}>
        <div className={classes.linksInner}>{links}</div>
      </Navbar.Section>

      <Navbar.Section className={classes.footer}>
        <UserButton
          image="https://www.educlub.com.br/wp-content/uploads/2020/10/letra-jota.jpg"
          name="João Marques"
          email="jmarquesm@live.com"
        />
      </Navbar.Section>
    </Navbar>
  );
}
