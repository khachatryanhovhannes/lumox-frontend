"use client";
import { PrimaryTextColors, SecondaryTextColors } from "@/models";
import { useColorModeValue, Flex, Button, Textarea } from "@chakra-ui/react";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

function WritePage() {

  const primaryTextColors = [
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
  ];  
  
  return (
    <Flex direction="column" alignItems="center" px={8} py={8}>
      <input
      type="file"
      accept="image/*"
      style={{display:"none"}}
      />
      

      <Flex justifyContent="space-around" width="100%"  px={8} py={8}>
        <Button
         mr={8}
         borderWidth="1px"
         borderColor={primaryTextColors}
         background="none"
        >
          Add a Cover Photo
        </Button>
        <Button
          mr={8}
          borderWidth="1px"
          borderColor={primaryTextColors}
          background="none"
        >
          Publish
        </Button>
      </Flex>

      <Textarea
        placeholder="Enter your header here"
        mt={8}
        width="100%"
        maxWidth="800px"
        sx={{
          "::placeholder": {
            fontWeight: "bold",
            fontSize: "1.5rem",
          },
          borderWidth: "0px",
          _hover: {
            borderColor: "transparent",
          },
          _focus: {
            borderColor: "transparent",
            boxShadow: "none",
          },
        }}
      />

      <Textarea
        placeholder="Write your post content here ... "
        mt={8}
        width="100%"
        maxWidth="800px"
        sx={{
          borderWidth:"1px",
          borderColor:"transparent",
          _hover:{
          borderColor: "transparent",

         },
         _focus:{
          borderColor:"transparent",
          boxShadow:"none",
         }
        }}
      />
    </Flex>
  )
  

}

export default WritePage;
