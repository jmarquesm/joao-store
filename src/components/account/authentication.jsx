// vendors
import { useState } from "react";
import {
  TextInput,
  PasswordInput,
  Checkbox,
  Anchor,
  Title,
  Text,
  Container,
  Group,
  Button,
  LoadingOverlay,
  Box,
} from "@mantine/core";

export function AuthenticationTitle({ closeModal }) {
  const [loading, setLoading] = useState(false);

  function login() {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      closeModal();
    }, 2000);
  }

  return (
    <div>
      <LoadingOverlay visible={loading} overlayBlur={2} />

      <Container size={420} pb={16}>
        <Title align="center">Bem Vindo de volta!</Title>

        <Text color="dimmed" size="sm" align="center" mt={5}>
          Ainda não tem uma conta?{" "}
          <Anchor href="#" size="sm" onClick={(event) => event.preventDefault()}>
            Criar conta
          </Anchor>
        </Text>

        <Box mt={30}>
          <TextInput label="Email" placeholder="seu@gmail.com" required />
          <PasswordInput label="Senha" placeholder="Sua senha" required mt="md" />
          <Group position="apart" mt="md">
            <Checkbox label="Lembre-me" />
            <Anchor onClick={(event) => event.preventDefault()} href="#" size="sm">
              Esqueceu sua Senha?
            </Anchor>
          </Group>

          <Group position="center">
            <Button onClick={login} fullWidth mt="xl">
              Entrar
            </Button>
          </Group>
        </Box>
      </Container>
    </div>
  );
}
