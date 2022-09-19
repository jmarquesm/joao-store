import {
  createStyles,
  Container,
  Group,
  ActionIcon,
  Text,
} from "@mantine/core";
import { IconBrandGithub, IconBrandLinkedin } from "@tabler/icons";
import { ScrollTop } from "./ScrollTop";

const useStyles = createStyles((theme) => ({
  footer: {
    marginTop: `auto`,
    borderTop: `1px solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.gray[2]
    }`,
  },

  inner: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: theme.spacing.xs,
    paddingBottom: theme.spacing.xs,

    [theme.fn.smallerThan("xs")]: {
      flexDirection: "column",
    },
  },

  links: {
    [theme.fn.smallerThan("xs")]: {
      marginTop: theme.spacing.md,
    },
  },
}));

export function Footer() {
  const { classes } = useStyles();

  return (
    <div className={classes.footer}>
      <Container className={classes.inner}>
        <Group spacing={0} className={classes.links} position="right">
          <ActionIcon
            component="a"
            target="_blank"
            href="https://www.linkedin.com/in/jmarquesm/"
            size="lg"
          >
            <IconBrandLinkedin size={18} stroke={1.5} />
          </ActionIcon>

          <ActionIcon
            component="a"
            target="_blank"
            href="https://github.com/jmarquesm"
            size="lg"
          >
            <IconBrandGithub size={18} stroke={1.5} />
          </ActionIcon>
        </Group>
        <Text size={12}>Desenvolvido por João Marques</Text>
      </Container>
      <ScrollTop />
    </div>
  );
}
