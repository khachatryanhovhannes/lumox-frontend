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
  Flex,
} from "@chakra-ui/react";
import { Inter } from "next/font/google";
import Link from "next/link";
import ScrollToTopButton from "@/constants/scrool";
const inter = Inter({ subsets: ["latin"] });

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

  const handleFullNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setFullName(value);

    if (/\d/.test(value)) {
      setFullNameError("Your Full Name must not contain numbers.");
    } else if (value.length < 3) {
      setFullNameError("Your Full Name must be at least 3 letters long.");
    } else {
      setFullNameError("");
    }
  };

  const handleReasonChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setReason(value);

    if (value.length < 10) {
      setReasonError("Please provide a reason of at least 10 characters.");
    } else {
      setReasonError("");
    }
  };

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmail(value);

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(value)) {
      setEmailError("Please enter a valid email address.");
    } else {
      setEmailError("");
    }
  };

  const handleSubmit = () => {
    if (fullNameError || emailError || reasonError) {
      return; // Exit function if there are errors
    }

    console.log("Form submitted with:");
    console.log("Full Name:", fullName);
    console.log("Email:", email);
    console.log("Reason:", reason);

    setIsSubmitted(true);
  };

  return (
    <Box textAlign="center">
      <Heading
        fontFamily="Lateef"
        color={primaryTextColors}
        fontSize={["30px", "35px", "40px", "45px", "100px"]}
        fontWeight="normal"
        mt={["20px", "25px", "30px", "35px", "80px"]}
        lineHeight={["1", "0.9", "0.8", "0.7", "0.2"]}
      >
        How to contact us?
      </Heading>
      <Text
        className={inter.className}
        fontSize={["16px", "18px", "20px", "22px", "25px"]}
        fontWeight="100"
        lineHeight={["1.2", "1.3", "1.4", "1.5", "1.6"]}
        color={secondaryTextColors}
        mt={["15px", "20px", "25px", "30px", "22px"]}
      >
        Whatever you would like to share with us, we are always prepared to
        listen.
      </Text>
      {!isSubmitted ? (
        <Stack
          spacing="44px"
          mt={["50px", "70px", "90px", "110px", "130px"]}
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
              mt={50}
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

export default ContactForm;
