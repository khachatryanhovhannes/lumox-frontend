"use client";
import { PrimaryTextColors, SecondaryTextColors } from "@/models";
import { Box, Flex, Heading, Text, useColorModeValue } from "@chakra-ui/react";
import { Inter } from "next/font/google";
import Search from "../search";
import Link from "next/link";
import ScrollToTopButton from "@/constants/scrool";
import Footer from "../Footer/footer";
const inter = Inter({ subsets: ["latin"] });

function PolicyForm() {
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
        Privacy Policy of Lumoox.{" "}
      </Heading>
      <Text
        className={inter.className}
        fontSize={["16px", "18px", "20px", "22px", "25px"]}
        fontWeight="100"
        lineHeight={["1.2", "1.3", "1.4", "1.5", "1.6"]}
        color={secondaryTextColors}
        mt={["15px", "20px", "25px", "30px", "12px"]}
      >
        You can see our previous Privacy Policy here.{" "}
      </Text>
      <Box mt="20px">
        <Search />
      </Box>
      <Flex
        direction="column"
        alignItems="flex-start"
        // fontFamily="Inter, sans-serif"
      >
        <Box mt="70px" ml={["10px", "50px", "100px", "150px", "250px"]}>
          <Text
            height="120px"
            width="100%"
            color={primaryTextColors}
            textAlign="left"
            mb="50px"
            lineHeight="2"
            fontFamily="Inter, sans-serif"
            fontSize={["16px", "18px", "20px", "22px", "16px"]}
          >
            <b>Welcome to Lumoox!</b>
            <br />
            At Lumoox ,your trust is our best estimate. This Privacy Policy
            outlines how we collect, use, and protect your personal information
            when you <br />
            use our website and services. By using our platform, you agree to
            the terms of this Privacy Policy. Therefore, we encourage you to
            read it <br /> carefully. <br />
            If you have any questions, please contact us using the details
            provided in the Contact Us section below. <br /> Definitions
          </Text>
        </Box>

        <Box mt="40px" ml={["10px", "50px", "100px", "150px", "250px"]}>
          <Text
            height="120px"
            width="100%"
            textAlign="left"
            lineHeight="2"
            mb="130px"
            color={primaryTextColors}
            fontFamily="Inter, sans-serif"
            fontSize={["16px", "18px", "20px", "22px", "16px"]}
          >
            .     <b>Personal Data:</b> Information that can be used to identify
            you directly or indirectly, including your name, email address, IP
            address, and <br /> browsing history. <br />
            .     <b>Non-Personal Data:</b>Information that cannot be used to
            identify an individual, including anonymous usage data, general
            demographic <br /> information, and other non-identifiable
            information. <br />
            .     <b>Cookies</b> Small files stored on your device (computer or
            mobile device).
            <br />
            .     <b>Data Controller:</b> The entity that determines the
            purposes, conditions, and means of the processing of personal data.{" "}
            <br />
            .     <b> User:</b> Any individual who uses our service and is
            subject to this Privacy Policy. <br /> <br />{" "}
            <b>This Privacy Policy covers:</b>
            <br />
            .    The collection, use, and management of personal data by{" "}
            <b>Lumoox.</b> <br />
            .    The types of information we gather from users and how we obtain
            it. <br />
            .    The methods we use to safeguard user information.
          </Text>
        </Box>

        <Box mt="170px" ml={["10px", "50px", "100px", "150px", "250px"]}>
          <Text
            height="120px"
            width="100%px"
            textAlign="left"
            mb="90px"
            lineHeight="2"
            color={primaryTextColors}
          >
            <b>Types of Information We Receive From You and How We Get It </b>
            Information You Provide Directly
            <br />
            When you create an account, submit articles, comment on content, or
            contact us for support, you provide us with personal data. This may{" "}
            <br />
            include: <br />
            .    <b> Account Information:</b> When you register, we collect your
            name, email address, and password. <br />
            .    <b> Profile Information:</b>You may choose to provide
            additional information such as a profile picture, biography, and
            social media links <br />
            .    <b> Content</b> Any articles, comments, and other content you
            post on Lumoox <br />
            <br />
            <b>Information We Receive Automatically</b> <br />
            <br />
            When you use <b>Lumoox</b> we automatically collect certain
            information, including: <br />
            <br />
            .    <b>Device Information:</b>Information about the device you use
            to access our platform, such as IP address, browser type, and
            operating <br /> system. <br />
            .    <b>Usage Data:</b> Information about how you interact with our
            platform, including pages viewed, links clicked, and time spent on
            the site <br />
            .    <b>Cookies: </b>We use cookies to enhance your experience on
            our platform. Cookies help us understand user behavior and improve
            our <br /> services. <br />
            <br /> <b>How We Use Your Information</b> <br />
            <br />
            We use the information we collect for various purposes, including:{" "}
            <br />
            <br />
            .    <b>Providing and Improving Our Services:</b>To operate and
            maintain our platform, including personalized content and
            recommendations. <br />
            .    <b>Communication:</b>To send you updates, newsletters, and
            other communications related to Lumoox. You can opt-out of these{" "}
            <br /> communications at any time. <br />
            .    <b>Analytics and Research:</b>To analyze user behavior and
            trends to improve our services and develop new features <br />
            .    <b>Security</b>To protect our platform and users from fraud,
            abuse, and other harmful activities. <br />
            <br /> <b>Information Sharing and Disclosure</b>
            <br />
            <br />
            We do not transfer your personal data without your consent, except
            in the following circumstances: <br />
            .    <b>Service Providers:</b>We may share your information with
            service providers who assist us in operating our platform and
            conducting our <br /> business..    <b> Legal Requirements</b>We may
            disclose your information if required to do so by law or in response
            to valid requests by public authorities. <br />
            <br /> <b>How We Protect Your Information</b>
            <br />
            <br />
            We implement a variety of security measures to maintain the safety
            of your personal data: <br />
            .    <b>Encryption:</b>We use encryption to protect sensitive
            information transmitted online <br />
            .    <b>Access Controls</b>We restrict access to personal data to
            authorized personnel only. <br /> .   <b> Security Audits:</b> We
            regularly review our security practices and update them as necessary
            to protect against unauthorized access. <br />
            <br />
            <b>Your Rights and Choices</b>
            <br />
            <br />
            Depending on your location, you may have certain rights regarding
            your personal data, including: <br /> .   <b> Access</b>The right to
            request access to the personal data we hold about you. <br />
            .    <b>Correction:</b>The right to request the correction of
            inaccurate personal data. <br />
            .    <b>Deletion:</b>
            <br /> .   <b> Restriction:</b>The right to request the restriction
            of processing your personal data. <br />
            <br />
            To exercise these rights, please contact us at
            <b> [contact@itlumox.com](mailto:contact@itlumox.com).</b>
            <br />
            <br />
            <b>Cookies</b> <br />
            <br />
            Lumoox uses cookies to enhance your experience on our platform.
            Cookies allow us to: <br />
            .    <b>Recognize and Remember:</b>Identify and remember your
            preferences and settings. <br />
            .    <b>Analyze and Improve:</b>Understand user behavior and improve
            our services. <br />
            <br />
            <b> Changes to This Privacy Policy</b>
            <br />
            <br />
            We may update this <b>Privacy Policy</b> from time to time to
            reflect changes in our practices or applicable laws. When we make
            changes, we will <br /> notify you by updating the date at the top
            of this
            <b>Privacy Policy</b> and, if the changes are significant, by
            providing a more prominent notice <br />
            <br />
            <b>Information We Collect</b> <br />
            <br />
            At <b>Lumoox,</b> we collect various types of personal information
            to provide and improve our services. The information we gather
            includes: <br />
            <br />
            .    <b>Personal Identification Information: </b>Such as your name,
            email address, and contact details. <br /> .    <b>Usage Data:</b>
            Information on how you interact with our site, including pages
            visited, time spent on pages, and other engagement <br /> metrics.{" "}
            <br />
            .    <b>Usage Data:</b>Information on how you interact with our
            site, including pages visited, time spent on pages, and other
            engagement <br /> metrics. <br />
            .    <b>Technical Data:</b>Your IP address, browser type, operating
            system, and other technical information that helps us ensure the
            functionality <br /> and security of our site. <br />
            .    <b>Content Data:</b> Any information you provide through
            articles, comments, or other content contributions. <br />
            <br />
            <b>How We Use Information We Receive from You</b>
            <br />
            <br />
            <br />
            We use the information we collect for several purposes, including:{" "}
            <br />
            .   <b> Providing Services:</b>To deliver the content and services
            you request, including access to articles, newsletters, and other
            resources. <br /> .    <b>Communication:</b>To send you updates,
            promotional materials, and other information related to Lumoox.{" "}
            <br />
            .    <b>Security:</b>To protect our site and users from malicious
            activities and to ensure compliance with our terms and policies{" "}
            <br />
            <br />
            <b>How Do We Protect Your Personal Information</b>
            <br />
            <br />
            We implement a variety of security measures to protect your personal
            information, including: <br />
            .   <b> Encryption</b>We use secure encryption methods to protect
            your data during transmission and storage. <br />
            .    <b>Access Controls:</b>We restrict access to personal data to
            authorized personnel only, who are bound by confidentiality
            obligations. <br />
            .    <b>Regular Security Audits:</b>We conduct regular security
            audits to identify and mitigate potential vulnerabilities. <br />
            <br />
            <b>How Long Do We Keep Your Data</b> <br />
            <br />
            We retain your personal information for as long as necessary to
            fulfill the purposes outlined in this <b> privacy policy</b> unless
            a longer retention <br /> period is required or permitted by law.
            Once your information is no longer needed, we will securely delete
            or anonymize it <br />
            <br />
            <b>Contact Us</b>
            <br />
            <br />
            If you have any questions about this <b> privacy policy</b> please
            contact us at: <br />
            .    <b>Email: privacypolicy@gmail.ru</b> <br /> .    
            <b>Phone Number: +098 123456</b> <br />
            <br />
            Thank you for trusting <b>Lumoox</b> with your personal information.
            We are committed to safeguarding your privacy and ensuring a secure
            and <br />
            valuable experience on our platform. <br /> We appreciate your trust
            and look forward to your continued engagement with <b>
              Lumoox
            </b>{" "}
            <br /> Thank You!
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

export default PolicyForm;
