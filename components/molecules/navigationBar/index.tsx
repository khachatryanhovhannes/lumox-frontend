"use client";

import { Flex, Text, useColorModeValue } from "@chakra-ui/react";
import { NAV_BAR_ITEMS } from "../../../constants";
import { INavItem, PrimaryTextColors } from "../../../models";
import Link from "next/link";

function NavigationBar() {
  const linkColor = useColorModeValue(
    PrimaryTextColors.lightMode,
    PrimaryTextColors.darkMode
  );

  return (
    <Flex gap="20px">
      {NAV_BAR_ITEMS.map((item: INavItem) => (
        <Link href={item.path} key={item.path}>
          <Text color={linkColor}>{item.label}</Text>
        </Link>
      ))}
    </Flex>
  );
}

export default NavigationBar;
