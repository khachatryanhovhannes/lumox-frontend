import { INavItem } from "@/models";

const BASE_URL = process.env.BASE_URL;

const NAV_BAR_ITEMS: INavItem[] = [
  {
    label: "Home",
    path: "/",
  },
  {
    label: "About",
    path: "/about",
  },
  {
    label: "Contact",
    path: "/contact",
  },
  {
    label: "Help",
    path: "/help",
  },
];

export { NAV_BAR_ITEMS, BASE_URL };
