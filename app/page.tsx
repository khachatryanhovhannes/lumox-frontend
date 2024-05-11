"use client";
import { Box, Heading, Text, Link, useColorModeValue } from "@chakra-ui/react";
import { Inter } from "next/font/google";
import { Search } from "../components";
import { PrimaryTextColors, SecondaryTextColors } from "../models";
import { BASE_URL } from "@/constants";
import UseAuth from "@/hooks/useAuth";
import { useEffect } from "react";
import UseCookies from "@/hooks/useCookies";
const inter = Inter({ subsets: ["latin"] });

function Home() {
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

  const { user } = UseAuth();

  useEffect(() => {
    console.log(user);
  }, [user]);

  console.log("___________________________________", user);

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
        Learn to code for free
      </Heading>
      <Text
        className={inter.className}
        fontSize={["16px", "18px", "20px", "22px", "25px"]}
        fontWeight="100"
        lineHeight={["1.2", "1.3", "1.4", "1.5", "1.6"]}
        color={secondaryTextColors}
        mt={["15px", "20px", "25px", "30px", "22px"]}
      >
        Join the millions learning to code with Lumox for free.
      </Text>
      <Box mt="20px">
        <Search />
      </Box>
      <Box mt="50px" display="flex" justifyContent="center">
        <Link href="#" color={secondaryTextColors} mr="60px">
          Coderepublic{" "}
        </Link>
        <Link href="#" color={secondaryTextColors} mr="60px">
          Javascript{" "}
        </Link>
        <Link href="#" color={secondaryTextColors} mr="60px">
          Programming{" "}
        </Link>
        <Link href="#" color={secondaryTextColors} mr="60px">
          Linux{" "}
        </Link>
        <Link href="#" color={secondaryTextColors} mr="60px">
          LinusTorvalds{" "}
        </Link>
        <Link href="#" color={secondaryTextColors} mr="60px">
          Coderepublic{" "}
        </Link>
        <Link href="#" color={secondaryTextColors} mr="60px">
          Javascript{" "}
        </Link>
        <Link href="#" color={secondaryTextColors} mr="60px">
          Programming{" "}
        </Link>
        <Link href="#" color={secondaryTextColors} mr="60px">
          Linux{" "}
        </Link>
        <Link href="#" color={secondaryTextColors}>
          LinusTorvalds{" "}
        </Link>
        <Link href="#" color={secondaryTextColors}>
          Programming{" "}
        </Link>
      </Box>
    </Box>
  );
}

export default Home;
