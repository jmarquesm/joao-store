// vendors
import styled from "@emotion/styled";
import { Image, ImageProps, createPolymorphicComponent } from "@mantine/core";
import NextLink from "next/link";

export const Link = styled(NextLink)`
  &:last-of-type {
    display: none;
  }
`;

export const DepartamentGridCol = styled.div`
  font-weight: 700;
  text-align: center;
  padding: 16px;
  display: flex;
  overflow: hidden;
  align-items: top;
  justify-content: center;
  border: 1px solid
    ${({ theme }) => (theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[3])};
  border-radius: 8px;
  flex-direction: column;
  cursor: pointer;
`;

export const Images = createPolymorphicComponent<"img", ImageProps>(styled(Image)`
  padding: 3rem;

  @media (min-width: 768px) {
    padding: 0;
  }
`);
