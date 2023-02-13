import styled from "@emotion/styled";
import { createStyles, Text } from "@mantine/core";

const useStyles = createStyles((theme) => ({
  stat: {
    flex: 1,

    "& + &": {
      paddingLeft: theme.spacing.xl,
      marginLeft: theme.spacing.xl,
      borderLeft: `1px solid ${theme.colors[theme.primaryColor][3]}`,

      [theme.fn.smallerThan("sm")]: {
        paddingLeft: 0,
        marginLeft: 0,
        borderLeft: 0,
        paddingTop: theme.spacing.xl,
        marginTop: theme.spacing.xl,
        borderTop: `1px solid ${theme.colors[theme.primaryColor][3]}`,
      },
    },
  },
}));

const StyledRootDiv = styled.div`
  display: flex;
  background-image: linear-gradient(-60deg, #4dabf7 00%, #1c7ed6 100%);

  padding: ${({ theme }) => theme.spacing.xl * 1.5}px;
  border-radius: ${({ theme }) => theme.radius.md}px;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}px) {
    flex-direction: column;
  }
`;

const StyledCountText = styled(Text)`
  color: ${(p) => p.theme.white};
  font-size: 32px;
  line-height: 1;
  font-weight: 700;
  margin-bottom: ${(p) => p.theme.spacing.md}px;
  font-family: Greycliff CF, ${(p) => p.theme.fontFamily};
`;

const StyledTitleText = styled(Text)`
  color: ${(p) => p.theme.white};
  text-transform: uppercase;
  font-weight: 700;
  font-size: ${(p) => p.theme.fontSizes.sm}px;
`;

const StyledDescriptionText = styled(Text)`
  color: ${({ theme }) => theme.colors[theme.primaryColor][0]};
  font-size: ${(p) => p.theme.fontSizes.sm}px;
  margin-top: 5;
`;

export function StatsGroup({ data }) {
  const { classes } = useStyles();
  const stats = data.map((stat) => (
    <div key={stat.title} className={classes.stat}>
      <StyledCountText>{stat.stats}</StyledCountText>
      <StyledTitleText>{stat.title}</StyledTitleText>
      <StyledDescriptionText>{stat.description}</StyledDescriptionText>
    </div>
  ));
  return <StyledRootDiv>{stats}</StyledRootDiv>;
}
