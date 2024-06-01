"use client";
import {
  Box,
  Heading,
  Text,
  Link,
  useColorModeValue,
  Flex,
  Button,
} from "@chakra-ui/react";
import { Inter } from "next/font/google";
import { Search } from "../components";
import { PrimaryTextColors, SecondaryTextColors } from "../models";
import { BASE_URL } from "@/constants";
import UseAuth from "@/hooks/useAuth";
import { useEffect } from "react";
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
      <Box mt="30px">
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
      </Box>
      <Flex mt="80px" justify="center" gap="150px">
        <Box width="220px" height="140px" bg="#D9D9D9" />
        <Flex direction="column" gap="20px">
          <Box width="300px" height="50px" bg="#D9D9D9" />
          <Box width="200px" height="70px" bg="#D9D9D9" />
        </Flex>
        <Box width="500px" height="100px" bg="#D9D9D9" />
      </Flex>

      <Flex mt="80px" justify="center" gap="150px">
        <Box width="220px" height="140px" bg="#D9D9D9" />
        <Flex direction="column" gap="20px">
          <Box width="300px" height="50px" bg="#D9D9D9" />
          <Box width="200px" height="70px" bg="#D9D9D9" />
        </Flex>
        <Box width="500px" height="100px" bg="#D9D9D9" />
      </Flex>

      <Flex mt="80px" justify="center" gap="150px">
        <Box width="220px" height="140px" bg="#D9D9D9" />
        <Flex direction="column" gap="20px">
          <Box width="300px" height="50px" bg="#D9D9D9" />
          <Box width="200px" height="70px" bg="#D9D9D9" />
        </Flex>
        <Box width="500px" height="100px" bg="#D9D9D9" />
      </Flex>

      <Flex mt="80px" justify="center" gap="150px">
        <Box width="220px" height="140px" bg="#D9D9D9" />
        <Flex direction="column" gap="20px">
          <Box width="300px" height="50px" bg="#D9D9D9" />
          <Box width="200px" height="70px" bg="#D9D9D9" />
        </Flex>
        <Box width="500px" height="100px" bg="#D9D9D9" />
      </Flex>
      <Box mt="100px" mr={950}>
        <Button
          color={secondaryTextColors}
          variant="outline"
          borderColor={secondaryTextColors}
          borderRadius={70}
          width="35%"
          colorScheme={primaryTextColors}
        >
          See more stories{" "}
        </Button>
      </Box>
      <Flex
        justifyContent="flex-end"
        pt={5}
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

export default Home;
