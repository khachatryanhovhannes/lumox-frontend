// components/molecules/footer/Footer.tsx

import {
  Box,
  Flex,
  IconButton,
  Heading,
  Divider,
  useColorModeValue,
} from "@chakra-ui/react";
import Link from "next/link";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import ScrollToTopButton from "@/constants/scrool";
import { PrimaryTextColors, SecondaryTextColors } from "@/models";

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
        <Flex justifyContent="space-between" alignItems="center" wrap="wrap">
          <Box>
            {/* Logo */}
            <Heading size="md" color={primaryTextColor}>
              LUMOOX
            </Heading>
          </Box>
          <Flex gap={4}>
            <IconButton
              as={Link}
              href="#"
              aria-label="Facebook"
              icon={<FaFacebook />}
              bg="transparent"
              color={primaryTextColor}
            />
            <IconButton
              as={Link}
              href="#"
              aria-label="Instagram"
              icon={<FaInstagram />}
              bg="transparent"
              color={primaryTextColor}
            />
            <IconButton
              as={Link}
              href="#"
              aria-label="LinkedIn"
              icon={<FaLinkedin />}
              bg="transparent"
              color={primaryTextColor}
            />
          </Flex>
        </Flex>
        <Divider color={secondaryTextColor} my={6} />
        <Flex justifyContent="left" gap={10} flexWrap="wrap">
          <Link href="#" color={secondaryTextColor}>
            Support
          </Link>
          <Link href="#help" color={secondaryTextColor}>
            Help
          </Link>
          <Link href="#" color={secondaryTextColor}>
            Events
          </Link>
          <Link href="#" color={secondaryTextColor}>
            Privacy Policy
          </Link>
          <Link href="#policy" color={secondaryTextColor}>
            Blog
          </Link>
          <Link href="#blog" color={secondaryTextColor}>
            News
          </Link>
        </Flex>
      </Box>
    </Box>
  );
}

export default Footer;
