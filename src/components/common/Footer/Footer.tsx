// vendors
import { ActionIcon, Text } from "@mantine/core";

// icons
import { IconBrandGithub, IconBrandLinkedin } from "@tabler/icons";

// styles
import * as S from "./styles";

export function Footer() {
  return (
    <S.Footer>
      <S.Container>
        <S.GroupLinks spacing={0} position="right">
          <ActionIcon component="a" target="_blank" href="https://www.linkedin.com/in/jmarquesm/" size="lg">
            <IconBrandLinkedin size={24} stroke={1.5} />
          </ActionIcon>

          <ActionIcon component="a" target="_blank" href="https://github.com/jmarquesm" size="lg">
            <IconBrandGithub size={24} stroke={1.5} />
          </ActionIcon>
        </S.GroupLinks>

        <Text size={14}>Desenvolvido por João Marques</Text>
      </S.Container>
    </S.Footer>
  );
}
