"use client";
import { useForm, useWatch } from "react-hook-form";
import {
  Box,
  Button,
  Checkbox,
  Divider,
  Flex,
  FormControl,
  FormLabel,
  HStack,
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
  Text,
  useColorModeValue,
  FormErrorMessage,
} from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { HiEye, HiEyeOff } from "react-icons/hi";
import { UserRegister, PrimaryTextColors } from "@/models";
import { FcGoogle } from "react-icons/fc";
import { userRegistrationWithUsernamePassword } from "@/service/api/userService";
import UseCookies from "@/hooks/useCookies";
import Swal from "sweetalert2";

function SignupForm() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [firstNameValid, setFirstNameValid] = useState(false);
  const [lastNameValid, setLastNameValid] = useState(false);
  const borderColor = useColorModeValue(
    PrimaryTextColors.lightMode,
    PrimaryTextColors.darkMode
  );

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
    clearErrors,
    watch,
  } = useForm<UserRegister>();
  const textColors = useColorModeValue("black", "white");

  const firstname = watch("firstname");
  const lastname = watch("lastname");

  useEffect(() => {
    const namePattern = /^[A-Za-z]+$/i;
    if (firstname && (!namePattern.test(firstname) || firstname.length < 3)) {
      setError("firstname", {
        type: "manual",
        message:
          "First name must be at least 3 letters and only contain letters",
      });
      setFirstNameValid(false);
    } else {
      clearErrors("firstname");
      setFirstNameValid(!!firstname && firstname.length >= 3);
    }
    if (lastname && (!namePattern.test(lastname) || lastname.length < 3)) {
      setError("lastname", {
        type: "manual",
        message:
          "Last name must be at least 3 letters and only contain letters",
      });
      setLastNameValid(false);
    } else {
      clearErrors("lastname");
      setLastNameValid(!!lastname && lastname.length >= 3);
    }
  }, [firstname, lastname, setError, clearErrors]);

  const onSubmit = async (data: UserRegister) => {
    setIsLoading(true);
    try {
      const userData = await userRegistrationWithUsernamePassword({
        email: data.email,
        password: data.password,
        firstname: data.firstname,
        lastname: data.lastname,
      });

      if (userData?.data?.access_token) {
        UseCookies({ type: "set", access_token: userData.data.access_token });
        window.location.href = "/";
      } else {
        Swal.fire({
          title: "Success!",
          text: "Registration successful, but we couldn't log you in automatically. Please try logging in manually.",
          icon: "success",
          confirmButtonText: "OK",
        }).then(() => {
          window.location.href = "/signin";
        });
      }
    } catch (error) {
      Swal.fire({
        title: "Error!",
        text: "An error occurred during registration. Please try again.",
        icon: "error",
        confirmButtonText: "OK",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Box
      width={"500px"}
      m="auto"
      py={{ base: "0", sm: "8" }}
      px={{ base: "4", sm: "10" }}
      bg={{ base: "transparent", sm: "bg.surface" }}
    >
      <FormControl as="form" onSubmit={handleSubmit(onSubmit)}>
        <Stack spacing="6">
          <Stack spacing="5">
            <Flex gap="20px">
              <FormControl isInvalid={!!errors.firstname}>
                <FormLabel htmlFor="firstname" color={borderColor}>
                  Firstname
                </FormLabel>
                <Input
                  h="50px"
                  id="firstname"
                  type="text"
                  borderWidth="2px"
                  borderColor={borderColor}
                  color={textColors}
                  {...register("firstname", {
                    required: "First name is required",
                    minLength: {
                      value: 3,
                      message: "First name must be at least 3 letters long",
                    },
                    pattern: {
                      value: /^[A-Za-z]+$/i,
                      message: "First name can only contain letters",
                    },
                  })}
                />
                <FormErrorMessage>
                  {errors.firstname && errors.firstname.message}
                </FormErrorMessage>
                {!errors.firstname && firstNameValid && (
                  <Text color="green.500">First name is appropriate</Text>
                )}
              </FormControl>
              <FormControl isInvalid={!!errors.lastname}>
                <FormLabel htmlFor="lastname" color={borderColor}>
                  Lastname
                </FormLabel>
                <Input
                  h="50px"
                  id="lastname"
                  type="text"
                  borderWidth="2px"
                  borderColor={borderColor}
                  color={textColors}
                  {...register("lastname", {
                    required: "Last name is required",
                    minLength: {
                      value: 3,
                      message: "Last name must be at least 3 letters long",
                    },
                    pattern: {
                      value: /^[A-Za-z]+$/i,
                      message: "Last name can only contain letters",
                    },
                  })}
                />
                <FormErrorMessage>
                  {errors.lastname && errors.lastname.message}
                </FormErrorMessage>
                {!errors.lastname && lastNameValid && (
                  <Text color="green.500">Last name is appropriate</Text>
                )}
              </FormControl>
            </Flex>
            <FormControl isInvalid={!!errors.email}>
              <FormLabel htmlFor="email" color={borderColor}>
                Email
              </FormLabel>
              <Input
                h="50px"
                id="email"
                type="email"
                borderWidth="2px"
                borderColor={borderColor}
                color={textColors}
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: "Entered value does not match email format",
                  },
                })}
              />
              <FormErrorMessage>
                {errors.email && errors.email.message}
              </FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={!!errors.password}>
              <FormLabel htmlFor="password" color={borderColor}>
                Password
              </FormLabel>
              <InputGroup alignItems="center">
                <InputRightElement mt="5px">
                  <IconButton
                    fontSize="20px"
                    variant="text"
                    aria-label={isOpen ? "Mask password" : "Reveal password"}
                    icon={isOpen ? <HiEyeOff /> : <HiEye />}
                    onClick={() => {
                      setIsOpen(!isOpen);
                    }}
                  />
                </InputRightElement>
                <Input
                  h="50px"
                  color={textColors}
                  borderWidth="2px"
                  borderColor={borderColor}
                  id="password"
                  type={isOpen ? "text" : "password"}
                  autoComplete="new-password"
                  {...register("password", {
                    required: "Password is required",
                    minLength: {
                      value: 8,
                      message: "Password must be at least 8 characters long",
                    },
                  })}
                />
              </InputGroup>
              <FormErrorMessage>
                {errors.password && errors.password.message}
              </FormErrorMessage>
            </FormControl>
          </Stack>
          <HStack justify="space-between">
            <Checkbox
              color={borderColor}
              {...register("agreeTerms", {
                required: "You must agree to the terms and conditions",
              })}
            >
              I agree to the terms and conditions
            </Checkbox>
            <FormErrorMessage>
              {errors.agreeTerms && errors.agreeTerms.message}
            </FormErrorMessage>
          </HStack>
        </Stack>

        <Stack spacing="6">
          <Box justifyContent="center" alignItems="center" m="20px auto">
            <Button
              type="submit"
              p="15px 40px"
              borderRadius="30px"
              borderWidth="2px"
              borderColor={borderColor}
              background="transparent"
              color={borderColor}
              isLoading={isLoading}
              loadingText="Signing up"
            >
              Sign up
            </Button>
          </Box>
          <HStack>
            <Divider borderColor={borderColor} />
            <Text textStyle="sm" whiteSpace="nowrap" color={borderColor}>
              or continue with
            </Text>
            <Divider borderColor={borderColor} />
          </HStack>
          <Button
            p="25px 20px"
            borderRadius="30px"
            background="transparent"
            borderColor={borderColor}
            borderWidth="2px"
          >
            <Flex
              alignItems="center"
              justifyContent="space-between"
              gap="20px"
              w="100%"
            >
              <FcGoogle fontSize="25px" />
              <Text fontSize="17px">Sign in with Google</Text>
              <Text></Text>
            </Flex>
          </Button>
        </Stack>
      </FormControl>
    </Box>
  );
}

export default SignupForm;
