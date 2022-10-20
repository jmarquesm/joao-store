import { useState } from "react";
import { Modal, Group } from "@mantine/core";
import { AuthenticationTitle } from "./authentication";
import styled from "@emotion/styled";

const S = {};

S.GroupLink = styled(Group)`
  cursor: pointer;
  display: block;
  line-height: 1;
  padding: 8px 12px;
  border-radius: ${({ theme }) => theme.radius.sm}px;
  text-decoration: none;
  color: ${({ theme }) => (theme.colorScheme === "dark" ? theme.colors.dark[0] : theme.colors.gray[7])};
  font-size: ${({ theme }) => theme.fontSizes.sm}px;
  font-weight: 500;

  &:hover {
    background-color: ${({ theme }) =>
      theme.colorScheme === "dark" ? theme.colors.dark[6] : theme.colors.gray[0]};
  }
`;

export function UseModal() {
  const [opened, setOpened] = useState(false);

  return (
    <>
      <S.GroupLink onClick={() => setOpened(true)}>Login</S.GroupLink>

      <Modal opened={opened} onClose={() => setOpened(false)}>
        <AuthenticationTitle closeModal={() => setOpened(false)} />
      </Modal>
    </>
  );
}
