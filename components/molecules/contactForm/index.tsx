/* eslint-disable react/no-unescaped-entities */
"use client";
import { useState, ChangeEvent } from "react";
import { PrimaryTextColors, SecondaryTextColors } from "@/models";
import {
  Box,
  Heading,
  Text,
  useColorModeValue,
  Input,
  Stack,
  Button,
  IconButton,
  Divider,
} from "@chakra-ui/react";
import { Inter } from "next/font/google";
import ScrollToTopButton from "@/constants/scrool";
const inter = Inter({ subsets: ["latin"] });
import { HeaderColor } from "@/models/enums";
import Link from "next/link";
import { Flex } from "@chakra-ui/react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import Footer from "../Footer/footer";

function ContactForm() {
  const [fullName, setFullName] = useState("");
  const [fullNameError, setFullNameError] = useState("");

  const [reason, setReason] = useState("");
  const [reasonError, setReasonError] = useState("");

  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");

  const [isSubmitted, setIsSubmitted] = useState(false); // State to track form submission

  const primaryTextColors = useColorModeValue(
    PrimaryTextColors.lightMode,
    PrimaryTextColors.darkMode
  );

  const secondaryTextColors = useColorModeValue(
    SecondaryTextColors.lightMode,
    SecondaryTextColors.darkMode
  );

  const inputColor = useColorModeValue(
    HeaderColor.lightMode,
    HeaderColor.darkMode
  );

  const validateFullName = (name: string) => {
    const nameRegex = /^[a-zA-ZԱ-Ֆա-ֆ]{3,13}$/; // Allow Armenian and English letters only, 3 to 13 characters
    return nameRegex.test(name);
  };

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{1,13}$/; // Allow 1 to 13 characters before and after the '@' symbol
    return emailRegex.test(email);
  };

  const validateReason = (reason: string) => {
    return reason.length >= 10 && reason.length <= 30;
  };

  const handleFullNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setFullName(value);
    if (!validateFullName(value)) {
      setFullNameError(
        "Your Full Name must be between 3 and 13 letters long and cannot contain numbers."
      );
    } else {
      setFullNameError("");
    }
  };

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmail(value);
    if (!validateEmail(value)) {
      setEmailError(
        "Please enter a valid email address with a maximum length of 13 characters."
      );
    } else {
      setEmailError("");
    }
  };

  const handleReasonChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setReason(value);
    if (!validateReason(value)) {
      setReasonError(
        "What Brings You Here? must be between 10 and 30 characters long."
      );
    } else {
      setReasonError("");
    }
  };

  const handleSubmit = () => {
    const isFullNameValid = validateFullName(fullName);
    const isEmailValid = validateEmail(email);
    const isReasonValid = validateReason(reason);

    if (isFullNameValid && isEmailValid && isReasonValid) {
      setIsSubmitted(true);
    } else {
      if (!isFullNameValid)
        setFullNameError(
          "Your Full Name must be between 3 and 13 letters long and cannot contain numbers."
        );
      if (!isEmailValid)
        setEmailError(
          "Please enter a valid email address with a maximum length of 13 characters."
        );
      if (!isReasonValid)
        setReasonError(
          "What Brings You Here? must be between 10 and 30 characters long."
        );
    }
  };

  return (
    <Box textAlign="center">
      <Heading
        fontFamily="Lateef"
        color={secondaryTextColors}
        fontSize={["30px", "35px", "40px", "45px", "80px"]}
        fontWeight="normal"
        mt={["20px", "25px", "30px", "35px", "40px"]}
        lineHeight={["1", "0.9", "0.8", "0.7", "1.3"]}
      >
        How to contact us?
      </Heading>

      <Text
        className={inter.className}
        fontSize={["16px", "18px", "20px", "22px", "24px"]}
        fontWeight="100"
        lineHeight={["1.2", "1.3", "1.4", "1.5", "0.001"]}
        color={secondaryTextColors}
        mt={["15px", "20px", "25px", "30px", "15px"]}
      >
        Whatever you would like to share with us, we are always prepared to
        listen.{" "}
      </Text>
      <Flex
        direction="column"
        alignItems="flex-start"
        mx="auto"
        maxWidth="1200px"
      >
        <Box mt="50px" px={[4, 6, 8, 1]}>
          <Text
            height="auto"
            width="100%"
            textAlign="left"
            lineHeight="2"
            color={primaryTextColors}
            fontFamily="Inter, sans-serif"
            // mt={50}
            fontSize={["16px", "18px", "20px", "22px", "20px"]}
          >
            We prioritize clear and effective communication. Whether you have a
            question, need support, or want to collaborate, we're here to assist
            you. Below are the various ways you can get in touch with us:
          </Text>
        </Box>

        <Box mt="50px" px={[4, 6, 8, 1]}>
          <Heading
            height="auto"
            width="100%"
            mb="10px"
            textAlign="left"
            fontSize={["20px", "22px", "24px", "26px", "22px"]}
            color={primaryTextColors}
          >
            How to Reach Us{" "}
          </Heading>
          <br />
          <br />
          <Heading
            height="auto"
            width="100%"
            mb="10px"
            textAlign="left"
            fontSize={["20px", "22px", "24px", "26px", "22px"]}
            color={primaryTextColors}
          >
            General questions{" "}
          </Heading>
          <Text
            height="auto"
            width="100%"
            textAlign="left"
            lineHeight="2"
            color={primaryTextColors}
            fontFamily="Inter, sans-serif"
            mt={8}
            fontSize={["16px", "18px", "20px", "22px", "20px"]}
          >
            For general questions or information about Lumoox, please contact us
            via: <br /> ·        Email: info@Lumoox.com <br /> ·        Phone:
            +374 98 123456
          </Text>
          <br />
        </Box>

        <Box mt="50px" px={[4, 6, 8, 1]}>
          <Heading
            height="auto"
            width="100%"
            mb="10px"
            textAlign="left"
            fontSize={["20px", "22px", "24px", "26px", "22px"]}
            color={primaryTextColors}
          >
            Customer Support{" "}
          </Heading>
          <Text
            height="auto"
            width="100%"
            textAlign="left"
            lineHeight="2"
            color={primaryTextColors}
            fontFamily="Inter, sans-serif"
            mt={8}
            fontSize={["16px", "18px", "20px", "22px", "20px"]}
          >
            Our dedicated  customer support team is here to help you with any
            technical issues, account queries, or other concerns. Contact us at:{" "}
            <br />
            ·        Email: support@Lumoox.com <br />
            ·        Phone: +374 10 654321
            <br />
            ·        Support Hours: Monday to Friday, 9:00 AM - 6:00 PM
          </Text>
        </Box>

        <Box mt="50px" px={[4, 6, 8, 1]}>
          <Heading
            height="auto"
            width="100%"
            mb="10px"
            textAlign="left"
            fontSize={["20px", "22px", "24px", "26px", "22px"]}
            color={primaryTextColors}
          >
            Media Inquiries{" "}
          </Heading>
          <Text
            height="auto"
            width="100%"
            textAlign="left"
            lineHeight="2"
            color={primaryTextColors}
            fontFamily="Inter, sans-serif"
            mt={8}
            fontSize={["16px", "18px", "20px", "22px", "20px"]}
          >
            For media-related inquiries, including interviews, press releases,
            or media kits, please contact our media relations team:
            <br /> ·        Email: media@Lumoox.com
          </Text>
        </Box>

        <Box mt="50px" px={[4, 6, 8, 1]}>
          <Heading
            height="auto"
            width="100%"
            mb="10px"
            textAlign="left"
            fontSize={["20px", "22px", "24px", "26px", "22px"]}
            color={primaryTextColors}
          >
            Partnership Opportunities
          </Heading>
          <Text
            height="auto"
            width="100%"
            textAlign="left"
            lineHeight="2"
            color={primaryTextColors}
            fontFamily="Inter, sans-serif"
            mt={8}
            fontSize={["16px", "18px", "20px", "22px", "20px"]}
          >
            Together we learn ,together we grow. We are always open to
            meaningful partnerships and collaborations that align with our
            mission to provide professional information. If you are interested
            in partnering with Lumoox, please reach out to us at: <br />{" "}
            ·        Email: partnerships@Lumoox.com
          </Text>
          <Box
            as="ol"
            pl="20px"
            textAlign="left"
            lineHeight="2.5"
            color={primaryTextColors}
          ></Box>
        </Box>

        <Box mt="50px" px={[4, 6, 8, 1]}>
          <Heading
            height="auto"
            width="100%"
            mb="10px"
            textAlign="left"
            fontSize={["20px", "22px", "24px", "26px", "22px"]}
            color={primaryTextColors}
          >
            Content Contribution{" "}
          </Heading>
          <Text
            height="auto"
            width="100%"
            textAlign="left"
            lineHeight="2"
            color={primaryTextColors}
            fontFamily="Inter, sans-serif"
            mt={8}
            fontSize={["16px", "18px", "20px", "22px", "20px"]}
          >
            We value the expertise and contributions of individuals who wish to
            share their knowledge. If you are interested in contributing
            content, please contact our editorial team at: <br /> ·       
            Email: contribute@Lumoox.com <br /> ·        Submission Guidelines:
            [Lumoox.com/submission-guidelines](https://Lumoox.com/submission-guidelines)
          </Text>
          <Box
            as="ul"
            pl="20px"
            textAlign="left"
            lineHeight="2"
            color={primaryTextColors}
          ></Box>
        </Box>

        <Box mt="50px" px={[4, 6, 8, 1]}>
          <Heading
            height="auto"
            width="100%"
            mb="10px"
            textAlign="left"
            fontSize={["20px", "22px", "24px", "26px", "22px"]}
            color={primaryTextColors}
          >
            Connect with Us{" "}
          </Heading>
          <Text
            height="auto"
            width="100%"
            textAlign="left"
            lineHeight="2"
            color={primaryTextColors}
            fontFamily="Inter, sans-serif"
            mt={8}
            fontSize={["16px", "18px", "20px", "22px", "20px"]}
          >
            Stay updated with the latest news, articles, and events from Lumoox
            by following us on social media: <br /> ·        Facebook:
            [facebook.com/Lumoox](https://facebook.com/Lumoox) <br /> ·       
            LinkedIn:
            [linkedin.com/company/Lumoox](https://linkedin.com/company/Lumoo)
            <br />
            ·        Instagram:
            [instagram.com/Lumoox](https://instagram.com/Lumoox)
          </Text>
        </Box>

        <Box mt="50px" px={[4, 6, 8, 1]}>
          <Heading
            height="auto"
            width="100%"
            mb="10px"
            textAlign="left"
            fontSize={["20px", "22px", "24px", "26px", "22px"]}
            color={primaryTextColors}
          >
            Feedback{" "}
          </Heading>
          <Text
            height="auto"
            width="100%"
            textAlign="left"
            lineHeight="2"
            color={primaryTextColors}
            fontFamily="Inter, sans-serif"
            mt={8}
            fontSize={["16px", "18px", "20px", "22px", "20px"]}
          >
            Your feedback has the power to inspire profound change. We
            continuously strive to improve our platform, and your suggestions
            help <br /> us achieve this goal. Please send your feedback to:{" "}
            <br /> ·        Email: feedback@Lumoox.com
          </Text>
        </Box>

        <Box mt="50px" px={[4, 6, 8, 1]}>
          <Heading
            height="auto"
            width="100%"
            mb="10px"
            textAlign="left"
            fontSize={["20px", "22px", "24px", "26px", "22px"]}
            color={primaryTextColors}
          >
            Frequently Asked Questions (FAQs){" "}
          </Heading>
          <Text
            height="auto"
            width="100%"
            textAlign="left"
            lineHeight="2"
            color={primaryTextColors}
            fontFamily="Inter, sans-serif"
            mt={8}
            fontSize={["16px", "18px", "20px", "22px", "20px"]}
          >
            For answers to common questions about Lumoox, please visit our FAQ
            page:
            <br /> ·        Website: [Lumoox.com/faq](https://Lumoox.com/faq)
          </Text>
        </Box>

        <Box mt="50px" px={[4, 6, 8, 1]}>
          <Heading
            height="auto"
            width="100%"
            mb="10px"
            textAlign="left"
            fontSize={["20px", "22px", "24px", "26px", "22px"]}
            color={primaryTextColors}
          >
            Privacy{" "}
          </Heading>
          <Text
            height="auto"
            width="100%"
            textAlign="left"
            lineHeight="2"
            color={primaryTextColors}
            fontFamily="Inter, sans-serif"
            mt={8}
            fontSize={["16px", "18px", "20px", "22px", "20px"]}
          >
            Your  privacy is our priority. To understand how we handle your
            information, please review our Privacy Policy:
            <br /> ·        Privacy Policy:
            [Lumoox.com/privacy-policy](https://Lumoox.com/privacy-policy)
          </Text>
        </Box>

        <Box mt="50px" px={[4, 6, 8, 1]}>
          <Heading
            height="auto"
            width="100%"
            mb="10px"
            textAlign="left"
            fontSize={["20px", "22px", "24px", "26px", "22px"]}
            color={primaryTextColors}
          >
             Join Our Team{" "}
          </Heading>
          <Text
            height="auto"
            width="100%"
            textAlign="left"
            lineHeight="2"
            color={primaryTextColors}
            fontFamily="Inter, sans-serif"
            mt={8}
            fontSize={["16px", "18px", "20px", "22px", "20px"]}
          >
            We are always looking for passionate and talented individuals to
            join the Lumoox team. If you are interested, please check our
            current job openings on the Careers page:
            <br /> ·        Website:
            [Lumoox.com/careers](https://Lumoox.com/careers)
            <br /> ·        Email: careers@Lumoox.com
          </Text>
        </Box>

        <Box mt="50px" px={[4, 6, 8, 1]}>
          <Heading
            height="auto"
            width="100%"
            mb="10px"
            textAlign="left"
            fontSize={["20px", "22px", "24px", "26px", "22px"]}
            color={primaryTextColors}
          >
              Community Guidelines{" "}
          </Heading>
          <Text
            height="auto"
            width="100%"
            textAlign="left"
            lineHeight="2"
            color={primaryTextColors}
            fontFamily="Inter, sans-serif"
            mt={8}
            fontSize={["16px", "18px", "20px", "22px", "20px"]}
          >
            To ensure a respectful and productive environment, we have
            established community guidelines that all users are expected to
            follow. These guidelines help maintain a safe and engaging platform
            for everyone. For more information, please visit:
            <br /> ·        Website:
            [Lumoox.com/community-guidelines](https://Lumoox.com/community-guidelines)
          </Text>
        </Box>

        <Box mt="50px" px={[4, 6, 8, 1]}>
          <Heading
            height="auto"
            width="100%"
            mb="10px"
            textAlign="left"
            fontSize={["20px", "22px", "24px", "26px", "22px"]}
            color={primaryTextColors}
          >
             Advertising with Lumoox{" "}
          </Heading>
          <Text
            height="auto"
            width="100%"
            textAlign="left"
            lineHeight="2"
            color={primaryTextColors}
            fontFamily="Inter, sans-serif"
            mt={8}
            fontSize={["16px", "18px", "20px", "22px", "20px"]}
          >
            For businesses and organizations interested in advertising on
            Lumoox, we offer various advertising options tailored to your needs.
            To learn more about our advertising opportunities, please contact
            our advertising team at:
            <br /> ·        Email: advertising@Lumoox.com
          </Text>
        </Box>

        <Box mt="50px" px={[4, 6, 8, 1]}>
          <Heading
            height="auto"
            width="100%"
            mb="10px"
            textAlign="left"
            fontSize={["20px", "22px", "24px", "26px", "22px"]}
            color={primaryTextColors}
          >
             Technical Support{" "}
          </Heading>
          <Text
            height="auto"
            width="100%"
            textAlign="left"
            lineHeight="2"
            color={primaryTextColors}
            fontFamily="Inter, sans-serif"
            mt={8}
            fontSize={["16px", "18px", "20px", "22px", "20px"]}
          >
            For technical support related to the website, app, or other Lumoox
            services, please contact our technical support team:
            <br /> ·        Email: techsupport@Lumoox.com
          </Text>
        </Box>

        <Box mt="50px" px={[4, 6, 8, 1]}>
          <Heading
            height="auto"
            width="100%"
            mb="10px"
            textAlign="left"
            fontSize={["20px", "22px", "24px", "26px", "22px"]}
            color={primaryTextColors}
          >
              Innovation Hub{" "}
          </Heading>
          <Text
            height="auto"
            width="100%"
            textAlign="left"
            lineHeight="2"
            color={primaryTextColors}
            fontFamily="Inter, sans-serif"
            mt={8}
            fontSize={["16px", "18px", "20px", "22px", "20px"]}
          >
            Our Innovation Hub is dedicated to exploring new technologies and
            methodologies to enhance our platform. If you have ideas or
            innovations that you believe could benefit Lumoox, please reach out
            to us:
            <br /> ·        Email: innovation@Lumoox.com
          </Text>
        </Box>

        <Box mt="50px" px={[4, 6, 8, 1]}>
          <Text
            height="auto"
            width="100%"
            textAlign="left"
            lineHeight="2"
            color={primaryTextColors}
            fontFamily="Inter, sans-serif"
            mt={8}
            fontSize={["16px", "18px", "20px", "22px", "20px"]}
          >
            Thank you for visiting Lumoox. We are excited to have you as part of
            our community and look forward to hearing from you. Lumoox -
            Illuminating Minds, Empowering Knowledge
          </Text>
        </Box>
      </Flex>
      {!isSubmitted ? (
        <Stack
          spacing="44px"
          mt={["50px", "70px", "90px", "110px", "120px"]}
          align="center"
          width={["90%", "80%", "70%", "60%", "50%"]}
          mx="auto"
        >
          <Box width="100%">
            <Text fontSize="16px" color={secondaryTextColors} textAlign="left">
              Your Full Name
            </Text>
            <Input
              type="text"
              size="md"
              width="100%"
              borderBottomWidth="1px"
              borderColor={secondaryTextColors}
              borderTopWidth="0"
              borderLeftWidth="0"
              borderRightWidth="0"
              borderRadius="0"
              maxLength={13} // Maximum length set to 13
              value={fullName}
              onChange={handleFullNameChange}
            />
            {fullNameError && (
              <Text fontSize="14px" color="red" textAlign="left" mt="5px">
                {fullNameError}
              </Text>
            )}
          </Box>
          <Box width="100%">
            <Text fontSize="16px" color={secondaryTextColors} textAlign="left">
              Your Email Address
            </Text>
            <Input
              type="email"
              size="md"
              width="100%"
              borderBottomWidth="1px"
              borderTopWidth="0"
              borderLeftWidth="0"
              borderColor={secondaryTextColors}
              borderRightWidth="0"
              borderRadius="0"
              maxLength={13} // Maximum length set to 13
              value={email}
              onChange={handleEmailChange}
            />
            {emailError && (
              <Text fontSize="14px" color="red" textAlign="left" mt="5px">
                {emailError}
              </Text>
            )}
          </Box>
          <Box width="100%">
            <Text fontSize="16px" color={secondaryTextColors} textAlign="left">
              What Brings You Here?
            </Text>
            <Input
              type="text"
              size="md"
              width="100%"
              borderBottomWidth="1px"
              borderTopWidth="0"
              borderLeftWidth="0"
              borderColor={secondaryTextColors}
              borderRightWidth="0"
              borderRadius="0"
              maxLength={30} // Maximum length set to 30
              value={reason}
              onChange={handleReasonChange}
            />
            {reasonError && (
              <Text fontSize="14px" color="red" textAlign="left" mt="5px">
                {reasonError}
              </Text>
            )}
          </Box>
          <Box width="80%">
            <Button
              mb={50}
              color={secondaryTextColors}
              variant="outline"
              borderColor={secondaryTextColors}
              width="100%"
              onClick={handleSubmit}
            >
              Submit
            </Button>
          </Box>
        </Stack>
      ) : (
        <Box mt="50px">
          <Text fontSize="xl" color="green.500">
            Successfully submitted the form!
          </Text>
        </Box>
      )}
      <ScrollToTopButton />
      <Footer />
    </Box>
  );
}

export default ContactForm;
