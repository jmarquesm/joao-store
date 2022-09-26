import { StatsGroup } from "../components/StatsGroup";
import { Box, Container, createStyles, Loader, Title } from "@mantine/core";
import { useState, useEffect } from "react";
import Layout from "../components/common/Layout";

const useStyles = createStyles((theme) => ({
  root: {
    minHeight: 190.1,
    display: "flex",
    backgroundImage: `linear-gradient(-60deg, ${
      theme.colors[theme.primaryColor][4]
    } 00%, ${theme.colors[theme.primaryColor][7]} 100%)`,
    padding: theme.spacing.xl * 1.5,
    borderRadius: theme.radius.md,

    [theme.fn.smallerThan("sm")]: {
      flexDirection: "column",
    },
  },
}));

function HomePage({ items, setItems }) {
  const [stats, setStats] = useState([]);
  const { classes } = useStyles();

  useEffect(() => {
    fetch(`/api/estatistica`)
      .then((response) => response.json())
      .then((statsData) => {
        setStats(statsData);
      });
  }, []);

  return (
    <Layout items={items} setItems={setItems}>
      <div
        style={{
          minHeight: "calc(100vh - 140px)",
        }}
      >
        <Container>
          <Title size={"h2"} my={"md"}>
            Estatísticas
          </Title>
          {stats.length == 0 ? (
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              className={classes.root}
            >
              <Loader color={"white"} />
            </Box>
          ) : (
            <StatsGroup data={stats} />
          )}
        </Container>
      </div>
    </Layout>
  );
}

export default HomePage;
