// vendors
import styled from "@emotion/styled";
import { Autocomplete, AutocompleteProps, createPolymorphicComponent } from "@mantine/core";

export const AutoComplete = createPolymorphicComponent<'div', AutocompleteProps>(styled(Autocomplete)`
  @media (max-width: ${({ theme }) => theme.breakpoints.xs}px) {
    display: none;
  }
`);