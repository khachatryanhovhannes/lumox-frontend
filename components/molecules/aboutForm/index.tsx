"use client";
import { PrimaryTextColors, SecondaryTextColors } from "@/models";
import { Box, Flex, Heading, Text, useColorModeValue } from "@chakra-ui/react";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

function AboutForm() {
  const primaryTextColor = useColorModeValue(PrimaryTextColors.lightMode, PrimaryTextColors.darkMode);
  const secondaryTextColor = useColorModeValue(SecondaryTextColors.lightMode, SecondaryTextColors.darkMode);

  return (
    <Box textAlign="center">
      <Heading
        fontFamily="Lateef"
        color={primaryTextColor}
        fontSize={["30px", "35px", "40px", "45px", "100px"]}
        fontWeight="normal"
        mt={["20px", "25px", "30px", "35px", "80px"]}
        lineHeight={["1", "0.9", "0.8", "0.7", "0.2"]}
      >
        Everyone has a story to tell.
      </Heading>
      <Text
        className={inter.className}
        fontSize={["16px", "18px", "20px", "22px", "25px"]}
        fontWeight="100"
        lineHeight={["1.2", "1.3", "1.4", "1.5", "1.6"]}
        color={secondaryTextColor}
        mt={["15px", "20px", "25px", "30px", "22px"]}
      >
        IT Lumox is a home for human stories and ideas.
      </Text>

      <Flex direction="column" alignItems="flex-start">
        <Box mt="50px" ml={["10px", "50px", "100px", "150px", "370px"]}>
          <Text height="120px" width="950px" textAlign="left" lineHeight="2">
            ITLumox believes in YOU. Every human being is a library of stories, filled with chapters of failure, victory, and valuable information. It's easy to use and helps you find people who want to hear what you have to say. We strive to be a sanctuary for insightful perspectives, useful knowledge, and profound wisdom. ITLumox is where you can find a place to read, write, and post content that matters.
          </Text>
        </Box>

        <Box mt="50px" ml={["10px", "50px", "100px", "150px", "370px"]}>
          <Heading height="50px" width="650px" mb="10px" textAlign="left">
            MISSION AND VISION
          </Heading>
          <Text height="120px" width="950px" textAlign="left" lineHeight="2">
            Our mission is to build a vibrant and strong online community where anyone can find professional information and enhance their knowledge. We aim to be the go-to platform for those who are eager to learn and for experts who wish to share their expertise. Our vision is to bridge the gap between knowledge seekers and knowledge sharers, fostering a culture of continuous learning and growth. Imagine a world where every single person has free access to the sum of all human knowledge. That's what we're building at ITLumox.
          </Text>
        </Box>

        <Box mt="50px" ml={["10px", "50px", "100px", "150px", "370px"]}>
          <Heading height="50px" width="650px" mb="10px" textAlign="left">
            CONTENT AND SCOPE
          </Heading>
          <Text height="120px" width="950px" textAlign="left" lineHeight="2">
            ITLumox covers a wide array of subjects, from technology and science to arts and personal development. Our platform hosts articles, studies, and posts on various topics, ensuring that users can easily find professional and well-researched content. Our priority is high-quality, accurate information that caters to both beginners and advanced learners.
          </Text>
        </Box>

        <Box mt="50px" ml={["10px", "50px", "100px", "150px", "370px"]}>
          <Heading height="50px" width="650px" mb="10px" textAlign="left">
            COMMUNITY AND EDITING
          </Heading>
          <Text height="120px" width="950px" textAlign="left" lineHeight="2">
            Our community is at the heart of ITLumox. We believe that the best knowledge comes from collaboration and sharing diverse perspectives. Our platform allows users to make a post, write articles, and participate in discussions. We encourage constructive feedback and open dialogue to ensure that content remains accurate and up-to-date. Every experience is a lesson.
          </Text>
        </Box>

        <Box mt="50px" ml={["10px", "50px", "100px", "150px", "370px"]}>
          <Heading height="50px" width="650px" mb="10px" textAlign="left">
            FIVE STRONG PILLARS
          </Heading>
          <Text width="950px" textAlign="left" lineHeight="2">
            Our platform is built on five strong pillars that guide our operations and community engagement:
            <Box as="ol" pl="20px">
              <Box as="li">Quality Information: Ensuring that all content is reliable, well-researched, and professionally written.</Box>
              <Box as="li">Accessibility: Making professional knowledge available to everyone, regardless of language or background.</Box>
              <Box as="li">Community Engagement: Encouraging active participation and collaboration among users.</Box>
              <Box as="li">Neutrality: Maintaining a balanced and unbiased perspective in all our content.</Box>
              <Box as="li">Continuous Improvement: Constantly evolving and improving our platform based on user feedback and technological advancements.</Box>
            </Box>
          </Text>
        </Box>

        <Box mt="50px" ml={["10px", "50px", "100px", "150px", "370px"]}>
          <Heading height="50px" width="650px" mb="10px" textAlign="left">
            QUALITY CONTROL
          </Heading>
          <Text height="120px" width="950px" textAlign="left" lineHeight="2">
            Quality is a cornerstone of ITLumox. We employ rigorous quality control measures to ensure that all content is trustworthy and valuable:
            <Box as="ul" pl="20px">
              <Box as="li">Verification: All submissions are reviewed for accuracy and supported by credible sources.</Box>
              <Box as="li">Editorial Oversight: Our editorial team ensures that articles adhere to our standards of quality and relevance.</Box>
              <Box as="li">User Reviews: Community members can rate and review articles, providing additional layers of quality assurance.</Box>
              <Box as="li">Anti-Vandalism: We have robust systems in place to detect and prevent vandalism or malicious edits.</Box>
            </Box>
          </Text>
        </Box>

        <Box mt="120px" ml={["10px", "50px", "100px", "150px", "370px"]}>
          <Heading height="50px" width="650px" mb="10px" textAlign="left">
            GLOBAL REACH
          </Heading>
          <Text height="120px" width="950px" textAlign="left" lineHeight="2">
            While ITLumox prioritizes  Armenian content, we are committed to being a global platform. We offer articles and resources in English to serve a diverse audience. Our language editions are managed by dedicated editorial teams to ensure quality and cultural relevance. We believe in the power of community-driven enlightenment. The idea that you can be a teacher to someone will push you to be the person you dreamed of when you needed a teacher.
            Welcome to ITLumox – where curiosity finds its home and learning is luminously free!
          </Text>
        </Box>
      </Flex>
      <Box
        width="80%"
        mx="auto"
        color={primaryTextColor}
        borderBottom="3px solid"
        my={20}
        // mb={5}
      ></Box>
    </Box>
  );
}

export default AboutForm;
