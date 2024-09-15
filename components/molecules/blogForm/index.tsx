"use client";
import { PrimaryTextColors, SecondaryTextColors } from "@/models";
import { Box, Flex, Heading, Text, useColorModeValue } from "@chakra-ui/react";
import { Inter } from "next/font/google";
import Search from "../search";
import Link from "next/link";
import ScrollToTopButton from "@/constants/scrool";
import Footer from "../Footer/footer";
const inter = Inter({ subsets: ["latin"] });

function BlogForm() {
  const primaryTextColors = useColorModeValue(
    PrimaryTextColors.lightMode,
    PrimaryTextColors.darkMode
  );
  const secondaryTextColors = useColorModeValue(
    SecondaryTextColors.lightMode,
    SecondaryTextColors.darkMode
  );

  return (
    <Box textAlign="center" px={[2, 4, 6, 8]}>
      <Heading
        fontFamily="Lateef"
        color={secondaryTextColors}
        fontSize={["30px", "35px", "40px", "45px", "80px"]}
        fontWeight="normal"
        mt={["20px", "25px", "30px", "35px", "40px"]}
        lineHeight={["1", "0.9", "0.8", "0.7", "1.3"]}
      >
        The Lumoox Blog{" "}
      </Heading>

      <Text
        className={inter.className}
        fontSize={["16px", "18px", "20px", "22px", "24px"]}
        fontWeight="100"
        lineHeight={["1.2", "1.3", "1.4", "1.5", "0.001"]}
        color={secondaryTextColors}
        mt={["15px", "20px", "25px", "30px", "15px"]}
      >
        Join the millions learning to code with Lumox for free
      </Text>

      <Box mt="40px">
        <Search />
      </Box>

      <Flex mt="80px" justify="center" flexWrap="wrap" gap="20px">
        <Box width={["100%", "100%", "520px"]} height="350px" bg="#D9D9D9" />
        <Flex direction="column" gap="20px" width={["100%", "100%", "auto"]}>
          <Box width={["100%", "450px"]} height="70px" bg="#D9D9D9" />
          <Box width={["100%", "300px"]} height="50px" bg="#D9D9D9" />
          <Box width={["100%", "450px"]} height="150px" bg="#D9D9D9" />
        </Flex>
      </Flex>

      <Flex mt="80px" justify="center" flexWrap="wrap" gap="20px">
        <Box width={["100%", "350px"]} height="175px" bg="#D9D9D9" />
        <Box width={["100%", "350px"]} height="175px" bg="#D9D9D9" />
        <Box width={["100%", "350px"]} height="175px" bg="#D9D9D9" />
      </Flex>

      <Flex mt="80px" justify="center" flexWrap="wrap" gap="20px">
        <Flex direction="column" gap="20px" width={["100%", "auto"]}>
          <Box width={["100%", "350px"]} height="50px" bg="#D9D9D9" />
          <Box width={["100%", "200px"]} height="70px" bg="#D9D9D9" />
        </Flex>
        <Flex direction="column" gap="20px" width={["100%", "auto"]}>
          <Box width={["100%", "350px"]} height="50px" bg="#D9D9D9" />
          <Box width={["100%", "200px"]} height="70px" bg="#D9D9D9" />
        </Flex>
        <Flex direction="column" gap="20px" width={["100%", "auto"]}>
          <Box width={["100%", "350px"]} height="50px" bg="#D9D9D9" />
          <Box width={["100%", "200px"]} height="70px" bg="#D9D9D9" />
        </Flex>
      </Flex>

      <Box p={4}>
        <ScrollToTopButton />
      </Box>
      <Footer />
    </Box>
  );
}

export default BlogForm;
