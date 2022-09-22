import { Text, createStyles, Box } from "@mantine/core";
import { useCounter } from "@mantine/hooks";
import { ActionIcon } from "@mantine/core";
import { IconCircleMinus, IconCirclePlus } from "@tabler/icons";

const useStyles = createStyles((theme) => ({
  body: {
    display: "flex",
    alignItems: "center",
  },
}));

export default function Amount(props) {
  const [count, handlers] = useCounter(props.amount, { min: 1, max: 10 });
  const { classes } = useStyles();

  return (
    <>
      <Box className={classes.body}>
        <ActionIcon variant="transparent" onClick={handlers.decrement}>
          <IconCircleMinus size={16} />
        </ActionIcon>
        <Text>{count}</Text>
        <ActionIcon variant="transparent" onClick={handlers.increment}>
          <IconCirclePlus size={16} />
        </ActionIcon>
      </Box>
    </>
  );
}
