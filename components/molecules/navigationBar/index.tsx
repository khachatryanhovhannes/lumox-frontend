"use client";

import { Flex, Text, Spinner, useColorModeValue } from "@chakra-ui/react";
import { NAV_BAR_ITEMS } from "@/constants";
import { INavItem, PrimaryTextColors } from "@/models";
import Link from "next/link";
import useAuth from "@/hooks/useAuth";

interface NavigationBarProps {
  direction?: "row" | "column";
  onLinkClick?: () => void;
}

function NavigationBar({ direction = "row", onLinkClick }: NavigationBarProps) {
  const linkColor = useColorModeValue(
    PrimaryTextColors.lightMode,
    PrimaryTextColors.darkMode
  );
  const { user, pending } = useAuth();

  const navItems = user
    ? [...NAV_BAR_ITEMS, { label: "Write", path: "/write" }]
    : NAV_BAR_ITEMS;

  return (
    <Flex direction={direction} gap="20px" padding="10px 20px" mb={20}>
      {navItems.map((item: INavItem) => (
        <Link href={item.path} key={item.path} onClick={onLinkClick}>
          <Text
            color={linkColor}
            fontSize={{ base: "16px", sm: "18px", md: "20px" }}
          >
            {item.label}
          </Text>
        </Link>
      ))}
      {pending && <Spinner color={linkColor} />}
    </Flex>
  );
}

export default NavigationBar;
