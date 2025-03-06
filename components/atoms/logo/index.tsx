"use client";

import { Flex, Text, useColorMode, useColorModeValue } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import logoLight from "../../../public/lumox-logo-light-mode.png";
import logoDark from "../../../public/lumox-logo-dark-mode.png";
import { LogoColor } from "../../../models";

function Logo() {
  const { colorMode } = useColorMode();
  const logo = colorMode === "light" ? logoLight : logoDark;
  const textColor = useColorModeValue(LogoColor.lightMode, LogoColor.darkMode);

  return (
    <Link href="/">
      <Flex alignItems="center" minW="120px" minH="50px">
        <Image
          src={logo}
          alt="Lumox Logo"
          width={120}
          height={50}
          layout="intrinsic"
        />
        <Text
          fontSize={{ base: "48px", md: "24px" }}
          fontFamily="Italiana"
          color={textColor}
        ></Text>
      </Flex>
    </Link>
  );
}

export default Logo;
