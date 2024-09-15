import {
  Box,
  Flex,
  IconButton,
  Heading,
  Divider,
  useColorModeValue,
  Stack,
  Link as ChakraLink,
} from "@chakra-ui/react";
import Link from "next/link";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import ScrollToTopButton from "@/constants/scrool";
import { PrimaryTextColors, SecondaryTextColors } from "@/models";
import { Logo } from "@/components/atoms";

interface FooterProps {
  marginTop?: string;
  paddingY?: string;
  paddingX?: string;
}

function Footer({
  marginTop = "40px",
  paddingY = "8",
  paddingX = "8",
}: FooterProps) {
  const primaryTextColor = useColorModeValue(
    PrimaryTextColors.lightMode,
    PrimaryTextColors.darkMode
  );
  const secondaryTextColor = useColorModeValue(
    SecondaryTextColors.lightMode,
    SecondaryTextColors.darkMode
  );

  return (
    <Box textAlign="center" mt={marginTop} py={paddingY} px={paddingX}>
      <ScrollToTopButton />

      <Box color={secondaryTextColor} py={5} px={6} mt={10}>
        <Flex
          direction={{ base: "column", md: "row" }}
          justifyContent="space-between"
          alignItems="center"
          wrap="wrap"
          mb={6}
        >
          <Box mb={{ base: 4, md: 0 }}>
            {/* Logo */}
            <Logo />
          </Box>
          <Flex gap={4} mb={{ base: 4, md: 0 }}>
            <IconButton
              as={Link}
              href="#"
              aria-label="Facebook"
              icon={<FaFacebook />}
              bg="transparent"
              color={primaryTextColor}
              size={{ base: "sm", md: "md" }}
            />
            <IconButton
              as={Link}
              href="#"
              aria-label="Instagram"
              icon={<FaInstagram />}
              bg="transparent"
              color={primaryTextColor}
              size={{ base: "sm", md: "md" }}
            />
            <IconButton
              as={Link}
              href="#"
              aria-label="LinkedIn"
              icon={<FaLinkedin />}
              bg="transparent"
              color={primaryTextColor}
              size={{ base: "sm", md: "md" }}
            />
          </Flex>
        </Flex>
        <Divider color={secondaryTextColor} my={6} />
        <Stack
          direction={{ base: "column", sm: "row" }}
          justifyContent={{ base: "center", sm: "start" }}
          spacing={4}
          mb={4}
        >
          <ChakraLink as={Link} href="#" color={secondaryTextColor}>
            Support
          </ChakraLink>
          <ChakraLink as={Link} href="#help" color={secondaryTextColor}>
            Help
          </ChakraLink>
          <ChakraLink as={Link} href="#" color={secondaryTextColor}>
            Events
          </ChakraLink>
          <ChakraLink as={Link} href="#" color={secondaryTextColor}>
            Privacy Policy
          </ChakraLink>
          <ChakraLink as={Link} href="#policy" color={secondaryTextColor}>
            Blog
          </ChakraLink>
          <ChakraLink as={Link} href="#blog" color={secondaryTextColor}>
            News
          </ChakraLink>
        </Stack>
      </Box>
    </Box>
  );
}

export default Footer;
