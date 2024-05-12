"use client";

import { Button, ButtonGroup, Flex, useColorModeValue } from "@chakra-ui/react";
import { PrimaryTextColors } from "../../../models";
import { usePathname } from "next/navigation";
import Link from "next/link";

function SignButtons() {
  const borderandTextColor = useColorModeValue(
    PrimaryTextColors.lightMode,
    PrimaryTextColors.darkMode
  );

  const pathname = usePathname();

  const saveCurrentPath = () => {
    sessionStorage.setItem("currentPath", pathname);
  };

  return (
    <Flex>
      <ButtonGroup>
        {pathname !== "/signin" && (
          <Link href="/signin">
            <Button
              background="transparent"
              border={`2px solid ${borderandTextColor}`}
              borderRadius={"50px"}
              color={borderandTextColor}
              onClick={saveCurrentPath}
            >
              Sign In
            </Button>
          </Link>
        )}
        {pathname !== "/signup" && (
          <Link href="/signup">
            <Button
              background="transparent"
              border={`2px solid ${borderandTextColor}`}
              borderRadius={"50px"}
              color={borderandTextColor}
              onClick={saveCurrentPath}
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
