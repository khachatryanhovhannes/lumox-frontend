"use client";
import { Box, Heading, Text, useColorModeValue } from "@chakra-ui/react";
import { Inter } from "next/font/google";
import { PrimaryTextColors, SecondaryTextColors } from "../models";
import { Search } from "../components";
const inter = Inter({ subsets: ["latin"] });
function Home() {
  const primaryTextColor = useColorModeValue(
    PrimaryTextColors.lightMode,
    PrimaryTextColors.darkMode
  );

  const secondaryTextColor = useColorModeValue(
    SecondaryTextColors.lightMode,
    SecondaryTextColors.darkMode
  );

  return (
    <Box textAlign="center">
      <Heading
        fontFamily="Lateef"
        color={primaryTextColor}
        fontSize="100px"
        fontWeight="normal"
        mt="50px"
        lineHeight="0.8"
      >
        Learn to code for free
      </Heading>
      <Text
        className={inter.className}
        fontSize="25px"
        fontWeight="100"
        lineHeight="1"
        color={secondaryTextColor}
      >
        Join the millions learning to code with Lumox for free.
      </Text>
      <Box mt="30px">
        <Search />
      </Box>
    </Box>
  );
}

export default Home;
