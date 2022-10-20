import styled from "@emotion/styled";
import { UnstyledButton, Group, Avatar, Text } from "@mantine/core";
import { IconChevronRight } from "@tabler/icons";

const StyledButtonUser = styled(UnstyledButton)`
  display: block;
  width: 100%;
  padding: ${({ theme }) => theme.spacing.md};
  color: ${({ theme }) => (theme.colorScheme === "dark" ? theme.colors.dark[0] : theme.black)};

  &:hover {
    background-color: ${({ theme }) =>
      theme.colorScheme === "dark" ? theme.colors.dark[8] : theme.colors.gray[0]};
  }
`;

export function UserButton({ image, name, email, icon, ...others }) {
  return (
    <StyledButtonUser {...others}>
      <Group>
        <Avatar src={image} radius="xl" />

        <div style={{ flex: 1 }}>
          <Text size="sm" weight={500}>
            {name}
          </Text>

          <Text color="dimmed" size="xs">
            {email}
          </Text>
        </div>

        {icon || <IconChevronRight size={14} stroke={1.5} />}
      </Group>
    </StyledButtonUser>
  );
}
