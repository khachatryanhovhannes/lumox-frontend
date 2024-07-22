"use client";

import { Flex, Text, useColorModeValue } from "@chakra-ui/react";
import { NAV_BAR_ITEMS } from "@/constants";
import { INavItem, PrimaryTextColors } from "@/models";
import Link from "next/link";
import useAuth from "@/hooks/useAuth";

interface NavigationBarProps {
  direction?: "row" | "column";
}

function NavigationBar({ direction = "row" }: NavigationBarProps) {
  const linkColor = useColorModeValue(
    PrimaryTextColors.lightMode,
    PrimaryTextColors.darkMode
  );
  const { user, pending } = useAuth();

  const navItems = user
    ? [...NAV_BAR_ITEMS, { label: "Write", path: "/write" }]
    : NAV_BAR_ITEMS;

  if (pending) return <div>Loading...</div>;

  return (
    <Flex direction={direction} gap="20px" padding="10px 20px" mb={20}>
      {navItems.map((item: INavItem) => (
        <Link href={item.path} key={item.path}>
          <Text
            color={linkColor}
            fontSize={{ base: "16px", sm: "18px", md: "20px" }}
          >
            {item.label}
          </Text>
        </Link>
      ))}
    </Flex>
  );
}

export default NavigationBar;
