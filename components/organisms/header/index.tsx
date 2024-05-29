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
  const [isLargerThan768] = useMediaQuery("(min-width: 768px)");
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const { user, pending, error } = UseAuth();

  const updateUserProfilePicture = (image: string | null) => {};

  return (
    <Flex
      w="100%"
      m="auto"
      justify="space-between"
      p="10px"
      alignItems="center"
    >
      <Logo />
      {isLargerThan768 ? (
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
            onClose={() => setIsDrawerOpen(false)}
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
      )}
    </Flex>
  );
}

export default Header;
