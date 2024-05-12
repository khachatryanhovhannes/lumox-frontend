"use client";
import React, { useState } from "react";
import {
  Box,
  Heading,
  Text,
  useColorModeValue,
  Flex,
  Button,
  Input,
  FormLabel,
  InputGroup,
  InputRightElement,
  IconButton,
  Image, // ավելացնել Image կոմպոնենտը
} from "@chakra-ui/react";
import { HiEye, HiEyeOff } from "react-icons/hi";
import { PrimaryTextColors, SecondaryTextColors } from "@/models";

function SettingsPage() {
  const primaryTextColors = useColorModeValue(
    PrimaryTextColors.lightMode,
    PrimaryTextColors.darkMode
  );

  const secondaryTextColors = useColorModeValue(
    SecondaryTextColors.lightMode,
    SecondaryTextColors.darkMode
  );

  const [isOpenFirst, setIsOpenFirst] = useState(false);
  const [isOpenSecond, setIsOpenSecond] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedImage(URL.createObjectURL(file));
    }
  };

  const handleSaveChange = () => {
    // Logic to save changes, such as making an API call or updating state
    console.log("Changes saved!");
    console.log("Selected image:", selectedImage);
  };
  return (
    <Flex
      direction="column"
      align="center"
      justify="space-between"
      minHeight="100vh"
    >
      <Box textAlign="center">
        <Heading
          fontFamily="Lateef"
          color={primaryTextColors}
          fontSize={["30px", "35px", "40px", "45px", "100px"]}
          fontWeight="normal"
          mt={["20px", "25px", "30px", "35px", "80px"]}
          lineHeight={["1", "0.9", "0.8", "0.7", "0.2"]}
        >
          Account
        </Heading>
        <Text
          fontSize={["16px", "18px", "20px", "22px", "25px"]}
          fontWeight="100"
          lineHeight={["1.2", "1.3", "1.4", "1.5", "1.6"]}
          color={secondaryTextColors}
          mt={["15px", "20px", "25px", "30px", "22px"]}
        >
          Real-time information and activities of your property.
        </Text>
        <Flex align="center" justify="space-between" width="100%" p={10}>
          <Box>
            {/* Display selected image or default circle */}
            {selectedImage ? (
              <Image
                src={selectedImage}
                alt=""
                w="80px"
                h="80px"
                borderRadius="50%"
              />
            ) : (
              <Box bg="teal" w="80px" h="80px" borderRadius="50%" />
            )}
            {/* Hidden input element for file selection */}
            <input
              type="file"
              id="imageInput"
              accept="image/*"
              style={{ display: "none" }}
              onChange={handleFileSelect}
            />
          </Box>
          <Text color={primaryTextColors} ml={5}>
            Profile picture
          </Text>
          <Flex ml={600}>
            {/* Trigger file input on button click */}
            <label htmlFor="imageInput">
              <Button
                as="span"
                color={primaryTextColors}
                variant="outline"
                borderWidth="3px"
                mr={5}
                borderColor={primaryTextColors}
              >
                Change{" "}
              </Button>
            </label>
            <Button
              color={primaryTextColors}
              variant="outline"
              borderWidth="3px"
              borderColor={primaryTextColors}
            >
              Remove
            </Button>
          </Flex>
        </Flex>
        <Text
          fontSize="18px"
          color={secondaryTextColors}
          textAlign="left"
          pl={7}
        >
          Full Name
        </Text>
        <Flex justify="space-between" width="95%" mx="auto" mt={5}>
          <Box width="45%">
            <Text fontSize="16px" color={secondaryTextColors} textAlign="left">
              First Name
            </Text>
            <Input borderWidth="2px" borderColor={primaryTextColors} />
          </Box>
          <Box width="45%" ml={10}>
            <Text fontSize="16px" color={secondaryTextColors} textAlign="left">
              Last Name
            </Text>
            <Input borderWidth="2px" borderColor={primaryTextColors} />
          </Box>
        </Flex>
        <Box
          width="95%"
          mx="auto"
          borderBottom={`2px solid ${secondaryTextColors} `}
          my={50}
          mb={5}
        ></Box>
        <Text
          fontSize="18px"
          color={secondaryTextColors}
          textAlign="left"
          pl={7}
        >
          Contact Email{" "}
        </Text>
        <Flex justify="space-between" width="95%" mx="auto" mt={5}>
          <Box width="45%">
            <Text fontSize="16px" color={secondaryTextColors} textAlign="left">
              Email{" "}
            </Text>
            <Input borderWidth="2px" borderColor={primaryTextColors} />
          </Box>
          <Box width="45%" ml={10}>
            <Button
              w={250}
              my={7}
              color={primaryTextColors}
              variant="outline"
              borderWidth="2px"
              borderColor={primaryTextColors}
            >
              Add another email
            </Button>{" "}
          </Box>
        </Flex>
        <Box
          width="95%"
          mx="auto"
          borderBottom={`2px solid ${secondaryTextColors} `}
          my={50}
          mb={5}
        ></Box>
        <FormLabel
          fontSize="18px"
          color={secondaryTextColors}
          textAlign="left"
          pl={7}
          mt={8}
          mb={10}
        >
          Password
        </FormLabel>
        <Flex justify="space-between" width="95%" mx="auto" mt={5}>
          <InputGroup alignItems="center" width="45%">
            <InputRightElement>
              <IconButton
                fontSize="20px"
                variant="ghost"
                aria-label={isOpenFirst ? "Hide password" : "Show password"}
                icon={isOpenFirst ? <HiEyeOff /> : <HiEye />}
                onClick={() => {
                  setIsOpenFirst(!isOpenFirst);
                }}
              />
            </InputRightElement>
            <Input
              h="40px"
              color={secondaryTextColors}
              borderWidth="2px"
              borderColor={primaryTextColors}
              id="password-1"
              type={isOpenFirst ? "text" : "password"}
              autoComplete="current-password"
              placeholder="Enter Password"
            />
          </InputGroup>
          <InputGroup alignItems="center" width="45%">
            <InputRightElement>
              <IconButton
                fontSize="20px"
                variant="ghost"
                aria-label={isOpenSecond ? "Hide password" : "Show password"}
                icon={isOpenSecond ? <HiEyeOff /> : <HiEye />}
                onClick={() => {
                  setIsOpenSecond(!isOpenSecond);
                }}
              />
            </InputRightElement>
            <Input
              h="40px"
              color={secondaryTextColors}
              borderWidth="2px"
              borderColor={primaryTextColors}
              id="password-2"
              type={isOpenSecond ? "text" : "password"}
              autoComplete="current-password"
              placeholder="Enter Password"
            />
          </InputGroup>
        </Flex>
        <Button
          w={250}
          my={70}
          color={primaryTextColors}
          variant="outline"
          borderWidth="2px"
          borderColor={primaryTextColors}
        >
          Save Change{" "}
        </Button>{" "}
      </Box>
    </Flex>
  );
}

export default SettingsPage;
