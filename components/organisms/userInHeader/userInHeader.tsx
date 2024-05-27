"use client";
import React, { useState } from "react";
import {
  Flex,
  useColorModeValue,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
  Link,
  Image
} from "@chakra-ui/react";
import { PrimaryTextColors } from "../../../models";
import { usePathname } from "next/navigation";
import UseCookies from "@/hooks/useCookies";

interface IUserInHeaderProps {
  user: {
    firstname: string;
    lastname: string;
    email: string;
    password: string;
  };
  updateUserProfilePicture: (image: string | null) => void;
}

function UserInHeader({ user, updateUserProfilePicture }: IUserInHeaderProps) {
  const borderandTextColor = useColorModeValue(
    PrimaryTextColors.lightMode,
    PrimaryTextColors.darkMode
  );

  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  const handleLogOut = () => {
    UseCookies({ type: "delete" });
    window.location.reload();
  };

  return (
    <Flex>
      {pathname !== "/signin" && (
        <Popover placement="bottom" isOpen={isOpen} onClose={handleOpen}>
          <PopoverTrigger>
            <Flex alignItems="center" cursor="pointer">
              {/* Նկարի հետ կա փոքր խնդիր հետագայում պետք է փոխել */}
              <Image
                src="https://cdn-icons-png.flaticon.com/128/1177/1177568.png"
                alt="Profile Picture"
                boxSize={["35px", "45px", "50px"]}
                borderRadius="full"
                marginRight="20px"
                onClick={handleOpen}
              />
            </Flex>
          </PopoverTrigger>
          <PopoverContent maxW="200px">
            <PopoverBody>
              <Flex
                  alignItems = "center"
                  marginBottom = "10px"
              >
                {/* Նկարի հետ կա փոքր խնդիր հետագայում պետք է փոխել */}

                <Image
                  src="https://cdn-icons-png.flaticon.com/128/1177/1177568.png"
                  alt="Profile Picture"
                  boxSize={["40px", "50px", "60px"]}
                  borderRadius = "full"
                  marginRight = "10px"
                />
                <div>
                  <span>{user.firstname + " " + user.lastname}</span>
                  <span style={{ color: "gray", fontSize: "0.8em" }}></span>
                </div>
              </Flex>

              <div>
                <span
                  style={{ color: "gray", fontSize: "1em", marginLeft: "30px" }}
                ></span>
              </div>
              <span>Account </span>
              <Link 
                href="/user" 
                display={["block", "none", "none"]} 
                color = "gray"
                >
                User{" "}
              </Link>
              <Link
                href="/settings"
                display={["block", "none", "none"]} 
                color = "gray"
              >
                Settings & Privacy
              </Link>

              <Link
                href="/language"
                display={["block", "none", "none"]} 
                color = "gray"
              >
                Language
              </Link>
              <span>Manage </span>
              <Link 
              href="/logout" 
                display={["block", "none", "none"]} 
                color = "gray"
              >
                Link
              </Link>
              <Link
                href="/logout"
                display={["block", "none", "none"]} 
                color = "gray"
                >
                </Link>
              <Link
                onClick={handleLogOut}
                display={["block", "none", "none"]} 
                color = "gray"
                >
                Sign Out
              </Link>
            </PopoverBody>
          </PopoverContent>
        </Popover>
      )}
    </Flex>
  );
}

export default UserInHeader;
