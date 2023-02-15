// vendors
import styled from "@emotion/styled";
import { Autocomplete } from "@mantine/core";

export const AutoComplete = styled(Autocomplete)`
  @media (max-width: ${({ theme }) => theme.breakpoints.xs}px) {
    display: none;
  }
`;