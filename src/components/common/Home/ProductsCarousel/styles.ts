// vendors
import styled from "@emotion/styled";
import { Box, BoxProps, createPolymorphicComponent } from "@mantine/core";

export const CarouselLoaderBox = createPolymorphicComponent<"div", BoxProps>(styled(Box)`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 450;
`);
