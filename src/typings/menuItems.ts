// vendors
import { TablerIconProps } from "@tabler/icons";

export type MenuItem = {
  label: string;
  icon?: React.ComponentType<TablerIconProps>;
  initiallyOpened?: boolean;
  link?:
    | string
    | {
        pathname?: string;
        query?: {
          category?: string;
          subCategory?: string;
        };
      };
  links?: MenuItem[];
};
