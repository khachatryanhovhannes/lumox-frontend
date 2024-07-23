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
