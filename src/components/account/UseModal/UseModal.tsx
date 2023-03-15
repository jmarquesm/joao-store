// vendors
import { useState } from "react";
import { Modal } from "@mantine/core";

// components
import { AuthenticationTitle } from "../authentication";

// styles
import * as S from "./styles";

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
