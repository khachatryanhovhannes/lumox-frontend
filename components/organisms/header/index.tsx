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
  Text,
  Divider,
  Spinner,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";

import { ColorModeSwitcher, Logo } from "../../atoms";
import { NavigationBar, SignButtons } from "../../molecules";
import UserInHeader from "../userInHeader/userInHeader";
import UseAuth from "@/hooks/useAuth";

function Header() {
  const [isLargerThan834] = useMediaQuery("(min-width: 834px)");
  const [isLargerThan390] = useMediaQuery("(min-width: 390px)");

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const { user, pending, error } = UseAuth();

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
              variant="ghost"
              onClick={() => setIsDrawerOpen(true)}
            />
          </Flex>
          <Drawer
            placement="left"
            onClose={handleDrawerClose}
            isOpen={isDrawerOpen}
          >
            <DrawerOverlay>
              <DrawerContent h="100%" w="200vh">
                <DrawerCloseButton />
                <DrawerHeader>Menu</DrawerHeader>

                <DrawerBody>
                  <VStack spacing="4" align="stretch">
                    <Divider />
                    <NavigationBar direction="column" />
                    <Divider />
                    {pending && <Spinner />}
                    {error && !user && <SignButtons />}
                    <ColorModeSwitcher />
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
