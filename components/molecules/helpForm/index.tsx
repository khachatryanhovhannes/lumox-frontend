"use client";
import { PrimaryTextColors, SecondaryTextColors } from "@/models";
import {
  Box,
  Center,
  Flex,
  Heading,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { Inter } from "next/font/google";
import Search from "../search";
import Link from "next/link";
import ScrollToTopButton from "@/constants/scrool";
import Footer from "../Footer/footer";

const inter = Inter({ subsets: ["latin"] });

function HelpForm() {
  const primaryTextColor = useColorModeValue(
    PrimaryTextColors.lightMode,
    PrimaryTextColors.darkMode
  );
  const secondaryTextColor = useColorModeValue(
    SecondaryTextColors.lightMode,
    SecondaryTextColors.darkMode
  );

  return (
    <Box textAlign="center" px={[2, 4, 6, 8]}>
      <Heading
        fontFamily="Lateef"
        color={primaryTextColor}
        fontSize={["30px", "35px", "40px", "45px", "100px"]}
        fontWeight="normal"
        mt={["20px", "25px", "30px", "35px", "80px"]}
        lineHeight={["1", "0.9", "0.8", "0.7", "0.5"]}
      >
        How can we help?{" "}
      </Heading>
      <Text
        className={inter.className}
        fontSize={["16px", "18px", "20px", "22px", "25px"]}
        fontWeight="100"
        lineHeight={["1.2", "1.3", "1.4", "1.5", "1.6"]}
        color={secondaryTextColor}
        mt={["15px", "20px", "25px", "30px", "12px"]}
      >
        Join the millions learning to code with Lumox for free{" "}
      </Text>
      <Box mt="20px">
        <Search />
      </Box>

      <Flex
        direction="column"
        alignItems="flex-start"
        px={[2, 4, 6, 8]}
        fontFamily="Inter, sans-serif"
      >
        <Box mt="90px" width="80%" mx="auto">
          <Text
            height="120px"
            width="100%"
            color={primaryTextColor}
            textAlign="left"
            lineHeight="2"
            fontSize={["16px", "18px", "20px", "22px", "20px"]}
          >
            Your Gateway to Knowledge and <b>Support!</b> Whether youre here to
            read insightful <b>articles</b>, write and <b>post</b> your own
            experiences, or simply expand your knowledge, this guide will help
            you use our platform with ease. Our mission is to provide
            accessible, professional <b>information</b> to everyone. How can you
            make the most of ITLumox?
          </Text>
        </Box>

        <Box mt="180px" width="80%" mx="auto">
          <Heading
            mb="40px"
            textAlign="left"
            fontSize={30}
            fontWeight={150}
            color={primaryTextColor}
          >
            Getting Started
          </Heading>
          <Text
            textAlign="left"
            lineHeight="2"
            color={primaryTextColor}
            fontSize={["16px", "18px", "20px", "22px", "18px"]}
          >
            <b>ITLumox</b> is designed to be user-friendly and intuitive. Heres
            how you can get started:
            <br />
            <b>1. Sign Up:</b> Creating an account on <b>ITLumox</b> is simple.
            Click on the <b>Sign Up</b> button at the top right corner of the
            homepage, fill in your details, and youre ready to go.
            <br />
            <b>2. Profile Setup:</b> Once signed up, complete your profile. Add
            a photo, a brief bio, and any other relevant information. This helps
            others know more about you and your interests.
            <br />
            <b>3. Explore Content:</b> Use the search bar to find articles on
            topics that interest you. You can search for professional
            information, learning resources, and more.
          </Text>
        </Box>

        <Box mt="70px" width="80%" mx="auto">
          <Heading
            mb="40px"
            textAlign="left"
            color={primaryTextColor}
            fontWeight={150}
            fontSize={30}
          >
            Writing and Posting Articles
          </Heading>
          <Text textAlign="left" lineHeight="2" color={primaryTextColor}>
            Creating content on <b>ITLumox</b> is straightforward. Follow these
            steps to write and post your articles:
            <br />
            <b>1. Start Writing:</b> Click on the <b>Write</b> button on the
            homepage. This will take you to the article editor.
            <br />
            <b>2. Compose Your Article:</b> Use the editor to write your
            article. You can format your text, add images, and include links to
            make your article engaging.
            <br />
            <b>3. Add Keywords:</b> Keywords help your article get discovered.
            Include relevant terms such as information, learning, study, where
            to read, and others that match your content.
            <br />
            <b>4. Review and Publish:</b> Once youre satisfied with your
            article, click the <b>Publish</b> button. Your article will be live
            for everyone to read.
          </Text>
        </Box>

        <Box mt="110px" width="80%" mx="auto">
          <Heading
            mb="40px"
            textAlign="left"
            color={primaryTextColor}
            fontWeight={150}
            fontSize={30}
          >
            Finding and Reading Articles
          </Heading>
          <Text textAlign="left" lineHeight="2" color={primaryTextColor}>
            <b>ITLumox</b> offers a vast library of articles. Heres how to find
            what youre looking for:
            <br />
            <b>1. Search Function:</b> Use the search bar at the top of the
            page. Enter keywords or phrases related to your topic of interest.
            <br />
            <b>2. Categories:</b> Browse through different categories to
            discover articles. Categories include Technology, Science, Arts,
            Business, and more.
            <br />
            <b>3. Recommendations:</b> Based on your reading habits,{" "}
            <b>ITLumox</b> will suggest articles that might interest you. Check
            out the recommendations section on your homepage.
          </Text>
        </Box>

        <Box mt="70px" width="80%" mx="auto">
          <Heading
            mb="40px"
            textAlign="left"
            color={primaryTextColor}
            fontWeight={150}
            fontSize={30}
          >
            Engaging with Content
          </Heading>
          <Text textAlign="left" lineHeight="2" color={primaryTextColor}>
            Engaging with content on <b>ITLumox</b> is easy and rewarding:
            <br />
            <b>1. Commenting:</b> Share your thoughts on articles by leaving
            comments. This fosters discussion and allows you to connect with
            other readers and writers.
            <br />
            <b>2. Sharing:</b> Found an article you love? Share it on social
            media or with friends using the share button.
            <br />
            <b>3. Liking:</b> Show your appreciation for good content by
            clicking the Like button on articles.
          </Text>
        </Box>

        <Box mt="70px" width="80%" mx="auto">
          <Heading
            mb="40px"
            textAlign="left"
            color={primaryTextColor}
            fontWeight={150}
            fontSize={30}
          >
            Building a Following
          </Heading>
          <Text textAlign="left" lineHeight="2" color={primaryTextColor}>
            As a writer, building a following is key to your success on{" "}
            <b>ITLumox</b>. Heres how to do it:
            <br />
            <b>1. Consistency:</b> Post regularly to keep your readers engaged.
            <br />
            <b>2. Quality Content:</b> Focus on creating high-quality,
            informative articles. The better your content, the more likely you
            are to attract readers.
            <br />
            <b>3. Engage:</b> Respond to comments on your articles and engage
            with your readers. This builds a loyal audience.
          </Text>
        </Box>

        <Box mt="70px" width="80%" mx="auto">
          <Heading
            mb="40px"
            textAlign="left"
            color={primaryTextColor}
            fontWeight={150}
            fontSize={30}
          >
            Useful Features
          </Heading>
          <Text textAlign="left" lineHeight="2" color={primaryTextColor}>
            <b>ITLumox</b> offers several features to enhance your experience:
            <br />
            <b>1. Drafts:</b> Save your articles as drafts and come back to them
            later.
            <br />
            <b>2. Notifications:</b> Stay updated with notifications for
            comments, likes, and new articles from your favorite writers.
            <br />
            <b>3. Bookmarking:</b> Bookmark articles to read later.
          </Text>
        </Box>

        <Box mt="70px" width="80%" mx="auto">
          <Heading
            mb="40px"
            textAlign="left"
            color={primaryTextColor}
            fontWeight={150}
            fontSize={30}
          >
            Support and Assistance
          </Heading>
          <Text textAlign="left" lineHeight="2" color={primaryTextColor}>
            Need help? <b>ITLumox</b> offers various support options:
            <br />
            <b>1. Help Center:</b> Visit our Help Center for FAQs and guides.
            <br />
            <b>2. Contact Us:</b> Reach out to our support team through the
            Contact Us page for personalized assistance.
          </Text>
        </Box>
      </Flex>

      <Box mt="70px" width="80%" mx="auto">
        <Text
          height="80px"
          width="100%"
          color={primaryTextColor}
          textAlign="center"
          lineHeight="2"
        >
          Thank you for being a part of the <b>ITLumox</b> community. We are
          excited to have you on board and look forward to your contributions.
        </Text>
      </Box>

      <ScrollToTopButton />
      <Footer />
    </Box>
  );
}

export default HelpForm;
