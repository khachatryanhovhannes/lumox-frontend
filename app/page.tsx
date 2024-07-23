"use client";

import {
  Box,
  Heading,
  Text,
  Link,
  useColorModeValue,
  Flex,
  Button,
  Grid,
  Divider,
  IconButton,
} from "@chakra-ui/react";
import { Inter } from "next/font/google";
import { Search } from "../components";
import { PrimaryTextColors, SecondaryTextColors } from "../models";
import { BASE_URL } from "@/constants";
import UseAuth from "@/hooks/useAuth";
import { useEffect } from "react";
import ScrollToTopButton from "@/constants/scrool";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import Footer from "@/components/molecules/Footer/footer";
// import ScrollToTopButton from "@/constants/scroll"; // Corrected import path

const inter = Inter({ subsets: ["latin"] });

function Home() {
  const primaryTextColors = useColorModeValue(
    PrimaryTextColors.lightMode,
    PrimaryTextColors.darkMode
  );
  const secondaryTextColors = useColorModeValue(
    SecondaryTextColors.lightMode,
    SecondaryTextColors.darkMode
  );

  const { user } = UseAuth();

  useEffect(() => {
    console.log(user);
  }, [user]);

  return (
    <Box textAlign="center" p={[4, 6, 8, 10]}>
      <Heading
        fontFamily="Lateef"
        color={primaryTextColors}
        fontSize={["30px", "35px", "40px", "45px", "80px"]}
        fontWeight="normal"
        mt={["20px", "25px", "30px", "35px", "40px"]}
        lineHeight={["1", "0.9", "0.8", "0.7", "0.3"]}
      >
        Learn to code for free
      </Heading>
      <Text
        className={inter.className}
        fontSize={["16px", "18px", "20px", "22px", "24px"]}
        fontWeight="100"
        lineHeight={["1.2", "1.3", "1.4", "1.5", "1.6"]}
        color={secondaryTextColors}
        mt={["15px", "20px", "25px", "30px", "35px"]}
      >
        Join the millions learning to code with Lumox for free.
      </Text>
      <Box mt="30px">
        <Search />
      </Box>
      <Box mt="50px" display="flex" justifyContent="center" flexWrap="wrap">
        {[
          "Coderepublic",
          "Javascript",
          "Programming",
          "Linux",
          "LinusTorvalds",
        ].map((link, index) => (
          <Link
            key={index}
            href="#"
            color={secondaryTextColors}
            mx="20px"
            my="10px"
          >
            {link}
          </Link>
        ))}
      </Box>
      <Grid
        templateColumns={["1fr", "1fr", "repeat(3, 1fr)"]}
        gap={8}
        mt="80px"
      >
        <Box width="100%" height="140px" bg="#D9D9D9" />
        <Flex direction="column" gap="20px">
          <Box width="100%" height="50px" bg="#D9D9D9" />
          <Box width="100%" height="70px" bg="#D9D9D9" />
        </Flex>
        <Box width="100%" height="100px" bg="#D9D9D9" />
      </Grid>
      <Grid
        templateColumns={["1fr", "1fr", "repeat(3, 1fr)"]}
        gap={8}
        mt="80px"
      >
        <Box width="100%" height="140px" bg="#D9D9D9" />
        <Flex direction="column" gap="20px">
          <Box width="100%" height="50px" bg="#D9D9D9" />
          <Box width="100%" height="70px" bg="#D9D9D9" />
        </Flex>
        <Box width="100%" height="100px" bg="#D9D9D9" />
      </Grid>
      <Grid
        templateColumns={["1fr", "1fr", "repeat(3, 1fr)"]}
        gap={8}
        mt="80px"
      >
        <Box width="100%" height="140px" bg="#D9D9D9" />
        <Flex direction="column" gap="20px">
          <Box width="100%" height="50px" bg="#D9D9D9" />
          <Box width="100%" height="70px" bg="#D9D9D9" />
        </Flex>
        <Box width="100%" height="100px" bg="#D9D9D9" />
      </Grid>
      <Grid
        templateColumns={["1fr", "1fr", "repeat(3, 1fr)"]}
        gap={8}
        mt="80px"
      >
        <Box width="100%" height="140px" bg="#D9D9D9" />
        <Flex direction="column" gap="20px">
          <Box width="100%" height="50px" bg="#D9D9D9" />
          <Box width="100%" height="70px" bg="#D9D9D9" />
        </Flex>
        <Box width="100%" height="100px" bg="#D9D9D9" />
      </Grid>
      <Box mt="100px">
        <Button
          color={secondaryTextColors}
          variant="outline"
          borderColor={secondaryTextColors}
          borderRadius="70px"
          width={["100%", "50%", "35%"]}
          colorScheme={primaryTextColors}
        >
          See more stories
        </Button>
      </Box>

      <Box p={4}>
        <ScrollToTopButton />
      </Box>

      <Footer />
    </Box>
  );
}

export default Home;
