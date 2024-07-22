/* eslint-disable @next/next/no-img-element */
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

  const handleToggleOpen = () => {
    setIsOpen(!isOpen);
  };

  const handleLogOut = () => {
    UseCookies({ type: "delete" });
    window.location.reload();
  };

  return (
    <Flex>
      {pathname !== "/signin" && (
        <Popover placement="bottom" isOpen={isOpen} onClose={handleToggleOpen}>
          <PopoverTrigger>
            <Flex alignItems="center" cursor="pointer">
              <img
                src="https://cdn-icons-png.flaticon.com/128/1177/1177568.png"
                alt="Profile Picture"
                style={{
                  width: "35px",
                  height: "35px",
                  borderRadius: "50%",
                  marginRight: "20px",
                  marginBottom: "80px",
                }}
                onClick={handleToggleOpen}
              />
            </Flex>
          </PopoverTrigger>
          <PopoverContent maxW="200px" mt={-20}>
            <PopoverBody>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: "15px",
                }}
              >
                <div>
                  <span>
                    {user.firstname} {user.lastname}
                  </span>
                </div>
              </div>
              <span>Account </span>
              <Link href="/user" style={{ display: "block", color: "gray" }}>
                User
              </Link>
              <Link
                href="/settings"
                style={{ display: "block", color: "gray" }}
              >
                Settings & Privacy
              </Link>
              <Link
                href="/language"
                style={{ display: "block", color: "gray" }}
              >
                Language
              </Link>
              <span>Manage </span>
              <Link
                onClick={handleLogOut}
                style={{ display: "block", color: "gray" }}
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
