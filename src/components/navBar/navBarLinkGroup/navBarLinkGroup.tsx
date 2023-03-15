// vendors
import { useState } from "react";
import { Group, Box, Collapse, ThemeIcon, createStyles } from "@mantine/core";
import Link from "next/link";

// icons
import { IconChevronLeft, IconChevronRight } from "@tabler/icons";

// typings
import { MenuItem } from "../../../typings/menuItems";

// styles
import * as S from "./styles";

const useStyles = createStyles(() => ({
  chevron: {
    transition: "transform 200ms ease",
  },
}));

export function LinksGroup({ icon: Icon, label, initiallyOpened, links, link }:MenuItem) {
  const { theme } = useStyles();
  const hasLinks = Array.isArray(links);
  const [opened, setOpened] = useState(initiallyOpened || false);
  const ChevronIcon = theme.dir === "ltr" ? IconChevronRight : IconChevronLeft;
  const items = (hasLinks ? links : []).map((link) => (
    <Link key={link.label} href={link.link}>
      <S.Links>{link.label}</S.Links>
    </Link>
  ));

  return (
    <>
      <S.ButtonControl onClick={() => setOpened((o) => !o)}>
        <Group position="apart" spacing={0}>
          {link ? (
            <Link href={link}>
              <S.ThemeIcon>
                <ThemeIcon variant="light" size={30}>
                  <Icon size={18} />
                </ThemeIcon>
                <Box ml="md">{label}</Box>
              </S.ThemeIcon>
            </Link>
          ) : (
            <S.ThemeIcon>
              <ThemeIcon variant="light" size={30}>
                <Icon size={18} />
              </ThemeIcon>
              <Box ml="md">{label}</Box>
            </S.ThemeIcon>
          )}

          {hasLinks && (
            <ChevronIcon
              size={14}
              stroke={1.5}
              style={{
                transform: opened ? `rotate(${theme.dir === "rtl" ? -90 : 90}deg)` : "none",
              }}
            />
          )}
        </Group>
      </S.ButtonControl>
      {hasLinks ? <Collapse in={opened}>{items}</Collapse> : null}
    </>
  );
}

export function NavbarLinksGroup() {
  return <S.LinkGroup></S.LinkGroup>;
}
