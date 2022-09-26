import {
  createStyles,
  ThemeIcon,
  Text,
  SimpleGrid,
  Box,
  Stack,
  Container,
  Title,
} from "@mantine/core";
import { IconSun, IconPhone, IconMapPin, IconAt } from "@tabler/icons";
import Layout from "../components/common/Layout";

const useStyles = createStyles((theme, { variant }) => ({
  wrapper: {
    display: "flex",
    alignItems: "center",
    color: theme.white,
  },

  icon: {
    marginRight: theme.spacing.md,
    backgroundImage:
      variant === "gradient"
        ? `linear-gradient(135deg, ${theme.colors[theme.primaryColor][4]} 0%, ${
            theme.colors[theme.primaryColor][6]
          } 100%)`
        : "none",
    backgroundColor: "transparent",
  },

  title: {
    color:
      variant === "gradient"
        ? theme.colors.gray[6]
        : theme.colors[theme.primaryColor][0],
  },

  description: {
    color: variant === "gradient" ? theme.black : theme.white,
  },
}));

function ContactIcon({
  icon: Icon,
  title,
  description,
  variant = "gradient",
  className,
  ...others
}) {
  const { classes, cx } = useStyles({ variant });
  return (
    <div className={cx(classes.wrapper, className)} {...others}>
      {variant === "gradient" ? (
        <ThemeIcon size={40} radius="md" className={classes.icon}>
          <Icon size={24} />
        </ThemeIcon>
      ) : (
        <Box mr="md">
          <Icon size={24} />
        </Box>
      )}

      <div>
        <Text size="xs" className={classes.title}>
          {title}
        </Text>
        <Text className={classes.description}>{description}</Text>
      </div>
    </div>
  );
}

const MOCKDATA = [
  { title: "Email", description: "jmarquesm@live.com", icon: IconAt },
  { title: "Telefone", description: "+55 (066) 99649 - ****", icon: IconPhone },
  {
    title: "Endereço",
    description: "Rondonópolis - Mato Grosso",
    icon: IconMapPin,
  },
  {
    title: "Horario de atendimento",
    description: "8:00 – 11:00 | 13:00 - 17:00.",
    icon: IconSun,
  },
];

function ContactIconsList({ data = MOCKDATA, variant }) {
  const items = data.map((item, index) => (
    <ContactIcon key={index} variant={variant} {...item} />
  ));
  return <Stack>{items}</Stack>;
}

export default function ContactIcons({ items, setItems }) {
  return (
    <Layout items={items} setItems={setItems}>
      <Container
        style={{
          minHeight: "calc(100vh - 140px)",
        }}
      >
        <Title size={"h2"} my={"md"}>
          Contato
        </Title>

        <Box
          sx={(theme) => ({
            padding: theme.spacing.xl,
            borderRadius: theme.radius.md,
            backgroundImage: `linear-gradient(135deg, ${
              theme.colors[theme.primaryColor][6]
            } 0%, ${theme.colors[theme.primaryColor][4]} 100%)`,
            width: 500,
          })}
        >
          <ContactIconsList variant="white" />
        </Box>
      </Container>
    </Layout>
  );
}
