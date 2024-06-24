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
import { HeaderColor } from "@/models/enums";

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
  )

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
          <Input
            type="text"
            size="md"
            width={["301px", "666px", "1236px"]}
            borderBottomWidth="1px"
            borderColor={secondaryTextColors}
            borderTopWidth="0"
            borderLeftWidth="0"
            borderRightWidth="0"
            borderRadius="0"
          />
        </Box>
        <Box>
          <Text fontSize="16px" color={secondaryTextColors} textAlign="left">
            Your Email Address
          </Text>
          <Input
            type="email"
            size="md"
            width={["301px", "666px", "1236px"]}
            borderBottomWidth="1px"
            borderTopWidth="0"
            borderLeftWidth="0"
            borderColor={secondaryTextColors}
            borderRightWidth="0"
            borderRadius="0"
          />
        </Box>
        <Box>
          <Text fontSize="16px" color={secondaryTextColors} textAlign="left">
            {" "}
            What Brings You Here?
          </Text>
          <Input
            type="text"
            size="md"
            width={["301px", "666px", "1236px"]}
            borderBottomWidth="1px"
            borderTopWidth="0"
            borderLeftWidth="0"
            borderColor={secondaryTextColors}
            borderRightWidth="0"
            borderRadius="0"
          />
        </Box>
        <Box width="850px">
          {" "}
          <Button
            mt={50}
            color={secondaryTextColors}
            variant="outline"
            borderColor={secondaryTextColors}
            width={["300px", "700px", "950px"]}
            bg={inputColor}  
          >
            Submit
          </Button>{" "}
        </Box>
      </Stack>

    </Box>
  );
}

export default ContactForm;
