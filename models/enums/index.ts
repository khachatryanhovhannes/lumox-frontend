const FullBackgroundColors = {
  lightMode: "rgb(255,250,250)",
  darkMode: "rgb(41,41,41)",
} as const;

const PrimaryTextColors = {
  lightMode: "rgb(0, 41, 102)",
  darkMode: "rgb(168,232,222)",
} as const;

const SecondaryTextColors = {
  lightMode: "rgb(0, 0, 0)",
  darkMode: "rgb(168, 232, 222)",
} as const;

const ActiveColors = {
  lightMode: "rgb(62,113,243)",
  darkMode: "rgb(253,253,255)",
} as const;

const ColorMode = {
  light: "light",
  dark: "dark",
} as const;

const LogoColor = {
  lightMode: "rgb(7,8,30)",
  darkMode: "rgb(168,232,222)",
} as const;

const HeaderColor = {
  lightMode: "rgb(69, 41, 102)",
  darkMode: "rgb(168, 232, 222)",
} as const;

export {
  FullBackgroundColors,
  PrimaryTextColors,
  SecondaryTextColors,
  ActiveColors,
  ColorMode,
  LogoColor,
  HeaderColor,
};
