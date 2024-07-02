"use client";

import React, { useState, useEffect } from "react";
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
  Image,
  useToast,
} from "@chakra-ui/react";
import { HiEye, HiEyeOff } from "react-icons/hi";
import { PrimaryTextColors, SecondaryTextColors } from "@/models";
import ScrollToTopButton from "@/constants/scrool";

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

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [firstNameError, setFirstNameError] = useState("");
  const [lastNameError, setLastNameError] = useState("");

  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const toast = useToast();

  useEffect(() => {
    const storedImage = localStorage.getItem("profilePicture");
    if (storedImage) {
      setSelectedImage(storedImage);
    }
  }, []);

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result as string;
        setSelectedImage(base64String);
        localStorage.setItem("profilePicture", base64String);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRemoveImage = () => {
    setSelectedImage(null);
    localStorage.removeItem("profilePicture");
  };

  const handleSaveChange = () => {
    const isFirstNameValid = validateFirstName(firstName);
    const isLastNameValid = validateLastName(lastName);
    const isPasswordValid = validatePassword(password1);
    const isPassword2Valid = validatePassword2(password2);

    if (
      isFirstNameValid &&
      isLastNameValid &&
      isPasswordValid &&
      isPassword2Valid &&
      password1 === password2
    ) {
      toast({
        title: "Changes Saved Successfully",
        description: "Your changes have been saved.",
        status: "success",
        duration: 3000,
        isClosable: true,
      });

      console.log("Changes saved!");
      console.log("Selected image:", selectedImage);
    } else {
      console.log("Please fill out all required fields correctly.");
    }
  };

  const validateFirstName = (name: string) => {
    if (name.length < 3) {
      setFirstNameError("First name must be at least 3 characters long.");
      return false;
    }
    if (/\d/.test(name)) {
      setFirstNameError("First name cannot contain numbers.");
      return false;
    }
    setFirstNameError("");
    return true;
  };

  const validateLastName = (name: string) => {
    if (name.length < 3) {
      setLastNameError("Last name must be at least 3 characters long.");
      return false;
    }
    if (/\d/.test(name)) {
      setLastNameError("Last name cannot contain numbers.");
      return false;
    }
    setLastNameError("");
    return true;
  };

  const validatePassword = (password: string) => {
    if (!/[A-Z]/.test(password)) {
      setPasswordError(
        "Password must contain at least one uppercase letter (A-Z)."
      );
      return false;
    }
    if (!/[1-9]/.test(password)) {
      setPasswordError("Password must contain at least one digit (1-9).");
      return false;
    }
    if (!/[!@#$%^&*()<>?]/.test(password)) {
      setPasswordError(
        "Password must contain at least one special character (!@#$%^&*()<>?)."
      );
      return false;
    }
    setPasswordError("");
    return true;
  };

  const validatePassword2 = (password: string) => {
    if (password !== password1) {
      setPasswordError("Passwords do not match.");
      return false;
    }
    setPasswordError("");
    return true;
  };

  const handleFirstNameChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setFirstName(event.target.value);
    validateFirstName(event.target.value);
  };

  const handleLastNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLastName(event.target.value);
    validateLastName(event.target.value);
  };

  const handlePassword1Change = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setPassword1(event.target.value);
    validatePassword(event.target.value);
  };

  const handlePassword2Change = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setPassword2(event.target.value);
    validatePassword2(event.target.value);
  };

  return (
    <Flex
      direction="column"
      align="center"
      justify="space-between"
      minHeight="100vh"
      px={[4, 6, 8]}
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
        <Flex
          align="center"
          justify="space-between"
          width="100%"
          flexDirection={["column", "row"]}
          p={10}
        >
          <Box>
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
            <input
              type="file"
              id="imageInput"
              accept="image/*"
              style={{ display: "none" }}
              onChange={handleFileSelect}
            />
          </Box>
          <Text color={primaryTextColors} ml={[0, 5]} mt={[4, 0]}>
            Profile picture
          </Text>
          <Flex ml={[0, 600]} mt={[4, 0]} flexDirection={["column", "row"]}>
            <label htmlFor="imageInput">
              <Button
                as="span"
                color={primaryTextColors}
                variant="outline"
                borderWidth="3px"
                mr={[0, 5]}
                mb={[4, 0]}
                borderColor={primaryTextColors}
              >
                Change
              </Button>
            </label>
            <Button
              color={primaryTextColors}
              variant="outline"
              borderWidth="3px"
              borderColor={primaryTextColors}
              onClick={handleRemoveImage}
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
        <Flex
          justify="space-between"
          width="95%"
          mx="auto"
          mt={5}
          flexDirection={["column", "row"]}
        >
          <Box width={["100%", "45%"]} mb={[5, 0]}>
            <Text fontSize="16px" color={secondaryTextColors} textAlign="left">
              First Name
            </Text>
            <Input
              borderWidth="2px"
              borderColor={primaryTextColors}
              value={firstName}
              onChange={handleFirstNameChange}
            />
            {firstNameError && (
              <Text color="red" mt={1} fontSize="14px">
                {firstNameError}
              </Text>
            )}
          </Box>
          <Box width={["100%", "45%"]} ml={[0, 10]}>
            <Text fontSize="16px" color={secondaryTextColors} textAlign="left">
              Last Name
            </Text>
            <Input
              borderWidth="2px"
              borderColor={primaryTextColors}
              value={lastName}
              onChange={handleLastNameChange}
            />
            {lastNameError && (
              <Text color="red" mt={1} fontSize="14px">
                {lastNameError}
              </Text>
            )}
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
          Contact Email
        </Text>
        <Flex
          justify="space-between"
          width="95%"
          mx="auto"
          mt={5}
          flexDirection={["column", "row"]}
        >
          <Box width={["100%", "45%"]} mb={[5, 0]}>
            <Text fontSize="16px" color={secondaryTextColors} textAlign="left">
              Email
            </Text>
            <Input borderWidth="2px" borderColor={primaryTextColors} />
          </Box>
          <Box width={["100%", "45%"]} ml={[0, 10]}>
            <Button
              w={["100%", 250]}
              my={7}
              color={primaryTextColors}
              variant="outline"
              borderWidth="2px"
              borderColor={primaryTextColors}
            >
              Add another email
            </Button>
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
        <Flex
          justify="space-between"
          width="95%"
          mx="auto"
          mt={5}
          flexDirection={["column", "row"]}
        >
          <InputGroup alignItems="center" width={["100%", "45%"]} mb={[5, 0]}>
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
              value={password1}
              onChange={handlePassword1Change}
            />
          </InputGroup>
          <InputGroup alignItems="center" width={["100%", "45%"]} mb={[5, 0]}>
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
              placeholder="Confirm Password"
              value={password2}
              onChange={handlePassword2Change}
            />
          </InputGroup>
        </Flex>
        {passwordError && (
          <Text color="red" mt={1} fontSize="14px" textAlign="center">
            {passwordError}
          </Text>
        )}
        <Button
          w={250}
          my={70}
          color={primaryTextColors}
          variant="outline"
          borderWidth="2px"
          borderColor={primaryTextColors}
          onClick={handleSaveChange}
        >
          Save Change
        </Button>
      </Box>
      <Box p={4}>
        <ScrollToTopButton />
      </Box>
    </Flex>
  );
}

export default SettingsPage;
