import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { StatsGroup } from "../components/StatsGroup";
import { Container, Title } from "@mantine/core";
import { useState, useEffect } from "react";

function HomePage() {
  const [stats, setStats] = useState([]);

  useEffect(() => {
    fetch(`/api/estatistica`)
      .then((response) => response.json())
      .then((statsData) => {
        setStats(statsData);
      });
  }, []);

  return (
    <div>
      <Header />
      <div
        style={{
          minHeight: "calc(100vh - 140px)",
        }}
      >
        <Container>
          <Title size={"h2"} my={"md"}>
            Estatísticas
          </Title>

          <StatsGroup data={stats} />
        </Container>
      </div>
      <Footer />
    </div>
  );
}

export default HomePage;
