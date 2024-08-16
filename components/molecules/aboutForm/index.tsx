/* eslint-disable react/no-unescaped-entities */
"use client";
import { PrimaryTextColors, SecondaryTextColors } from "@/models";
import { Box, Flex, Heading, Text, useColorModeValue } from "@chakra-ui/react";
import { Inter } from "next/font/google";
import { HeaderColor } from "@/models/enums";
import Footer from "../Footer/footer";
import ScrollToTopButton from "@/constants/scrool";

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
        About Us
      </Heading>
      <Text
        className={inter.className}
        fontSize={["16px", "18px", "20px", "22px", "24px"]}
        fontWeight="100"
        lineHeight={["1.2", "1.3", "1.4", "1.5", "0.001"]}
        color={headerColor}
        mt={["15px", "20px", "25px", "30px", "15px"]}
      >
        Join Lumoox, learn free – just like millions already!
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
            <b>Lumoox</b> believes in YOU. Every human being is a library of
            stories, filled with chapters of failure,victory and valuable
            information. Our platform is easy to use and connects you with
            people who want to hear what you have to say. We strive to be a home
            for insightful perspectives, useful knowledge, and profound wisdom.{" "}
            <b>Lumoox</b> is where you can find a place to <b>read, write</b>,
            and post content that matters.
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
            Our <b>mission</b> is to build a vibrant and strong online community
            where anyone can find professional information and enrich their
            knowledge. We aim to be the go-to platform for those who are eager
            to learn and for experts who wish to share. Our vision is to bridge
            the gap between knowledge seekers and knowledge sharers, fostering a
            culture of continuous learning and growth. Imagine a world where
            every single person has free access to the sum of all human
            knowledge. That's what we're building at <b>Lumoox</b>."
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
            <b>Lumoox</b> covers a wide array of subjects, from technology and
            science to arts and personal development. Our platform hosts
            articles, studies, and posts on various topics, ensuring that users
            can easily find <b>where to read</b> professional and
            well-researched content. Our priority is high-quality, accurate
            information that caters to both beginners and advanced learners.
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
            Our community is at the heart of Lumoox. We believe that the best
            knowledge comes from collaboration and sharing diverse perspectives.
            Our platform allows users to <b>make a post</b>, write articles, and
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
            FIVE STRONG PILLARS <br />
            Our platform is built on five strong pillars that guide our
            operations and community engagement:
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
            1. Quality Information: Ensuring that all content is reliable,
            well-researched, and professionally written. <br />
            2. Accessibility: Making professional knowledge available to
            everyone, regardless of language or background. <br /> 3. Community
            Engagement: Encouraging active participation and collaboration among
            users. <br /> 4. Neutrality: Maintaining a balanced and fair
            perspective in all our content. <br /> 5. Continuous Improvement:
            Constantly evolving and improving our platform based on user
            feedback and technological advancements.
          </Text>
          <Box
            as="ol"
            pl="20px"
            textAlign="left"
            lineHeight="2.5"
            color={headerColor}
          ></Box>
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
            Quality is a cornerstone of <b>Lumoox</b>. We employ quality control{" "}
            <br />
            measures to ensure that all content is trustworthy and valuable:{" "}
            <br />- <b>Verification</b>: All submissions are reviewed for
            accuracy and supported by credible sources. <br />-{" "}
            <b> Editorial Oversight</b> : Our editorial team ensures that
            articles <br /> adhere to our standards of quality and relevance.{" "}
            <br />- <b>User Reviews</b>: Community members can rate and review
            articles, providing additional layers of quality assurance. <br />-
            <b>Anti-Vandalism</b>: We have robust systems in place to detect and
            prevent vandalism or malicious edits.
          </Text>
          <Box
            as="ul"
            pl="20px"
            textAlign="left"
            lineHeight="2"
            color={headerColor}
          ></Box>
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
            While Lumoox prioritizes Armenian content, we are committed to being
            a global platform. We offer articles and resources in English to
            serve a diverse audience. Our language editions are managed by
            dedicated editorial teams to ensure quality and cultural relevance.{" "}
            <br />
            Thus ,We're not chasing clicks or selling your data. We're fueled by
            a community hungry for knowledge and eager to share. We believe in
            the power of community-driven enlightenment. The idea that you can
            be a teacher to someone will push you to be the person you dreamed
            of when you needed a teacher. Welcome to Lumoox – where curiosity
            finds its home and learning is luminously free!"
          </Text>
        </Box>
      </Flex>
      <Footer />
      <ScrollToTopButton />
    </Box>
  );
}

export default AboutForm;
