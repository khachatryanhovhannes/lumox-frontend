import { INavItem } from "@/models";

const BASE_URL = process.env.BASE_URL || "";

const NAV_BAR_ITEMS: INavItem[] = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Contact", path: "/contact" },
  { label: "Help", path: "/help" },
  { label: "Team", path: "/team" },
  { label: "Blog", path: "/blog" },
];

const OUR_TEAM = [
  {
    firstname: "Gayane",
    lastname: "Haruthunyan",
    position: "Project Manager / Content Writer",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
    image: "/Gay.png",
    profile_link: "https://www.linkedin.com/in/gayane-harutyunyan-076004250/",
  },
  {
    firstname: "Hovhannes",
    lastname: "Khachatryan",
    position: "Full-stack Developer",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
    image: "/Hovo.jpg",
    profile_link: "https://www.linkedin.com/in/khachatryan-hovhannes/",
  },
  {
    firstname: "Jora",
    lastname: "Hovsepyan",
    position: "Front-end Developer",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
    image: "/Jor.jpg",
    profile_link: "https://www.linkedin.com/in/jora-hovsepyan-459149265/",
  },
  {
    firstname: "Rima",
    lastname: "Alekyan",
    position: "Front-end Developer",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
    image: "/Rima.jpg", // Correct path for the image in the public directory
    profile_link: "https://www.linkedin.com/in/rima-alekyan-384ba3282/",
  },
  {
    firstname: "Sofya",
    lastname: "Gevorgyan",
    position: "UI/UX Designer",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
    image: "/Sofya.jpg", // Correct path for the image in the public directory
    profile_link: "https://linkedin.com/in/arpisargsyan",
  },
  {
    firstname: "Arpi",
    lastname: "Sargsyan",
    position: "Quality Assurance (QA)",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
    image: "/Arpi.jpg", // Correct path for the image in the public directory
    profile_link: "https://www.linkedin.com/in/arpi-sargsyan/",
  },

  {
    firstname: "Tamara",
    lastname: "Meliqsetyan",
    position: " SEO Specialist",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
    image: "/Tam.jpg", // Correct path for the image in the public directory
    profile_link: "https://www.linkedin.com/in/tamara-g-meliqsetyan/",
  },
  {
    firstname: "Ruben",
    lastname: "Sukiasyan",
    position: "SEO Specialist",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
    image: "/Ruben.jpg", // Correct path for the image in the public directory
    profile_link:
      "https://www.linkedin.com/in/ruben-sukiasyan-2284952b3/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
  },
  {
    firstname: "Mane",
    lastname: "Karapetyan",
    position: "Graphic Designer",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
    image: "/Mane.jpg", // Correct path for the image in the public directory
    profile_link: "https://www.linkedin.com/in/mane-karapetian-a780652b1/",
  },

  // Add more team members with unique details
];

export { NAV_BAR_ITEMS, BASE_URL, OUR_TEAM };
