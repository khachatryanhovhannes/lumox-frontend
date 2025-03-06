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
        HELP
      </Heading>

      <Text
        className={inter.className}
        fontSize={["16px", "18px", "20px", "22px", "24px"]}
        fontWeight="100"
        lineHeight={["1.2", "1.3", "1.4", "1.5", "0.001"]}
        color={secondaryTextColor}
        mt={["15px", "20px", "25px", "30px", "15px"]}
      >
        Welcome to Lumoox Help Center!{" "}
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
            Your Gateway to Knowledge and Support! Whether you’re here to read
            insightful articles, write and post your own experiences, or simply
            expand your knowledge, this guide will help you to use our platform
            with ease. Our mission is to provide accessible, professional
            information to everyone.
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
            <b>Lumoox</b> is designed to be user-friendly and intuitive. Here’s
            how you can get started:
            <br />
            <b>1. Sign Up:</b> Creating an account on <b>Lumoox</b> Click on the
            Sign Up button at the top right corner of the <b>homepage</b>, fill
            in your details, and you’re ready to go.
            <br />
            <b>2. Profile Setup:</b> Once signed up, complete your profile. Add
            a photo, a brief bio, and any other relevant information. This helps
            others know more about you and your interests.
            <br />
            <b>3. Explore Content:</b> Use the <b>search bar</b> to{" "}
            <b>find articles</b> on topics that interest you. You can search for
            <b>professional information, learning resources,</b> and more.
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
            Creating content on <b>Lumoox</b> is straightforward. Follow these
            steps to <b>write</b> and post your <b>articles</b>.
            <br />
            <b>1. Start Writing:</b> Click on the <b>Write</b> button on the
            homepage. This will take you to the <b>article editor.</b>
            <br />
            <b>2. Compose Your Article:</b> Use the <b>editor</b> to{" "}
            <b>write</b> your <b>article</b>. You can format your text, add
            images, and include links to make your <b>article</b> engaging.
            <br />
            <b>3. Add Keywords:</b> Keywords help your <b>article</b> get
            discovered. Include relevant terms such asb
            <b> information, learning, study</b>, and others that match your
            content.
            <br />
            <b>4. Review and Publish:</b> Once youre satisfied with your
            article, click the <b>Publish</b> button. Your <b>article</b> will
            be live for everyone to read.
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
            Here’s how to find what you’re looking for:
            <br />
            <b>1. Search Function:</b> Use the <b>search bar</b> at the top of
            the page. Enter keywords or phrases related to your topic of
            interest.
            <br />
            <b>2. Categories:</b>Categories: Browse through different categories
            to discover <b>articles</b>. Categories include{" "}
            <b>Technology, Science, Arts, Business</b>, and more.
            <br />
            <b>3. Recommendations:</b> : Based on your reading habits, Lumoox
            will suggest articles that might interest you. Check out the <br />
            <b>recommendations</b> section on your <b>homepage</b>.
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
            <b>1. Commenting:</b> Share your thoughts on <b>articles</b> by
            leaving comments. This fosters discussion and allows you to connect
            with other readers and writers.
            <br />
            <b>2. Sharing:</b> Found an <b>article</b> you love? <b>Share</b> it
            on social media or with friends using the <b>share</b> button.
            <br />
            <b>3. Liking:</b> Show your appreciation for good content by
            clicking the <b>Like</b> button on <b>articles</b>.
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
            <b>Lumoox</b>. Heres how to do it:
            <br />
            <b>1. Consistency:</b> <b>Post</b> regularly to keep your readers
            engaged.
            <br />
            <b>2. Quality Content:</b> Focus on creating high-quality,
            <b> informative articles</b>. The better your content, the more
            likely you are to attract readers.
            <br />
            <b>3. Engage:</b> Respond to comments on your <b>articles</b> and
            engage with your readers. This builds a loyal audience.
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
            <b>Lumoox</b> offers several features to enhance your experience:
            <br />
            <b>1. Drafts:</b> Save your work-in-progress <b>articles</b> as{" "}
            <b>drafts</b>. You can return to them anytime to continue{" "}
            <b>writing</b>.
            <br />
            <b>2. Bookmarks:</b> Bookmark <b>articles</b> to read later. You can
            access your bookmarks from <b>your profile</b>.
            <br />
            <b>3. Analytics:</b>View analytics on your <b>articles</b> to see
            how many people have <b>read , liked</b> , and commented on them.
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
          <Text
            textAlign="left"
            lineHeight="2"
            color={primaryTextColor}
            fontSize={["16px", "18px", "20px", "22px", "20px"]}
          >
            1. <b>How do I create an account?</b> <br />
            To create an account, click on the <b>Sign Up</b> button at the top
            right corner and follow the <b>instructions</b>. <br />
            2.{" "}
            <b>
              Can I edit my <b>articles</b> after publishing?
            </b>{" "}
            <br />
            Yes, you can edit your <b>articles</b> even after publishing. Go to
            <b> your profile</b>, find the <b>article</b>, and click <b>Edit</b>
            <br />
            <b>3. How do I report inappropriate content?</b>. <br />
            If you come across any inappropriate content, click on the{" "}
            <b>Report</b>
            <br />
            button located on the <b>article</b> or comment.
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
          <Text
            textAlign="left"
            lineHeight="2"
            color={primaryTextColor}
            fontSize={["16px", "18px", "20px", "22px", "20px"]}
          >
            If you have any questions or need further assistance, feel free to
            contact our <b>support</b> team. You can reach us <b>via email</b>{" "}
            at <br />
            <b>support@lumoox.coms</b> or through the contact form on our
            website. <br /> Community Guidelines <br />
            To ensure a positive and respectful environment, please adhere to
            our <b>community guidelines: </b>
            <br />- Respect others’ opinions and perspectives. <br />- Avoid
            using offensive language or engaging in personal attacks. <br />-
            Provide constructive feedback and engage in healthy discussions.
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
          <Text
            textAlign="left"
            lineHeight="2"
            color={primaryTextColor}
            fontSize={["16px", "18px", "20px", "22px", "20px"]}
          >
            To make your <b>articles</b> stand out, consider these best
            practices: <br /> 1. Original Content: Ensure your <b>articles</b>{" "}
            are original and not copied from other sources. This builds
            credibility and trust with your readers. <br />
            2. Engaging Titles: Create compelling and clear titles that attract
            readers’ attention. <br />
            3. Clear Structure: Use headings, subheadings, and bullet points to
            make your <b>articles</b> easy to read. <br /> 4.Visuals: Include
            relevant images, graphs, or videos to enhance your <b>articles</b>.{" "}
            <br />
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
          <Text
            textAlign="left"
            lineHeight="2"
            color={primaryTextColor}
            fontSize={["16px", "18px", "20px", "22px", "20px"]}
          >
            1.Accessibility: Access a wide range of professional{" "}
            <b>information</b>. <br /> 2. Community: Connect with like-minded
            individuals and experts. <br />
            3. Growth: Enhance your learning and expand your knowledge base.{" "}
            <br />
            4. Impact: Share your insights and experiences to help others.{" "}
            <br />
            <br /> <b>Happy learning and sharing on Lumoox!</b>
          </Text>
        </Box>
      </Flex>

      <ScrollToTopButton />
      <Footer />
    </Box>
  );
}

export default HelpForm;
