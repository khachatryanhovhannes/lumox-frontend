"use client";
import { PrimaryTextColors, SecondaryTextColors } from "@/models";
import { Box, Flex, Heading, Text, useColorModeValue } from "@chakra-ui/react";
import { Inter } from "next/font/google";
import Search from "../search";
import Link from "next/link";
import ScrollToTopButton from "@/constants/scrool";
const inter = Inter({ subsets: ["latin"] });

function HelpForm() {
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

  return (
    <Box textAlign="center">
      <Heading
        fontFamily="Lateef"
        color={primaryTextColors}
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
        color={secondaryTextColors}
        mt={["15px", "20px", "25px", "30px", "12px"]}
      >
        Join the millions learning to code with Lumox for free{" "}
      </Text>
      <Box mt="20px">
        <Search />
      </Box>
      <Flex direction="column" alignItems="flex-start">
        <Box mt="70px" ml={["10px", "50px", "100px", "150px", "250px"]}>
          <Text
            height="120px"
            width="100%"
            color={primaryTextColors}
            textAlign="left"
            lineHeight="2"
            fontFamily="Inter, sans-serif"
            fontSize={["16px", "18px", "20px", "22px", "16px"]}
          >
            Your Gateway to Knowledge and <b>Support!</b> Whether youre here to
            read insightful <b>articles, write</b> and <b>post</b> your own
            experiences, or simply expand <br /> your knowledge, this guide
            will,
            <b>help</b> you to use our platform with ease. Our mission is to
            provide accessible, professional <b>information</b> to everyone
            <br />
            How can you make the most of ITLumox?
          </Text>
        </Box>

        <Box mt="40px" ml={["10px", "50px", "100px", "150px", "250px"]}>
          <Heading
            height="50px"
            width="650px"
            mb="10px"
            textAlign="left"
            fontSize={20}
            fontWeight={150}
            color={primaryTextColors}
          >
            Getting Started{" "}
          </Heading>
          <Text
            height="120px"
            width="100%"
            textAlign="left"
            lineHeight="2"
            color={primaryTextColors}
            fontFamily="Inter, sans-serif"
            fontSize={["16px", "18px", "20px", "22px", "16px"]}
          >
            <b>ITLumox</b> is designed to be user-friendly and intuitive. Heres
            how you <b>can get started:</b> <br />
            <b>1. Sign Up:</b> Creating an account on <b>ITLumox</b> is simple.
            Click on the <b> Sign Up:</b> button at the top right corner of the
            <b>homepage,</b> fill in your details, and <br /> youre ready to go.
            <br />
            <b>2.Profile Setup:</b> Once signed up, complete your profile. Add a
            photo, a brief bio, and any other relevant information. This helps
            others know more <br /> about you and your interest
            <br />
            <b>3.Explore Content:</b> Use the search bar to find articles on
            topics that interest you. You can search for{" "}
            <b>
              professional information, learning <br /> resources,
            </b>
            and more
          </Text>
        </Box>

        <Box mt="170px" ml={["10px", "50px", "100px", "150px", "250px"]}>
          <Heading
            height="50px"
            width="650px"
            mb="20px"
            textAlign="left"
            color={primaryTextColors}
            fontWeight={150}
            fontSize={20}
          >
            Writing and Posting Articles{" "}
          </Heading>
          <Text
            height="120px"
            width="100%px"
            textAlign="left"
            lineHeight="2"
            color={primaryTextColors}
          >
            Creating content on <b>ITLumox</b> is straightforward. Follow these
            steps to <b>write</b> and post your <b>articles</b>.
            <br />
            <b>1. Start Writing:</b> Click on the <b>Write</b> button on the
            <b> homepage. </b> This will take you to the article editor <br />
            <b>2.Compose Your Article:</b> Use the <b>editor</b> to <b>write</b>
            your <b>article. </b>You can format your text, add images, and
            include links to make your <b>article</b> engaging <br />
            <b>3.Add Keywords:</b> Keywords help your <b>article</b> get
            discovered. Include relevant terms such as
            <b>information, learning, study, where to read</b>, and <br />
            others that match your content <br />
            <b>4. Review and Publish:</b> Once youre satisfied with your
            <b>article,</b> click the <b>Publish</b> button. Your <b>article</b>{" "}
            will be live for everyone to read.
          </Text>
        </Box>

        <Box mt="150px" ml={["10px", "50px", "100px", "150px", "250px"]}>
          <Heading
            height="50px"
            width="650px"
            mb="10px"
            textAlign="left"
            color={primaryTextColors}
            fontWeight={150}
            fontSize={20}
          >
            Finding and Reading Articles
          </Heading>
          <Text
            height="120px"
            width="100%"
            textAlign="left"
            lineHeight="2"
            color={primaryTextColors}
          >
            <b>ITLumox</b> offers a vast library of <b>articles.</b> Heres how
            to find what youre looking for: <br />
            <b>1. Search Function:</b> Use the <b>search bar</b> at the top of
            the page. Enter keywords or phrases related to your topic of
            interest
            <br /> <b>2. Categories:</b> Browse through different{" "}
            <b>categories</b> to discover <b>articles. Categories</b> include
            <b>Technology, Science, Arts, Business,</b> and more <br />
            <b>3. Recommendations:</b> Based on your reading habits,{" "}
            <b>ITLumox</b>
            will suggest articles that might interest you. Check out the
            <b>recommendations</b> <br /> section on your <b>homepage.</b>
          </Text>
        </Box>

        <Box mt="70px" ml={["10px", "50px", "100px", "150px", "250px"]}>
          <Heading
            height="50px"
            width="650px"
            mb="10px"
            color={primaryTextColors}
            textAlign="left"
            fontWeight={150}
            fontSize={20}
          >
            Engaging with Content{" "}
          </Heading>
          <Text
            height="120px"
            width="100%"
            textAlign="left"
            lineHeight="2"
            color={primaryTextColors}
          >
            Engaging with content on <b>ITLumox</b> is easy and rewarding:{" "}
            <br />
            <b>1. Commenting:</b> Share your thoughts on <b>articles</b> by
            leaving comments. This fosters discussion and allows you to connect
            with other readers and <br /> writers. <br /> <b>2. Sharing:</b>{" "}
            Found an article you love? <b>Share it </b>on social media or with
            friends using the <b>share</b> button. <br />
            <b> 3. Liking:</b> Show your appreciation for good content by
            clicking the <b>Like</b> button on <b>articles.</b>
          </Text>
        </Box>

        <Box mt="70px" ml={["10px", "50px", "100px", "150px", "250px"]}>
          <Heading
            height="50px"
            width="650px"
            mb="10px"
            color={primaryTextColors}
            textAlign="left"
            fontWeight={150}
            fontSize={20}
          >
            Building a Following
          </Heading>
          <Text
            height="120px"
            width="100%"
            textAlign="left"
            lineHeight="2"
            color={primaryTextColors}
          >
            As a writer, building a following is key to your success on{" "}
            <b>ITLumox.</b>
            Heres how to do it: <br />
            <b>1. Consistency: PostPost</b> regularly to keep your readers
            engaged. <br /> <b>2. Quality Content:</b> Focus on creating
            high-quality, <b>informative articles.</b> The better your content,
            the more likely you are to attract readers. <br />
            <b>3. Engage:</b> Respond to comments on your <b>articles</b> and
            engage with your readers. This builds a loyal audience.
          </Text>
        </Box>

        <Box mt="70px" ml={["10px", "50px", "100px", "150px", "250px"]}>
          <Heading
            height="50px"
            width="650px"
            mb="10px"
            color={primaryTextColors}
            textAlign="left"
            fontWeight={150}
            fontSize={20}
          >
            Useful Features
          </Heading>
          <Text
            height="120px"
            width="100%"
            textAlign="left"
            lineHeight="2"
            color={primaryTextColors}
          >
            <b>ITLumox</b> offers several features to enhance your experience:{" "}
            <br />
            <b>1. Drafts:</b> Save your work-in-progress <b>articles</b> as
            <b> drafts.</b> You can return to them anytime to continue{" "}
            <b>writing.</b> <br /> <b>2.Bookmarks:</b> Bookmark <b>articles</b>{" "}
            to read later. You can access your bookmarks from{" "}
            <b>your profile.</b> <br />
            3. <b>Analytics:</b> View analytics on your <b>articles</b> to see
            how many people have read them, liked them, and commented on them.
          </Text>
        </Box>
        <Box mt="70px" ml={["10px", "50px", "100px", "150px", "250px"]}>
          <Heading
            height="50px"
            width="650px"
            mb="10px"
            color={primaryTextColors}
            textAlign="left"
            fontWeight={150}
            fontSize={20}
          >
            Frequently Asked Questions (FAQs){" "}
          </Heading>
          <Text
            height="120px"
            width="100%"
            textAlign="left"
            lineHeight="2"
            color={primaryTextColors}
          >
            <b>1. How do I create an account?</b> <br />
            To create an account, click on the <b>Sign Up</b> button at the top
            right corner and follow the <b>instructions. </b>
            <br />
            <b>2. Can I edit my articles after publishing? </b>
            <br />
            Yes, you can edit your articles even after publishing. Go to{" "}
            <b>your profile,</b> find the <b>article,</b> and click <b>Edit.</b>
            <br />
            <b>3. How do I report inappropriate content?</b>
            <br />
            If you come across any inappropriate content, click on the{" "}
            <b>Report</b>
            button located on the <b>article</b> or comment.
          </Text>
        </Box>

        <Box mt="140px" ml={["10px", "50px", "100px", "150px", "250px"]}>
          <Heading
            height="50px"
            width="650px"
            mb="10px"
            textAlign="left"
            color={primaryTextColors}
            fontWeight={150}
            fontSize={20}
          >
            Contact Us
          </Heading>
          <Text
            height="120px"
            width="100%"
            textAlign="left"
            lineHeight="2"
            color={primaryTextColors}
          >
            If you have any questions or need further assistance, feel free to
            contact our support team. You can reach us via email at
            <b>support@itlumox.com</b> <br /> or through the contact form on our
            website.
            <br />
            <b>Community Guidelines</b>
            <br />
            To ensure a positive and respectful environment, please adhere to
            our <b>community guidelines:</b> <br />- Respect others’ opinions
            and perspectives. <br /> - Avoid using offensive language or
            engaging in personal attacks. <br /> - Provide constructive feedback
            and engage in healthy discussions.
          </Text>
        </Box>
        <Box mt="140px" ml={["10px", "50px", "100px", "150px", "250px"]}>
          <Heading
            height="50px"
            width="650px"
            mb="10px"
            color={primaryTextColors}
            textAlign="left"
            fontWeight={150}
            fontSize={20}
          >
            Best Practices for Writers{" "}
          </Heading>
          <Text
            height="120px"
            width="100%"
            textAlign="left"
            lineHeight="2"
            color={primaryTextColors}
          >
            To make your <b>articles</b> stand out, consider these best
            practices:
            <br /> 1. Original Content: Ensure your articles are original and
            not copied from other sources. This builds credibility and trust
            with your readers.
            <br />
            2. Engaging Titles: Create compelling and clear titles that attract
            readers attention. <br />
            3. Clear Structure: Use headings, subheadings, and bullet points to
            make your <b>articles</b> easy to read. <br />
            4.Visuals: Include relevant images, graphs, or videos to enhance
            your <b>articles.</b>
            <br /> 5. References: Cite your sources when necessary to add
            authenticity to your work.
          </Text>
        </Box>
        <Box mt="140px" ml={["10px", "50px", "100px", "150px", "250px"]}>
          <Heading
            height="50px"
            width="650px"
            mb="10px"
            textAlign="left"
            color={primaryTextColors}
            fontWeight={150}
            fontSize={20}
          >
            Benefits of Using ITLumox
          </Heading>
          <Text
            height="120px"
            width="100%"
            textAlign="left"
            lineHeight="2"
            color={primaryTextColors}
          >
            <b>ITLumox</b> is not just another platform; its a community of
            knowledge seekers and sharers. Here are some benefits:
            <br />
            1. Accessibility: Access a wide range of professional{" "}
            <b>information.</b>
            <br />
            2. Community: Connect with like-minded individuals and experts.{" "}
            <br />
            3. Growth: Enhance your learning and expand your knowledge base.{" "}
            <br />
            4. Impact: Share your insights and experiences to help others.
          </Text>
        </Box>
        <Box mt="100px" ml={["10px", "50px", "100px", "150px", "250px"]}>
          <Heading
            height="50px"
            width="650px"
            mb="10px"
            textAlign="left"
            color={primaryTextColors}
            fontWeight={350}
            fontSize={30}
          >
            Happy learning and sharing on ITLumox!{" "}
          </Heading>
        </Box>
      </Flex>

      <Flex
        justifyContent="flex-end"
        pt={20}
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

export default HelpForm;
