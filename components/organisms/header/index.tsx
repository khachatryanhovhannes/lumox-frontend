import { Flex } from "@chakra-ui/react";
import { ColorModeSwitcher, Logo } from "../../atoms";
import { NavigationBar, SignButtons } from "../../molecules";

function Header() {
  return (
    <>
      <Flex
        w="80%"
        m="auto"
        justify="space-between"
        p="10px"
        alignItems="center"
      >
        <Logo />
        <Flex alignItems="center" gap="30px">
          <NavigationBar />
          <SignButtons />
          <ColorModeSwitcher />
        </Flex>
      </Flex>
    </>
  );
}

export default Header;
