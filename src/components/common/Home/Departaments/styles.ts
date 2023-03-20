// vendors
import styled from "@emotion/styled";
import { Box, BoxProps, Image, ImageProps, createPolymorphicComponent } from "@mantine/core";

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

export const DepartamentLoaderBox = createPolymorphicComponent<"div", BoxProps>(styled(Box)`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 460;
`);