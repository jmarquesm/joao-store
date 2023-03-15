// vendors
import { ComponentType } from "react";

export type MenuItem = {
  label: string;
  icon?: ComponentType<any>;
  initiallyOpened?: boolean;
  link?: string | {
    pathname?: string;
    query?: {
      category?: string;
      subCategory?: string;
    };
  };
  links?: MenuItem[];
};