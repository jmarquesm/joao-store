import { Text, Box, Stack, Container, Title } from "@mantine/core";
import { IconSun, IconPhone, IconMapPin, IconAt } from "@tabler/icons";
import Layout from "../components/common/Layout";
import styled from "@emotion/styled";

const StyledContainer = styled(Container)`
  min-height: calc(100vh - 140px);
`;

const StyledBox = styled(Box)`
  padding: ${(p) => p.theme.spacing.xl}px;
  border-radius: ${(p) => p.theme.radius.md}px;
  background-image: linear-gradient(
    135deg,
    ${({ theme }) => theme.colors[theme.primaryColor][6]} 0%,
    ${({ theme }) => theme.colors[theme.primaryColor][4]} 100%
  );
`;

const StyledDiv = styled.div`
  display: flex;
  align-items: center;
  color: ${(p) => p.theme.white};
`;

const StyledTextTitle = styled(Text)`
  color: ${({ theme }) => theme.colors[theme.primaryColor][0]};
`;

const StyledTextDescription = styled(Text)`
  color: ${({ theme }) => theme.colors[theme.primaryColor][0]};
`;

function ContactItem({ icon: Icon, title, description }) {
  return (
    <StyledDiv>
      <Box mr="md">
        <Icon size={24} />
      </Box>

      <div>
        <StyledTextTitle size="xs">{title}</StyledTextTitle>
        <StyledTextDescription>{description}</StyledTextDescription>
      </div>
    </StyledDiv>
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

function ContactItemList({ data = MOCKDATA }) {
  const items = data.map((item, index) => <ContactItem key={index} {...item} />);
  return <Stack>{items}</Stack>;
}

export default function ContactPage({ items, setItems }) {
  return (
    <Layout items={items} setItems={setItems}>
      <StyledContainer>
        <Title size={"h2"} my={"md"}>
          Contato
        </Title>

        <StyledBox>
          <ContactItemList />
        </StyledBox>
      </StyledContainer>
    </Layout>
  );
}
