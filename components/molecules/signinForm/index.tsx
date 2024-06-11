"use client";
import { useForm } from "react-hook-form";
import { PrimaryTextColors, UserLogin } from "@/models";
import { FcGoogle } from "react-icons/fc";
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
  useBreakpointValue,
  FormErrorMessage,
} from "@chakra-ui/react";
import { useState } from "react";
import { HiEye, HiEyeOff } from "react-icons/hi";
import { userLoginWithUsernamePassword } from "@/service/api/userService";
import { useRouter } from "next/router";
import UseCookies from "@/hooks/useCookies";

function SigninForm() {
  const [isOpen, setIsOpen] = useState(false);
  const borderColor = useColorModeValue(
    PrimaryTextColors.lightMode,
    PrimaryTextColors.darkMode
  );
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<UserLogin>();
  const textColors = useColorModeValue("black", "white");

  const onSubmit = async (data: UserLogin) => {
    try {
      const res = await userLoginWithUsernamePassword({
        email: data.email,
        password: data.password,
      });

      if (res.data.access_token) {
        UseCookies({ type: "set", access_token: res.data.access_token });
        window.location.href = "/";
      }
    } catch (error) {
      setError("email", {
        type: "manual",
        message: "Invalid email or password",
      });
      setError("password", {
        type: "manual",
        message: "Invalid email or password",
      });
    }
  };

  const boxWidth = useBreakpointValue({ base: "90%", md: "500px" });

  return (
    <Flex
     width="100%"
     minHeight="100vh"
     alignItems="center"
     justifyContent="center"
     bg={useColorModeValue("gray.50", "gray.900")}
    >
      <Box
      width={boxWidth}
      py={{ base: "0", sm: "8" }}
      px={{ base: "4", sm: "10" }}
      bg={{ base: "transparent", sm: "bg.surface" }}
    >
      <FormControl as="form" onSubmit={handleSubmit(onSubmit)}>
        <Stack spacing="6">
          <Stack spacing="5">
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
                  autoComplete="current-password"
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
            <Checkbox color={borderColor} {...register("rememberMe")}>
              Remember me
            </Checkbox>

            <Button variant="text" size="sm" color={borderColor}>
              Forgot password?
            </Button>
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
            >
              Sign in
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
    </Flex>
  );
}

export default SigninForm;
