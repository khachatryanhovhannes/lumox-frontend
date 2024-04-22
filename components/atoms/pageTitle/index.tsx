"use client";
import { PrimaryTextColors } from "@/models";
import { Text, useColorModeValue } from "@chakra-ui/react";

interface IPageTitleProps {
  text: string;
}

function PageTitle({ text }: IPageTitleProps) {
  const primaryTextColor = useColorModeValue(
    PrimaryTextColors.lightMode,
    PrimaryTextColors.darkMode
  );

  return (
    <Text textAlign="center" fontSize="40px" color={primaryTextColor}>
      {text}
    </Text>
  );
}

export default PageTitle;
