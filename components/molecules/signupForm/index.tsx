"use client";

import { useForm } from "react-hook-form";
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
import { UserRegister, PrimaryTextColors } from "@/models";
import { FcGoogle } from "react-icons/fc";
import { userRegistrationWithUsernamePassword } from "@/service/api/userService";
import { usePathname } from "next/navigation";

function SignupForm() {
  const [isOpen, setIsOpen] = useState(false);
  const borderColor = useColorModeValue(
    PrimaryTextColors.lightMode,
    PrimaryTextColors.darkMode
  );

  const { register, handleSubmit } = useForm<UserRegister>();
  const textColors = useColorModeValue("black", "white");

  const onSubmit = async (data: UserRegister) => {
    const userData = await userRegistrationWithUsernamePassword({
      email: data.email,
      password: data.password,
      firstname: data.firstname,
      lastname: data.lastname,
    });

    console.log(userData);
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
              <FormControl>
                <FormLabel htmlFor="firstname" color={borderColor}>
                  Fisrtname
                </FormLabel>

                <Input
                  h="50px"
                  id="firstname"
                  type="text"
                  borderWidth="2px"
                  borderColor={borderColor}
                  color={textColors}
                  {...register("firstname")}
                />
              </FormControl>
              <FormControl>
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
                  {...register("lastname")}
                />
              </FormControl>
            </Flex>
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
                  autoComplete="new-password"
                  {...register("password")}
                />
              </InputGroup>
            </FormControl>
          </Stack>
          <HStack justify="space-between">
            <Checkbox
              color={borderColor}
              {...register("agreeTerms")}
              defaultChecked
            >
              I agree to the terms and conditions
            </Checkbox>
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
