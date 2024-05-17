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
  {
    label: " User Page",
    path: "/user",
  }
];

const OUR_TEAM = [
  {
    firstname: "Gayane",
    lastname: "Haruthunyan",
    position: "Project Manager / Content Writer",
    description: "",
    image: "",
    prifile_link: "",
  },
  {
    firstname: "Hovhannes",
    lastname: "Khachatryan",
    position: "Full-stack Developer",
    description: "",
    image: "",
    prifile_link: "",
  },
  {
    firstname: "Jora",
    lastname: "Hovsepyan",
    position: "Front-end Developer",
    description: "",
    image: "",
    prifile_link: "",
  },
  {
    firstname: "Rima",
    lastname: "Alekyan",
    position: "Front-end Developer",
    description: "",
    image: "",
    prifile_link: "",
  },
];

export { NAV_BAR_ITEMS, BASE_URL, OUR_TEAM };
