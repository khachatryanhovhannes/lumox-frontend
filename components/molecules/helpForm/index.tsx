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
        color={secondaryTextColor}
        fontSize={["30px", "35px", "40px", "45px", "80px"]}
        fontWeight="normal"
        mt={["20px", "25px", "30px", "35px", "40px"]}
        lineHeight={["1", "0.9", "0.8", "0.7", "1.3"]}
      >
        How can we help?{" "}
      </Heading>

      <Text
        className={inter.className}
        fontSize={["16px", "18px", "20px", "22px", "24px"]}
        fontWeight="100"
        lineHeight={["1.2", "1.3", "1.4", "1.5", "0.001"]}
        color={secondaryTextColor}
        mt={["15px", "20px", "25px", "30px", "15px"]}
      >
        Join the millions learning to code with Lumox for free{" "}
      </Text>
      <Box mt="40px">
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
            height="auto"
            width="100%"
            textAlign="left"
            lineHeight="2"
            color={primaryTextColor}
            fontFamily="Inter, sans-serif"
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

        <Box mt="80px" width="80%" mx="auto">
          <Heading
            height="auto"
            width="100%"
            mb="50px"
            textAlign="left"
            fontSize={["20px", "22px", "24px", "26px", "22px"]}
            color={primaryTextColor}
          >
            Getting Started
          </Heading>
          <Text
            height="auto"
            width="100%"
            textAlign="left"
            lineHeight="2"
            color={primaryTextColor}
            fontFamily="Inter, sans-serif"
            fontSize={["16px", "18px", "20px", "22px", "20px"]}
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
            height="auto"
            width="100%"
            mb="50px"
            textAlign="left"
            fontSize={["20px", "22px", "24px", "26px", "22px"]}
            color={primaryTextColor}
          >
            Writing and Posting Articles
          </Heading>
          <Text
            height="auto"
            width="100%"
            textAlign="left"
            lineHeight="2"
            color={primaryTextColor}
            fontFamily="Inter, sans-serif"
            fontSize={["16px", "18px", "20px", "22px", "20px"]}
          >
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
            height="auto"
            width="100%"
            mb="50px"
            textAlign="left"
            fontSize={["20px", "22px", "24px", "26px", "22px"]}
            color={primaryTextColor}
          >
            Finding and Reading Articles
          </Heading>
          <Text
            height="auto"
            width="100%"
            textAlign="left"
            lineHeight="2"
            color={primaryTextColor}
            fontFamily="Inter, sans-serif"
            fontSize={["16px", "18px", "20px", "22px", "20px"]}
          >
            {" "}
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
            height="auto"
            width="100%"
            mb="50px"
            textAlign="left"
            fontSize={["20px", "22px", "24px", "26px", "22px"]}
            color={primaryTextColor}
          >
            Engaging with Content
          </Heading>
          <Text
            height="auto"
            width="100%"
            textAlign="left"
            lineHeight="2"
            color={primaryTextColor}
            fontFamily="Inter, sans-serif"
            fontSize={["16px", "18px", "20px", "22px", "20px"]}
          >
            {" "}
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
            height="auto"
            width="100%"
            mb="50px"
            textAlign="left"
            fontSize={["20px", "22px", "24px", "26px", "22px"]}
            color={primaryTextColor}
          >
            Building a Following
          </Heading>
          <Text
            height="auto"
            width="100%"
            textAlign="left"
            lineHeight="2"
            color={primaryTextColor}
            fontFamily="Inter, sans-serif"
            fontSize={["16px", "18px", "20px", "22px", "20px"]}
          >
            {" "}
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
            height="auto"
            width="100%"
            mb="50px"
            textAlign="left"
            fontSize={["20px", "22px", "24px", "26px", "22px"]}
            color={primaryTextColor}
          >
            Useful Features
          </Heading>
          <Text
            height="auto"
            width="100%"
            textAlign="left"
            lineHeight="2"
            color={primaryTextColor}
            fontFamily="Inter, sans-serif"
            fontSize={["16px", "18px", "20px", "22px", "20px"]}
          >
            {" "}
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
            height="auto"
            width="100%"
            mb="50px"
            textAlign="left"
            fontSize={["20px", "22px", "24px", "26px", "22px"]}
            color={primaryTextColor}
          >
            Frequently Asked Questions (FAQs){" "}
          </Heading>
          <Text textAlign="left" lineHeight="2" color={primaryTextColor}>
            1. How do I create an account? <br />
            To create an account, click on the Sign Up button at the top right
            corner and follow the instructions. 2. Can I edit my articles after
            publishing? <br />
            Yes, you can edit your articles even after publishing. Go to your
            profile, find the article, and click Edit. <br /> 3. How do I report
            inappropriate content? <br />
            If you come across any inappropriate content, click on the Report
            button located on the article or comment.
          </Text>
        </Box>
        <Box mt="70px" width="80%" mx="auto">
          <Heading
            height="auto"
            width="100%"
            mb="50px"
            textAlign="left"
            fontSize={["20px", "22px", "24px", "26px", "22px"]}
            color={primaryTextColor}
          >
            Contact Us{" "}
          </Heading>
          <Text textAlign="left" lineHeight="2" color={primaryTextColor}>
            If you have any questions or need further assistance, feel free to
            contact our support team. You can reach us via email at
            support@itlumox.com or <br /> Community Guidelines <br />
            To ensure a positive and respectful environment, please adhere to
            our community guidelines: <br />
            - Respect others’ opinions and perspectives. <br /> - Avoid using
            offensive language or engaging in personal attacks. <br />- Provide
            constructive feedback and engage in healthy discussions.
          </Text>
        </Box>
        <Box mt="70px" width="80%" mx="auto">
          <Heading
            height="auto"
            width="100%"
            mb="50px"
            textAlign="left"
            fontSize={["20px", "22px", "24px", "26px", "22px"]}
            color={primaryTextColor}
          >
            Best Practices for Writers{" "}
          </Heading>
          <Text textAlign="left" lineHeight="2" color={primaryTextColor}>
            To make your articles stand out, consider these best practices:{" "}
            <br /> 1. Original Content: Ensure your articles are original and
            not copied from other sources. This builds credibility and trust
            with your readers. <br />
            2. Engaging Titles: Create compelling and clear titles that attract
            readers’ attention. <br />
            3. Clear Structure: Use headings, subheadings, and bullet points to
            make your articles easy to read. <br /> 4.Visuals: Include relevant
            images, graphs, or videos to enhance your articles. <br />
            5. References: Cite your sources when necessary to add authenticity
            to your work.
          </Text>
        </Box>
        <Box mt="70px" width="80%" mx="auto">
          <Heading
            height="auto"
            width="100%"
            mb="50px"
            textAlign="left"
            fontSize={["20px", "22px", "24px", "26px", "22px"]}
            color={primaryTextColor}
          >
            Benefits of Using ITLumox{" "}
          </Heading>
          <Text textAlign="left" lineHeight="2" color={primaryTextColor}>
            ITLumox is not just another platform; it’s a community of knowledge
            seekers and sharers. Here are some benefits: <br /> 1.
            Accessibility: Access a wide range of professional information.{" "}
            <br />
            2. Community: Connect with like-minded individuals and experts.{" "}
            <br />
            3. Growth: Enhance your learning and expand your knowledge base.{" "}
            <br />
            4. Impact: Share your insights and experiences to help others.
          </Text>
        </Box>
      </Flex>

      <Box mt="70px" width="80%" mx="auto" ml={170}>
        <Text
          height="auto"
          width="100%"
          textAlign="left"
          lineHeight="2"
          color={primaryTextColor}
          fontFamily="Inter, sans-serif"
          fontSize={["16px", "18px", "20px", "22px", "20px"]}
        >
          Happy learning and sharing on Lumoox!
        </Text>
      </Box>

      <ScrollToTopButton />
      <Footer />
    </Box>
  );
}

export default HelpForm;
