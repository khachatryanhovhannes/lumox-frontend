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
  {
    label: "Our team",
    path: "/team",
  },
];

const OUR_TEAM = [
  {
    firstname: "",
    lastname: "",
    position: "",
    description: "",
    image: "",
    prifile_link: "",
  },
  {},
];

export { NAV_BAR_ITEMS, BASE_URL, OUR_TEAM };
