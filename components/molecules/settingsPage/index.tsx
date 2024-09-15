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
import Footer from "../Footer/footer";

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

    // Load existing name from localStorage
    const storedFirstName = localStorage.getItem("firstName");
    const storedLastName = localStorage.getItem("lastName");
    if (storedFirstName) setFirstName(storedFirstName);
    if (storedLastName) setLastName(storedLastName);
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
      // Save name to localStorage
      localStorage.setItem("firstName", firstName);
      localStorage.setItem("lastName", lastName);

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
                alt="Profile"
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
          // mt={50}
          color={secondaryTextColors}
          textAlign="left"
          pl={5}
        >
          Full Name
        </Text>
        <Box
          // borderColor={primaryTextColors}
          maxW="5000px"
        >
          <Flex mb={4} direction="row" wrap="wrap" justify="space-between">
            <Box flex="1" mt={5} mr={2}>
              <FormLabel color={primaryTextColors} ml={5}>
                First Name:
              </FormLabel>
              <Input
                value={firstName}
                onChange={handleFirstNameChange}
                color={primaryTextColors}
                borderColor={primaryTextColors}
                _focus={{ borderColor: primaryTextColors }}
                placeholder="Enter your first name"
                isInvalid={!!firstNameError}
              />
              {firstNameError && (
                <Text color="red.500" fontSize="sm">
                  {firstNameError}
                </Text>
              )}
            </Box>
            <Box flex="1" mt={5} ml={4}>
              <FormLabel color={primaryTextColors} ml={4}>
                Last Name:
              </FormLabel>
              <Input
                value={lastName}
                onChange={handleLastNameChange}
                color={primaryTextColors}
                borderColor={primaryTextColors}
                _focus={{ borderColor: primaryTextColors }}
                placeholder="Enter your last name"
                isInvalid={!!lastNameError}
              />
              {lastNameError && (
                <Text color="red.500" fontSize="sm">
                  {lastNameError}
                </Text>
              )}
            </Box>
          </Flex>
          <Box
            width="100%"
            mx="auto"
            mt={10}
            mb={5}
            color={primaryTextColors}
            borderBottom="3px solid"
          ></Box>

          <Text
            fontSize="18px"
            color={secondaryTextColors}
            textAlign="left"
            pl={5}
          >
            Contact Email
          </Text>
          <Flex
            justify="space-between"
            width="100%"
            mx="auto"
            mt={5}
            flexDirection={["column", "row"]}
          >
            <Box width={["100%", "50%"]} mb={[5, 0]}>
              <FormLabel color={primaryTextColors} ml={5}>
                Email{" "}
              </FormLabel>
              <Input borderWidth="2px" borderColor={primaryTextColors} />
            </Box>
            <Box width={["100%", "50%"]} ml={[0, 10]}>
              <Button
                w={["100%", 300]}
                my={7}
                color={primaryTextColors}
                variant="outline"
                borderWidth="2px"
                ml={200}
                borderColor={primaryTextColors}
              >
                Add another email
              </Button>
            </Box>
          </Flex>
          <Box
            width="100%"
            mx="auto"
            mt={10}
            mb={5}
            color={primaryTextColors}
            borderBottom="3px solid"
          ></Box>
          <Text
            fontSize="18px"
            mt={50}
            color={secondaryTextColors}
            textAlign="left"
            pl={5}
          >
            Full Name
          </Text>
          <Flex
            mb={4}
            mt={10}
            direction="row"
            wrap="wrap"
            justify="space-between"
          >
            <Box flex="1" mr={5}>
              <FormLabel color={primaryTextColors} ml={5}>
                Password:
              </FormLabel>
              <InputGroup>
                <Input
                  type={isOpenFirst ? "text" : "password"}
                  value={password1}
                  onChange={handlePassword1Change}
                  color={primaryTextColors}
                  borderColor={primaryTextColors}
                  _focus={{ borderColor: primaryTextColors }}
                  placeholder="Enter your password"
                  isInvalid={!!passwordError}
                />
                <InputRightElement>
                  <IconButton
                    aria-label={isOpenFirst ? "Hide password" : "Show password"}
                    icon={isOpenFirst ? <HiEyeOff /> : <HiEye />}
                    onClick={() => setIsOpenFirst(!isOpenFirst)}
                    bg="transparent"
                    _hover={{ bg: "transparent" }}
                  />
                </InputRightElement>
              </InputGroup>
              {passwordError && (
                <Text color="red.500" fontSize="sm">
                  {passwordError}
                </Text>
              )}
            </Box>
            <Box flex="1" ml={2}>
              <FormLabel color={primaryTextColors} ml={5}>
                Confirm Password:
              </FormLabel>
              <InputGroup>
                <Input
                  type={isOpenSecond ? "text" : "password"}
                  value={password2}
                  onChange={handlePassword2Change}
                  color={primaryTextColors}
                  borderColor={primaryTextColors}
                  _focus={{ borderColor: primaryTextColors }}
                  placeholder="Confirm your password"
                  isInvalid={!!passwordError}
                />
                <InputRightElement>
                  <IconButton
                    aria-label={
                      isOpenSecond ? "Hide password" : "Show password"
                    }
                    icon={isOpenSecond ? <HiEyeOff /> : <HiEye />}
                    onClick={() => setIsOpenSecond(!isOpenSecond)}
                    bg="transparent"
                    _hover={{ bg: "transparent" }}
                  />
                </InputRightElement>
              </InputGroup>
            </Box>
          </Flex>
          <Button
            mt={100}
            color={primaryTextColors}
            variant="outline"
            borderWidth="3px"
            w={300}
            borderColor={primaryTextColors}
            onClick={handleSaveChange}
          >
            Save Changes
          </Button>
        </Box>
      </Box>
      {/* <Footer /> */}
      <ScrollToTopButton />
    </Flex>
  );
}

export default SettingsPage;
