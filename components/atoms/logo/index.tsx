"use client";

import { Flex, Text, useColorMode, useColorModeValue } from "@chakra-ui/react";
import logoLight from "../../../public/lumox-logo-light-mode.png";
import logoDark from "../../../public/lumox-logo-dark-mode.png";
import { LogoColor } from "../../../models";
import Link from "next/link";
import Image from "next/image";

function Logo() {
  const { colorMode } = useColorMode();
  const logo = colorMode === "light" ? logoLight : logoDark;
  const textColor = useColorModeValue(LogoColor.lightMode, LogoColor.darkMode);

  return (
    <Link href="/">
      <Flex>
        <Image src={logo} alt="Lumox Logo" />
        <Text fontSize="48px" fontFamily="Italiana" color={textColor}>
          IT Lumox
        </Text>
      </Flex>
    </Link>
  );
}

export default Logo;
