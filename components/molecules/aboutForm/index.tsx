"use client";
import ScrollToTopButton from "@/constants/scrool";
import { PrimaryTextColors, SecondaryTextColors } from "@/models";
import { Box, Flex, Heading, Text, useColorModeValue } from "@chakra-ui/react";
import { Inter } from "next/font/google";
import { HeaderColor } from "@/models/enums";
import Footer from "../Footer/footer";

const inter = Inter({ subsets: ["latin"] });

function AboutForm() {
  const primaryTextColor = useColorModeValue(
    PrimaryTextColors.lightMode,
    PrimaryTextColors.darkMode
  );
  const secondaryTextColor = useColorModeValue(
    SecondaryTextColors.lightMode,
    SecondaryTextColors.darkMode
  );

  const headerColor = useColorModeValue(
    HeaderColor.lightMode,
    HeaderColor.darkMode
  );

  return (
    <Box textAlign="center" px={[4, 6, 8, 20]}>
      <Heading
        fontFamily="Lateef"
        color={headerColor}
        fontSize={["30px", "35px", "40px", "45px", "80px"]}
        fontWeight="normal"
        mt={["20px", "25px", "30px", "35px", "40px"]}
        lineHeight={["1", "0.9", "0.8", "0.7", "1.3"]}
      >
        About Us{" "}
      </Heading>
      <Text
        className={inter.className}
        fontSize={["16px", "18px", "20px", "22px", "24px"]}
        fontWeight="100"
        lineHeight={["1.2", "1.3", "1.4", "1.5", "0.001"]}
        color={headerColor}
        mt={["15px", "20px", "25px", "30px", "15px"]}
      >
        Join Lumox, learn free – just like millions already!{" "}
      </Text>

      <Flex
        direction="column"
        alignItems="flex-start"
        mx="auto"
        maxWidth="1200px"
      >
        <Box mt="50px" px={[4, 6, 8, 10]}>
          <Text
            height="auto"
            width="100%"
            textAlign="left"
            lineHeight="2"
            color={primaryTextColor}
            fontFamily="Inter, sans-serif"
            mt={100}
            fontSize={["16px", "18px", "20px", "22px", "20px"]}
          >
            ITLumox believes in YOU. Every human being is a library of stories,
            filled with chapters of failure, victory, and valuable information.
            It’s easy to use and helps you find people who want to hear what you
            have to say. We strive to be a sanctuary for insightful
            perspectives, useful knowledge, and profound wisdom. ITLumox is
            where you can find a place to read, write, and post content that
            matters.
          </Text>
        </Box>

        <Box mt="50px" px={[4, 6, 8, 10]}>
          <Heading
            height="auto"
            width="100%"
            mb="10px"
            textAlign="left"
            fontSize={["20px", "22px", "24px", "26px", "22px"]}
            color={headerColor}
          >
            MISSION AND VISION
          </Heading>
          <Text
            height="auto"
            width="100%"
            textAlign="left"
            lineHeight="2"
            color={primaryTextColor}
            fontFamily="Inter, sans-serif"
            mt={8}
            fontSize={["16px", "18px", "20px", "22px", "20px"]}
          >
            Our mission is to build a vibrant and strong online community where
            anyone can find professional information and enhance their
            knowledge. We aim to be the go-to platform for those who are eager
            to learn and for experts who wish to share their expertise. Our
            vision is to bridge the gap between knowledge seekers and knowledge
            sharers, fostering a culture of continuous learning and growth.
            Imagine a world where every single person has free access to the sum
            of all human knowledge. That’s what we’re building at ITLumox.
          </Text>
        </Box>

        <Box mt="50px" px={[4, 6, 8, 10]}>
          <Heading
            height="auto"
            width="100%"
            mb="10px"
            textAlign="left"
            fontSize={["20px", "22px", "24px", "26px", "22px"]}
            color={headerColor}
          >
            CONTENT AND SCOPE
          </Heading>
          <Text
            height="auto"
            width="100%"
            textAlign="left"
            lineHeight="2"
            color={primaryTextColor}
            fontFamily="Inter, sans-serif"
            mt={8}
            fontSize={["16px", "18px", "20px", "22px", "20px"]}
          >
            ITLumox covers a wide array of subjects, from technology and science
            to arts and personal development. Our platform hosts articles,
            studies, and posts on various topics, ensuring that users can easily
            find professional and well-researched content. Our priority is
            high-quality, accurate information that caters to both beginners and
            advanced learners.
          </Text>
        </Box>

        <Box mt="50px" px={[4, 6, 8, 10]}>
          <Heading
            height="auto"
            width="100%"
            mb="10px"
            textAlign="left"
            fontSize={["20px", "22px", "24px", "26px", "22px"]}
            color={headerColor}
          >
            COMMUNITY AND EDITING
          </Heading>
          <Text
            height="auto"
            width="100%"
            textAlign="left"
            lineHeight="2"
            color={primaryTextColor}
            fontFamily="Inter, sans-serif"
            mt={8}
            fontSize={["16px", "18px", "20px", "22px", "20px"]}
          >
            Our community is at the heart of ITLumox. We believe that the best
            knowledge comes from collaboration and sharing diverse perspectives.
            Our platform allows users to make a post, write articles, and
            participate in discussions. We encourage constructive feedback and
            open dialogue to ensure that content remains accurate and
            up-to-date. Every experience is a lesson.
          </Text>
        </Box>

        <Box mt="50px" px={[4, 6, 8, 10]}>
          <Heading
            height="auto"
            width="100%"
            mb="10px"
            textAlign="left"
            fontSize={["20px", "22px", "24px", "26px", "22px"]}
            color={headerColor}
          >
            FIVE STRONG PILLARS
          </Heading>
          <Text
            height="auto"
            width="100%"
            textAlign="left"
            lineHeight="2"
            color={primaryTextColor}
            fontFamily="Inter, sans-serif"
            mt={8}
            fontSize={["16px", "18px", "20px", "22px", "20px"]}
          >
            Our platform is built on five strong pillars that guide our
            operations and community engagement:
          </Text>
          <Box
            as="ol"
            pl="20px"
            textAlign="left"
            lineHeight="2.5"
            color={headerColor}
          >
            <Box as="li">
              Quality Information: Ensuring that all content is reliable,
              well-researched, and professionally written.
            </Box>
            <Box as="li">
              Accessibility: Making professional knowledge available to
              everyone, regardless of language or background.
            </Box>
            <Box as="li">
              Community Engagement: Encouraging active participation and
              collaboration among users.
            </Box>
            <Box as="li">
              Neutrality: Maintaining a balanced and unbiased perspective in all
              our content.
            </Box>
            <Box as="li">
              Continuous Improvement: Constantly evolving and improving our
              platform based on user feedback and technological advancements.
            </Box>
          </Box>
        </Box>

        <Box mt="50px" px={[4, 6, 8, 10]}>
          <Heading
            height="auto"
            width="100%"
            mb="10px"
            textAlign="left"
            fontSize={["20px", "22px", "24px", "26px", "22px"]}
            color={headerColor}
          >
            QUALITY CONTROL
          </Heading>
          <Text
            height="auto"
            width="100%"
            textAlign="left"
            lineHeight="2"
            color={primaryTextColor}
            fontFamily="Inter, sans-serif"
            mt={8}
            fontSize={["16px", "18px", "20px", "22px", "20px"]}
          >
            Quality is a cornerstone of ITLumox. We employ rigorous quality
            control measures to ensure that all content is trustworthy and
            valuable:
          </Text>
          <Box
            as="ul"
            pl="20px"
            textAlign="left"
            lineHeight="2"
            color={headerColor}
          >
            <Box as="li">
              Verification: All submissions are reviewed for accuracy and
              supported by credible sources.
            </Box>
            <Box as="li">
              Editorial Oversight: Our editorial team ensures that articles
              adhere to our standards of quality and relevance.
            </Box>
            <Box as="li">
              User Reviews: Community members can rate and review articles,
              providing additional layers of quality assurance.
            </Box>
            <Box as="li">
              Anti-Vandalism: We have robust systems in place to detect and
              prevent vandalism or malicious edits.
            </Box>
          </Box>
        </Box>

        <Box mt="50px" px={[4, 6, 8, 10]}>
          <Heading
            height="auto"
            width="100%"
            mb="10px"
            textAlign="left"
            fontSize={["20px", "22px", "24px", "26px", "22px"]}
            color={headerColor}
          >
            GLOBAL REACH
          </Heading>
          <Text
            height="auto"
            width="100%"
            textAlign="left"
            lineHeight="2"
            color={primaryTextColor}
            fontFamily="Inter, sans-serif"
            mt={8}
            fontSize={["16px", "18px", "20px", "22px", "20px"]}
          >
            ITLumox aims to have a global reach. We are working towards
            translating our content into multiple languages to cater to a
            diverse audience. Our platform is designed to be user-friendly and
            accessible, ensuring that people from all around the world can
            benefit from the knowledge shared on ITLumox.
          </Text>
        </Box>
      </Flex>
      <Box p={4}>
        <ScrollToTopButton />
      </Box>
      <Footer />
    </Box>
  );
}

export default AboutForm;
