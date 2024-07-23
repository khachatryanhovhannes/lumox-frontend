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
import { PrimaryTextColors } from "@/models";

function Footer() {
  const primaryTextColor = useColorModeValue(
    PrimaryTextColors.lightMode,
    PrimaryTextColors.darkMode
  );
  const secondaryTextColors = useColorModeValue("gray.800", "gray.200");

  return (
    <Box textAlign="center" mt="40px">
      <ScrollToTopButton />

      <Box color={secondaryTextColors} py={5} px={6} mt={10}>
        <Flex justifyContent="space-between" alignItems="center" wrap="wrap">
          <Box>
            {/* Logo */}
            <Heading size="md">LUMOOX</Heading>
          </Box>
          <Flex gap={4}>
            <IconButton
              as={Link}
              href="https://www.facebook.com/Lumox"
              aria-label="Facebook"
              icon={<FaFacebook />}
            />
            <IconButton
              as={Link}
              href="https://www.instagram.com/Lumox"
              aria-label="Instagram"
              icon={<FaInstagram />}
            />
            <IconButton
              as={Link}
              href="https://www.linkedin.com/company/Lumox"
              aria-label="LinkedIn"
              icon={<FaLinkedin />}
            />
          </Flex>
        </Flex>
        <Divider color={secondaryTextColors} my={6} />
        <Flex justifyContent="left" gap={10}>
          <Link href="#" color={secondaryTextColors}>
            Support
          </Link>
          <Link href="#help" color={secondaryTextColors}>
            Help
          </Link>
          <Link href="#" color={secondaryTextColors}>
            Events
          </Link>
          <Link href="#" color={secondaryTextColors}>
            Privacy Policy
          </Link>
          <Link href="#policy" color={secondaryTextColors}>
            Blog
          </Link>
          <Link href="#blog" color={secondaryTextColors}>
            News
          </Link>
        </Flex>
      </Box>
    </Box>
  );
}

export default Footer;
