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
} from "@chakra-ui/react";
import { useState } from "react";
import { HiEye, HiEyeOff } from "react-icons/hi";

function SigninForm() {
  const [isOpen, setIsOpen] = useState(false);
  const borderColor = useColorModeValue(
    PrimaryTextColors.lightMode,
    PrimaryTextColors.darkMode
  );
  const { register, handleSubmit } = useForm<UserLogin>();
  const textColors = useColorModeValue("black", "white");

  const onSubmit = (data: UserLogin) => {
    console.log(data);
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
            <FormControl>
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
                {...register("email")}
              />
            </FormControl>
            <FormControl>
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
                  {...register("password")}
                />
              </InputGroup>
            </FormControl>
          </Stack>
          <HStack justify="space-between">
            <Checkbox
              color={borderColor}
              {...register("rememberMe")}
              defaultChecked
            >
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
              or continue withs
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

export default SigninForm;
