"use client";
import { PrimaryTextColors, SecondaryTextColors } from "@/models";
import { Box, Heading, Text, useColorModeValue } from "@chakra-ui/react";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

function AboutForm() {
  const primaryTextColors = [
    useColorModeValue(PrimaryTextColors.lightMode, PrimaryTextColors.darkMode),
    useColorModeValue(PrimaryTextColors.lightMode, PrimaryTextColors.darkMode),
    useColorModeValue(PrimaryTextColors.lightMode, PrimaryTextColors.darkMode),
    useColorModeValue(PrimaryTextColors.lightMode, PrimaryTextColors.darkMode),
    useColorModeValue(PrimaryTextColors.lightMode, PrimaryTextColors.darkMode),
  ];

  const secondaryTextColors = [
    useColorModeValue(
      SecondaryTextColors.lightMode,
      SecondaryTextColors.darkMode
    ),
    useColorModeValue(
      SecondaryTextColors.lightMode,
      SecondaryTextColors.darkMode
    ),
    useColorModeValue(
      SecondaryTextColors.lightMode,
      SecondaryTextColors.darkMode
    ),
    useColorModeValue(
      SecondaryTextColors.lightMode,
      SecondaryTextColors.darkMode
    ),
    useColorModeValue(
      SecondaryTextColors.lightMode,
      SecondaryTextColors.darkMode
    ),
  ];

  return (
    <Box textAlign="center">
      <Heading
        fontFamily="Lateef"
        color={primaryTextColors}
        fontSize={["30px", "35px", "40px", "45px", "100px"]}
        fontWeight="normal"
        mt={["20px", "25px", "30px", "35px", "80px"]}
        lineHeight={["1", "0.9", "0.8", "0.7", "0.2"]}
      >
        Everyone has a story to tell.{" "}
      </Heading>
      <Text
        className={inter.className}
        fontSize={["16px", "18px", "20px", "22px", "25px"]}
        fontWeight="100"
        lineHeight={["1.2", "1.3", "1.4", "1.5", "1.6"]}
        color={secondaryTextColors}
        mt={["15px", "20px", "25px", "30px", "22px"]}
      >
        IT Lumox is a home for human stories and ideas.{" "}
      </Text>
    </Box>
  );
}

export default AboutForm;