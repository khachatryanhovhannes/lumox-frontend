"use client";
import { PrimaryTextColors, SecondaryTextColors } from "@/models";
import { Box, Flex, Heading, Text, useColorModeValue } from "@chakra-ui/react";
import { Inter } from "next/font/google";
import Search from "../search";
import Link from "next/link";
import ScrollToTopButton from "@/constants/scrool";
const inter = Inter({ subsets: ["latin"] });

function BlogForm() {
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
        lineHeight={["1", "0.9", "0.8", "0.7", "0.5"]}
      >
        The It Lumox Blog.{" "}
      </Heading>
      <Text
        className={inter.className}
        fontSize={["16px", "18px", "20px", "22px", "25px"]}
        fontWeight="100"
        lineHeight={["1.2", "1.3", "1.4", "1.5", "1.6"]}
        color={secondaryTextColors}
        mt={["15px", "20px", "25px", "30px", "22px"]}
      >
        Join the millions learning to code with Lumox for free{" "}
      </Text>

      <Box mt="20px">
        <Search />
      </Box>
      <Flex mt="80px" justify="center" gap="150px">
        <Box width="520px" height="350px" bg="#D9D9D9" />
        <Flex direction="column" gap="20px">
          <Box width="450px" height="70px" bg="#D9D9D9" />
          <Box width="300px" height="50px" bg="#D9D9D9" />
          <Box width="450px" height="150px" bg="#D9D9D9" />
        </Flex>
      </Flex>
      <Flex mt="80px" justify="center" gap="40px">
        <Box width="350px" height="175px" bg="#D9D9D9" />
        <Flex direction="column" gap="20px">
          <Box width="350px" height="175px" bg="#D9D9D9" />
        </Flex>
        <Box width="350px" height="175px" bg="#D9D9D9" />
      </Flex>

      <Flex mt="80px" justify="center" gap="40px">
        <Flex direction="column" gap="20px">
          <Box width="350px" height="50px" bg="#D9D9D9" />
          <Box width="200px" height="70px" bg="#D9D9D9" />
        </Flex>
        <Flex direction="column" gap="20px">
          <Box width="350px" height="50px" bg="#D9D9D9" />
          <Box width="200px" height="70px" bg="#D9D9D9" />
        </Flex>
        <Flex direction="column" gap="20px">
          <Box width="350px" height="50px" bg="#D9D9D9" />
          <Box width="200px" height="70px" bg="#D9D9D9" />
        </Flex>
      </Flex>
      <Flex
        justifyContent="flex-end"
        pt={50}
        my={50}
        pr="200px"
        color={primaryTextColors}
      >
        <Box mr="20px">
          <Link href="/contact">Contact</Link>
        </Box>{" "}
        <Link href="/user">My Profile</Link>
      </Flex>
      <Box
        width="80%"
        mx="auto"
        color={primaryTextColors}
        borderBottom={`3px solid `}
        my={10}
        // mb={5}
      ></Box>
      <Box p={4}>
        <ScrollToTopButton />
      </Box>
    </Box>
  );
}

export default BlogForm;
