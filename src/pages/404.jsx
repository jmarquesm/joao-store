import styled from "@emotion/styled";
import { Title, Text, Button, Container, Group } from "@mantine/core";
import Link from "next/link";
import Layout from "../components/common/Layout";

const StyledContainerBody = styled(Container)`
  padding-top: 80px;
  padding-bottom: 80px;
  min-height: calc(100vh - 140px);
`;

const StyledDiv404 = styled.div`
  text-align: center;
  font-weight: 900;
  font-size: 220px;
  line-height: 1;
  margin-bottom: ${({ theme }) => theme.spacing.xl * 1.5}px;
  color: ${({ theme }) => (theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[2])};

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}px) {
    font-size: 120px;
  }
`;

const StyledTitle = styled(Title)`
  font-family: Greycliff CF ${(p) => p.theme.fontFamily};
  text-align: center;
  font-weight: 900;
  font-size: 38px;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}px) {
    font-size: 32px;
  }
`;

const StyledText = styled(Text)`
  max-width: 500px;
  margin: auto;
  margin-top: ${(p) => p.theme.spacing.xl}px;
  margin-bottom: ${(p) => p.theme.spacing.xl * 1.5}px;
  justify-content: center;
`;

function NotFoundPage({ items, setItems }) {
  return (
    <Layout items={items} setItems={setItems}>
      <StyledContainerBody>
        <StyledDiv404>404</StyledDiv404>
        <StyledTitle>Você encontrou um local secreto.</StyledTitle>
        <StyledText color="dimmed" size="lg">
          Infelizmente, está é apenas uma pagina de não encontrado.
        </StyledText>
        <Group position="center">
          <Button variant="subtle" size="md">
            <Link href="/">
              <a>Voltar para a Pagina Inicial</a>
            </Link>
          </Button>
        </Group>
      </StyledContainerBody>
    </Layout>
  );
}

export default NotFoundPage;
