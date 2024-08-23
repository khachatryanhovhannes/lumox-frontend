"use client";

import ScrollToTopButton from "@/constants/scrool";
import { OUR_TEAM } from "@/constants";
import { PrimaryTextColors, SecondaryTextColors } from "@/models";
import {
  Box,
  Heading,
  Img,
  Text,
  useColorModeValue,
  SimpleGrid,
  Stack,
  Button,
  Link,
} from "@chakra-ui/react";
import { Inter } from "next/font/google";
import Footer from "../Footer/footer";
const inter = Inter({ subsets: ["latin"] });

function TeamForm() {
  // Call useColorModeValue at the top level of the component
  const primaryTextColors = useColorModeValue(
    PrimaryTextColors.lightMode,
    PrimaryTextColors.darkMode
  );
  const secondaryTextColors = useColorModeValue(
    SecondaryTextColors.lightMode,
    SecondaryTextColors.darkMode
  );
  const bgColor = useColorModeValue("white", "gray.800"); // Moved here
  const boxShadow = "lg"; // Moved here

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
        Our Team{" "}
      </Heading>

      <Text
        className={inter.className}
        fontSize={["16px", "18px", "20px", "22px", "24px"]}
        fontWeight="100"
        lineHeight={["1.2", "1.3", "1.4", "1.5", "0.001"]}
        color={secondaryTextColors}
        mt={["15px", "20px", "25px", "30px", "15px"]}
      >
        Who are the real people behind the creativity at <b>Lumoox</b>?{" "}
      </Text>

      <Box p={4}>
        <Text
          className={inter.className}
          fontSize={["16px", "18px", "20px", "22px", "24px"]}
          fontWeight="400"
          lineHeight={["1.2", "1.3", "1.4", "1.5", "1.6"]}
          color={secondaryTextColors}
          mt={["15px", "20px", "25px", "30px", "155px"]}
          mx="auto"
          maxWidth="90%"
          textAlign="justify"
        >
          <br />
          Meet the Brilliant Minds Behind <b>Lumoox</b>. We are a group of
          enthusiastics, passionate about creating something great and making a
          positive impact on the world. Our team believes that great things are
          done by a series of small things brought together. <br />
          The seeds of innovation are planted in the soil of change, nurtured by
          the light of vision.The seeds of innovation are planted in the soil of
          change, nurtured by the light of vision.
        </Text>
        <Heading as="h1" fontSize="24px" mt="10px">
          Meet your team!
        </Heading>
      </Box>

      <Box p={4}>
        <ScrollToTopButton />
      </Box>

      <SimpleGrid columns={[1, 1, 2, 3]} spacing={5} mb="30px">
        {OUR_TEAM.map((member, index) => (
          <Box
            key={index}
            textAlign="left"
            p={5}
            borderWidth="3px"
            borderRadius="lg"
            overflow="hidden"
            bg={bgColor}
            boxShadow={boxShadow}
          >
            <Stack align="center">
              <Img
                src={member.image}
                alt={`${member.firstname} ${member.lastname}`}
                borderRadius="full"
                boxSize="150px"
                mx="auto"
              />
              <Heading as="h3" fontSize="24px" mt="10px">
                {member.firstname} {member.lastname}
              </Heading>
              <Text
                fontSize="18px"
                fontWeight="bold"
                color={secondaryTextColors}
                mt="10px"
              >
                {member.position}
              </Text>
              <Text
                fontSize="16px"
                color={secondaryTextColors}
                mt="10px"
                textAlign="center"
              >
                {member.description}
              </Text>
              <Link href={member.profile_link} isExternal>
                <Button mt="10px" colorScheme="linkedin" variant="outline">
                  View LinkedIn Profile
                </Button>
              </Link>
            </Stack>
          </Box>
        ))}
      </SimpleGrid>
      <Box
        width="80%"
        mx="auto"
        color={primaryTextColors}
        borderBottom="3px solid"
      ></Box>
      <Footer />
    </Box>
  );
}

export default TeamForm;
