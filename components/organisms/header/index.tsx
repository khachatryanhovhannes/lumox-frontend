"use client";
import { useState } from "react";
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

  const updateUserProfilePicture = (image: string | null) => {};

  const handleDrawerClose = () => {
    setIsDrawerOpen(false);
  };

  const handleDrawerOpen = () => {
    setIsDrawerOpen(true);
  };

  return (
    <Flex
      w="100%"
      m="auto"
      justify="space-between"
      p="10px"
      alignItems="center"
      maxW={{ sm: "100%", md: "100%", lg: "1920px" }}
    >
      <Logo />
      {isLargerThan834 ? (
        <Flex alignItems="center" gap="30px">
          <NavigationBar />
          {pending && <Spinner />}
          {user && !pending && (
            <UserInHeader
              user={user}
              updateUserProfilePicture={updateUserProfilePicture}
            />
          )}
          {error && !user && <SignButtons />}
          <ColorModeSwitcher />
        </Flex>
      ) : (
        <>
          <Flex alignItems="center">
            {user && !pending && (
              <img
                src="https://cdn-icons-png.flaticon.com/128/1177/1177568.png"
                alt="Profile Picture"
                style={{
                  width: "35px",
                  height: "35px",
                  borderRadius: "80%",
                  marginRight: "10px",
                }}
              />
            )}
            <IconButton
              aria-label="Toggle Menu"
              icon={<HamburgerIcon />}
              mb={80}
              variant="ghost"
              onClick={handleDrawerOpen}
            />
          </Flex>
          <Drawer
            placement="left"
            size="md"
            onClose={handleDrawerClose}
            isOpen={isDrawerOpen}
          >
            <DrawerOverlay>
              <DrawerContent h="100%" w="200vh">
                <DrawerCloseButton />
                <Box justifySelf="flex-start">
                  <ColorModeSwitcher />
                </Box>
                <DrawerHeader>Menu</DrawerHeader>
                <DrawerBody>
                  <VStack spacing="4" align="stretch">
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
