"use client";
import { PrimaryTextColors, SecondaryTextColors } from "@/models";
import {
  useColorModeValue,
  Flex,
  Button,
  Image,
  Textarea,
} from "@chakra-ui/react";
import { Inter } from "next/font/google";
import React, { useRef, useState } from "react";
import Footer from "../Footer/footer";

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

  const [coverPhoto, setCoverPhoto] = useState<string>("");

  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleAddImage = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const result = reader.result;
        if (typeof result === "string") {
          setCoverPhoto(result);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <>
      <Flex direction="column" alignItems="center" px={8} py={8}>
        <input
          type="file"
          accept="image/*"
          style={{ display: "none" }}
          ref={fileInputRef}
          onChange={handleFileChange}
        />
        {coverPhoto && (
          <Image
            src={coverPhoto}
            alt="Cover Photo"
            mb={8}
            boxSize="300px"
            objectFit="cover"
          />
        )}

        <Flex justifyContent="space-around" width="100%" px={8} py={8}>
          <Button
            mr={8}
            borderWidth="1px"
            borderColor={primaryTextColors}
            background="none"
            onClick={handleAddImage}
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
            borderWidth: "1px",
            borderColor: "transparent",
            _hover: {
              borderColor: "transparent",
            },
            _focus: {
              borderColor: "transparent",
              boxShadow: "none",
            },
          }}
        />
      </Flex>
      <Footer />
    </>
  );
}

export default WritePage;
