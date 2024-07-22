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
      <Flex alignItems="center" ml="40px">
        <Image src={logo} alt="Lumox Logo" width={120} height={50} />
        {/* <Text fontSize={{ base: "28px", md: "24px" }} color={textColor}>
          Lumoox
        </Text> */}
      </Flex>
    </Link>
  );
}

export default Logo;
