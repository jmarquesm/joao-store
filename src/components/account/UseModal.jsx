import { useState } from "react";
import { Modal, Group, createStyles } from "@mantine/core";
import { AuthenticationTitle } from "./authentication";

const useStyles = createStyles((theme) => ({
  link: {
    cursor: "pointer",
    display: "block",
    lineHeight: 1,
    padding: "8px 12px",
    borderRadius: theme.radius.sm,
    textDecoration: "none",
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[0]
        : theme.colors.gray[7],
    fontSize: theme.fontSizes.sm,
    fontWeight: 500,

    "&:hover": {
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[6]
          : theme.colors.gray[0],
    },
  },
}));

export function UseModal() {
  const [opened, setOpened] = useState(false);
  const { classes } = useStyles();

  return (
    <>
      <Group className={classes.link} onClick={() => setOpened(true)}>
        Login
      </Group>

      <Modal opened={opened} onClose={() => setOpened(false)}>
        <AuthenticationTitle closeModal={() => setOpened(false)} />
      </Modal>
    </>
  );
}
