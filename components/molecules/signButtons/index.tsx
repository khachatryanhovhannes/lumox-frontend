"use client";

import { Button, ButtonGroup, Flex, useColorModeValue } from "@chakra-ui/react";
import { PrimaryTextColors } from "../../../models";
import { usePathname } from "next/navigation";
import Link from "next/link";

function SignButtons() {
  const borderAndTextColor = useColorModeValue(
    PrimaryTextColors.lightMode,
    PrimaryTextColors.darkMode
  );

  const pathname = usePathname();

  const saveCurrentPath = () => {
    sessionStorage.setItem("currentPath", pathname);
  };

  return (
    <Flex
      direction="row"
      gap="20px"
      padding="10px 20px"
      alignItems="center"
      justifyContent="center"
    >
      <ButtonGroup spacing={4} mb={20}>
        {pathname !== "/signin" && (
          <Link href="/signin" passHref>
            <Button
              background="transparent"
              border={`2px solid ${borderAndTextColor}`}
              borderRadius="50px"
              color={borderAndTextColor}
              onClick={saveCurrentPath}
              aria-label="Sign In"
              _hover={{ bg: borderAndTextColor, color: "white" }}
            >
              Sign In
            </Button>
          </Link>
        )}
        {pathname !== "/signup" && (
          <Link href="/signup" passHref>
            <Button
              background="transparent"
              border={`2px solid ${borderAndTextColor}`}
              borderRadius="50px"
              color={borderAndTextColor}
              onClick={saveCurrentPath}
              aria-label="Sign Up"
              _hover={{ bg: borderAndTextColor, color: "white" }}
            >
              Sign Up
            </Button>
          </Link>
        )}
      </ButtonGroup>
    </Flex>
  );
}

export default SignButtons;
