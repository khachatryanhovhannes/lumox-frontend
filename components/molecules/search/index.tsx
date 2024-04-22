"use client";

import { SearchIcon } from "@chakra-ui/icons";
import {
  Input,
  InputGroup,
  InputLeftElement,
  useColorModeValue,
} from "@chakra-ui/react";
import { PrimaryTextColors } from "../../../models";

function Search() {
  const borderColor = useColorModeValue(
    PrimaryTextColors.lightMode,
    PrimaryTextColors.darkMode
  );

  const textColors = useColorModeValue("black", "white");

  return (
    <InputGroup position="relative" maxWidth="405px" m="auto">
      <InputLeftElement
        position="absolute"
        pointerEvents="none"
        left="4px"
        top="50%"
        transform="translateY(-50%)"
      >
        <SearchIcon color="gray.300" />
      </InputLeftElement>
      <Input
        placeholder="Search..."
        bg="transparent"
        color={textColors}
        borderRadius="full"
        width="100%"
        borderColor={borderColor}
        borderWidth="2px"
        paddingLeft="40px" // Adjusted to accommodate the icon
        margin="auto"
      />
    </InputGroup>
  );
}

export default Search;
