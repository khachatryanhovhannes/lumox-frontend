"use client";

import { Flex, Text, useColorModeValue } from "@chakra-ui/react";
import { NAV_BAR_ITEMS } from "../../../constants";
import { INavItem, PrimaryTextColors } from "../../../models";
import Link from "next/link";


interface NavigationBarProps{
  direction?: "row" | "column"
}

function NavigationBar({direction = "row"}: NavigationBarProps) {
  const linkColor = useColorModeValue(
    PrimaryTextColors.lightMode,
    PrimaryTextColors.darkMode
  );

  return (
    <Flex direction={direction} gap="20px">
      {NAV_BAR_ITEMS.map((item: INavItem) => (
        <Link href={item.path} key={item.path}>
          <Text color={linkColor}>{item.label}</Text>
        </Link>
      ))}
    </Flex>
  );
}

export default NavigationBar;
