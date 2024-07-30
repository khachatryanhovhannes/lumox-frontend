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
  Image,
} from "@chakra-ui/react";
import { Inter } from "next/font/google";
import { Search } from "../components";
import { PrimaryTextColors, SecondaryTextColors } from "../models";
import { BASE_URL } from "@/constants";
import UseAuth from "@/hooks/useAuth";
import { useEffect } from "react";
// import ScrollToTopButton from "@/constants/scroll"; // Corrected import path
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import Footer from "@/components/molecules/Footer/footer";
import ScrollToTopButton from "@/constants/scrool";

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
      <Box mt="50px">
        <Grid templateColumns="repeat(1, 1fr)" gap={6}>
          <Box
            p={4}
            shadow="md"
            borderWidth="1px"
            borderRadius="lg"
            overflow="hidden"
            textAlign="left"
            display="flex"
            alignItems="center"
          >
            <Image
              borderRadius="full"
              boxSize="80px"
              src="https://scontent.fevn2-1.fna.fbcdn.net/v/t39.30808-6/441065201_1679345445932135_6563685465057658347_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=VuSeGa4xYKkQ7kNvgHq1FZA&_nc_ht=scontent.fevn2-1.fna&oh=00_AYDtaAxLjkLJ9PVsCf9r9vHDo9-UPtkFUYijzbCYrdKSQQ&oe=66A56AB0"
              alt="Profile Image"
              mr={4}
            />
            <Box>
              <Heading fontSize="xl" mb={2}>
                Elmira Papoyan
              </Heading>
              <Text fontSize="md">Jul22 (1 days ago)</Text>
            </Box>
          </Box>
        </Grid>
        <Text fontSize="md" color={secondaryTextColors} fontWeight={220} mt={4}>
          17 Developer tools that keep me productive
        </Text>
      </Box>

      <Box mt="100px">
        <Button
          color={secondaryTextColors}
          variant="outline"
          borderColor={secondaryTextColors}
          borderRadius="70px"
          width={["100%", "50%", "35%"]}
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
