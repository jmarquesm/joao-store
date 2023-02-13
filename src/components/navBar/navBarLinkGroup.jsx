import { useState } from "react";
import { Group, Box, Collapse, ThemeIcon, UnstyledButton, createStyles, ChevronIcon } from "@mantine/core";
import { IconChevronLeft, IconChevronRight } from "@tabler/icons";
import Link from "next/link";
import styled from "@emotion/styled";

const useStyles = createStyles((theme) => ({
  control: {
    fontWeight: 500,
    display: "block",
    width: "100%",
    padding: `${theme.spacing.xs}px ${theme.spacing.md}px`,
    color: theme.colorScheme === "dark" ? theme.colors.dark[0] : theme.black,
    fontSize: theme.fontSizes.sm,

    "&:hover": {
      backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.colors.gray[0],
      color: theme.colorScheme === "dark" ? theme.white : theme.black,
    },
  },

  goto: {
    cursor: "pointer",
  },

  link: {
    fontWeight: 500,
    display: "block",
    textDecoration: "none",
    padding: `${theme.spacing.xs}px ${theme.spacing.md}px`,
    paddingLeft: 31,
    marginLeft: 30,
    fontSize: theme.fontSizes.sm,
    color: theme.colorScheme === "dark" ? theme.colors.dark[0] : theme.colors.gray[7],
    borderLeft: `1px solid ${theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[3]}`,

    "&:hover": {
      backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.colors.gray[0],
      color: theme.colorScheme === "dark" ? theme.white : theme.black,
    },
  },

  chevron: {
    transition: "transform 200ms ease",
  },
}));

const StyledButtonControl = styled(UnstyledButton)`
  font-weight: 500;
  display: block;
  width: 100%;
  padding: ${({ theme }) => theme.spacing.xs}px ${({ theme }) => theme.spacing.md}px;
  color: ${({ theme }) => (theme.colorScheme === "dark" ? theme.colors.dark[0] : theme.black)};
  font-size: ${({ theme }) => theme.fontSizes.sm}px;

  &:hover {
    background-color: ${({ theme }) =>
      theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.colors.gray[0]};
    color: ${({ theme }) => (theme.colorScheme === "dark" ? theme.white : theme.black)};
  }
`;

const StyledALinks = styled.a`
  cursor: pointer;
  font-weight: 500;
  display: block;
  text-decoration: none;
  padding: ${({ theme }) => theme.spacing.xs}px ${({ theme }) => theme.spacing.md}px;
  padding-left: 31px;
  margin-left: 30px;
  font-size: ${({ theme }) => theme.fontSizes.sm}px;
  color: ${({ theme }) => (theme.colorScheme === "dark" ? theme.colors.dark[0] : theme.colors.gray[7])};
  border-left: 1px solid
    ${({ theme }) => (theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[3])};

  &:hover {
    background-color: ${({ theme }) =>
      theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.colors.gray[0]};
    color: ${({ theme }) => (theme.colorScheme === "dark" ? theme.white : theme.black)};
  }
`;

const StyledBoxThemeIcon = styled(Box)`
  display: flex;
  align-items: center;
`;

const StyledBoxLinkGroup = styled(Box)`
  min-height: 220px;
  padding: ${({ theme }) => theme.spacing.md}px;
  background-color: ${({ theme }) => (theme.colorScheme === "dark" ? theme.colors.dark[6] : theme.white)};
`;

export function LinksGroup({ icon: Icon, label, initiallyOpened, links, link }) {
  const { classes, theme } = useStyles();
  const hasLinks = Array.isArray(links);
  const [opened, setOpened] = useState(initiallyOpened || false);
  const ChevronIcon = theme.dir === "ltr" ? IconChevronRight : IconChevronLeft;
  const items = (hasLinks ? links : []).map((link) => (
    <Link key={link.label} href={link.link}>
      <StyledALinks>{link.label}</StyledALinks>
    </Link>
  ));

  return (
    <>
      <StyledButtonControl onClick={() => setOpened((o) => !o)}>
        <Group position="apart" spacing={0}>
          {link ? (
            <Link href={link}>
              <StyledBoxThemeIcon>
                <ThemeIcon variant="light" size={30}>
                  <Icon size={18} />
                </ThemeIcon>
                <Box ml="md">{label}</Box>
              </StyledBoxThemeIcon>
            </Link>
          ) : (
            <StyledBoxThemeIcon>
              <ThemeIcon variant="light" size={30}>
                <Icon size={18} />
              </ThemeIcon>
              <Box ml="md">{label}</Box>
            </StyledBoxThemeIcon>
          )}

          {hasLinks && (
            <ChevronIcon
              className={classes.chevron}
              size={14}
              stroke={1.5}
              style={{
                transform: opened ? `rotate(${theme.dir === "rtl" ? -90 : 90}deg)` : "none",
                transition: "transform 200ms ease",
              }}
            />
          )}
        </Group>
      </StyledButtonControl>
      {hasLinks ? <Collapse in={opened}>{items}</Collapse> : null}
    </>
  );
}

export function NavbarLinksGroup() {
  return <StyledBoxLinkGroup></StyledBoxLinkGroup>;
}
