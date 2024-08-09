/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useState } from "react";
import {
  Flex,
  IconButton,
  useMediaQuery,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  VStack,
  Spinner,
  Box,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";

import { ColorModeSwitcher, Logo } from "../../atoms";
import SignButtons from "../../molecules/signButtons";
import NavigationBar from "../../molecules/navigationBar";
import UserInHeader from "../userInHeader/userInHeader";
import useAuth from "@/hooks/useAuth";

function Header() {
  const [isLargerThan834] = useMediaQuery("(min-width: 834px)");
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const { user, pending, error } = useAuth();

  const handleDrawerClose = () => setIsDrawerOpen(false);
  const handleDrawerOpen = () => setIsDrawerOpen(true);

  return (
    <Flex
      w="100%"
      m="auto"
      p={{ base: "5px", md: "10px", lg: "15px" }} // Responsive padding
      alignItems="center"
      justify="space-between"
      maxW={{ base: "100%", md: "100%", lg: "1920px" }}
    >
      <Logo />
      {isLargerThan834 ? (
        <Flex
          alignItems="center"
          gap={{ base: "10px", md: "20px", lg: "30px" }}
        >
          <NavigationBar />
          {pending && <Spinner />}
          {user && !pending && (
            <UserInHeader user={user} updateUserProfilePicture={() => {}} />
          )}
          {error && !user && <SignButtons />}
          <ColorModeSwitcher />
        </Flex>
      ) : (
        <>
          <Flex alignItems="center">
            {user && !pending && (
              <UserInHeader user={user} updateUserProfilePicture={() => {}} />
            )}
            <IconButton
              aria-label="Open menu"
              icon={<HamburgerIcon />}
              variant="ghost"
              onClick={handleDrawerOpen}
            />
          </Flex>
          <Drawer
            placement="left"
            size={{ base: "full", sm: "sm" }} // Full width on mobile
            onClose={handleDrawerClose}
            isOpen={isDrawerOpen}
          >
            <DrawerOverlay>
              <DrawerContent
                w={{ base: "100%", sm: "200px" }} // Full width on mobile
                h="100vh"
                p={4}
              >
                <DrawerCloseButton
                  position="absolute"
                  top={2}
                  right={2}
                  m={2}
                />
                <Box mb={4}>
                  <ColorModeSwitcher />
                </Box>
                <DrawerHeader fontSize={{ base: "md", lg: "lg" }}>
                  Menu
                </DrawerHeader>
                <DrawerBody>
                  <VStack spacing={4} align="stretch">
                    <NavigationBar
                      direction="column"
                      onLinkClick={handleDrawerClose}
                    />
                    {pending && <Spinner />}
                    {error && !user && <SignButtons />}
                  </VStack>
                </DrawerBody>
              </DrawerContent>
            </DrawerOverlay>
          </Drawer>
        </>
      )}
    </Flex>
  );
}

export default Header;
