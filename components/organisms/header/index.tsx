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
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";

import { ColorModeSwitcher, Logo } from "../../atoms";
import { NavigationBar, SignButtons } from "../../molecules";
import UserInHeader from "../userInHeader/userInHeader";
import UseAuth from "@/hooks/useAuth";

function Header() {
  const [isLargerScreen] = useMediaQuery("(min-width: 1280px)");
   const [isMediumScreen] = useMediaQuery("(min-Width: 992px) and (max-width: 1279px))");
   const [isSmallScreen] = useMediaQuery("(min-width: 360px) and (max-width: 991px)");
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
    >
      <Logo />
      {isLargerScreen ? (
        <Flex alignItems="center" gap="30px">
          <NavigationBar />
          {user && (
            <UserInHeader
              user={user}
              updateUserProfilePicture={updateUserProfilePicture}
            />
          )}
          {!user && pending && <p>Pending</p>}
          {error && <SignButtons />}
          <ColorModeSwitcher />
        </Flex>
      ) : (
        <>
          <IconButton
            aria-label="Toggle Menu"
            icon={<HamburgerIcon />}
            variant="ghost"
            onClick={() => setIsDrawerOpen(true)}
          />
          <Drawer
            placement="left"
            onClose={handleDrawerClose}
            isOpen={isDrawerOpen}
          >
            <DrawerOverlay>
              <DrawerContent>
                <DrawerCloseButton />
                <DrawerHeader>Menu</DrawerHeader>

                <DrawerBody>
                  <VStack spacing="4" align="stretch">
                    <Divider />
                    <NavigationBar />
                    <Divider />
                    <SignButtons />
                    <Divider />
                    <Text fontWeight="bold">Preferences</Text>
                    <Divider />
                    <ColorModeSwitcher />
                  </VStack>
                </DrawerBody>
              </DrawerContent>
            </DrawerOverlay>
          </Drawer>
        </>
      ) }
    </Flex>
  );
}

export default Header;
