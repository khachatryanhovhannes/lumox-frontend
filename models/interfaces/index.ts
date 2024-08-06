interface INavItem {
  label: string;
  path: string;
}

export type { INavItem };
interface NavigationBarProps {
  direction?: "row" | "column";
  onLinkClick?: () => void;
}
