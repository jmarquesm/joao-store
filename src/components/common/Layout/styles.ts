import styled from "@emotion/styled";
import { Container } from "@mantine/core";

export const Containers = styled(Container)`
  padding: 2.25rem 3.85rem;
  min-height: calc(100vh - 56px - 91.7px);

  @media(min-width: 768px){
  min-height: calc(100vh - 56px - 77px);
  align-items: center;
  flex-direction: column;
  }
`;