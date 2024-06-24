"use client";
import { PrimaryTextColors, SecondaryTextColors } from "@/models";
import {
  Box,
  Heading,
  Text,
  useColorModeValue,
  Input,
  Stack,
  Button,
} from "@chakra-ui/react";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
import { HeaderColor } from "@/models/enums";

function ContactForm() {
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
      <Stack spacing="44px" mt="100px" align="center">
        <Box>
          <Text fontSize="16px" color={secondaryTextColors} textAlign="left">
            Your Full Name
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
