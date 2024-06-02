"use client";

import ScrollToTopButton from "@/constants/scrool";
import { OUR_TEAM } from "@/constants";
import { PrimaryTextColors, SecondaryTextColors } from "@/models";
import { Box, Heading, Img, Text, useColorModeValue } from "@chakra-ui/react";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

function TeamForm() {
  const primaryTextColors = [
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
        Our Team
      </Heading>

      <Text
        className={inter.className}
        fontSize={["16px", "18px", "20px", "22px", "25px"]}
        fontWeight="100"
        lineHeight={["1.2", "1.3", "1.4", "1.5", "1.6"]}
        color={secondaryTextColors}
        mt={["15px", "20px", "25px", "30px", "22px"]}
      >
        IT Lumox is a home for human stories and ideas.
      </Text>

      <Box>
        <Text
          className={inter.className}
          color={secondaryTextColors}
          mt={["15px", "20px", "25px", "30px", "22px"]}
          textAlign="left"
          margin="30px"
          padding="15px 15px 300px"
        >
          Leadership
        </Text>
      </Box>

      <Box>
        <Text
          className={inter.className}
          color={secondaryTextColors}
          mt={["15px", "20px", "25px", "30px", "22px"]}
          textAlign="left"
          margin="30px"
          padding="15px 15px 300px"
        >
          Team
        </Text>
      </Box>
      <Box p={4}>
        <ScrollToTopButton />
      </Box>

      {OUR_TEAM.map((member, index) => (
        <Box key={index} mt="30px">
          <Heading as="h3" fontSize="24px">
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

          <Text fontSize="16px" color={secondaryTextColors} mt="10px">
            {member.description}
          </Text>

          <Box mt="10px">
            <Img
              src={
                "https://unbridlingyourbrilliance.com/wp-content/uploads/2018/10/Great-Leaders-Develop-Their-People-What-Development-Means.png"
              }
              alt={member.firstname}
            />
          </Box>

          <Text fontSize="14px" color={secondaryTextColors} mt="10px">
            <a
              href={"https://www.linkedin.com/in/jora-hovsepyan-459149265/"}
              target="_blank"
              rel="noopener noreferrer"
            >
              View Profile
            </a>
          </Text>
        </Box>
      ))}
    </Box>
  );
}

export default TeamForm;

