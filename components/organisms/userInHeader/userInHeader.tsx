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
              <img
                src="https://cdn-icons-png.flaticon.com/128/1177/1177568.png"
                alt="Profile Picture"
                style={{
                  width: "35px",
                  height: "35px",
                  borderRadius: "80%",
                  marginRight: "20px",
                }}
                onClick={handleOpen}
              />
            </Flex>
          </PopoverTrigger>
          <PopoverContent maxW="200px">
            <PopoverBody>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: "10px",
                }}
              >

                <div>
                  <span>{user.firstname + " " + user.lastname}</span>
                  <span style={{ color: "gray", fontSize: "0.8em" }}></span>
                </div>
              </div>

              <div>
                <span
                  style={{ color: "gray", fontSize: "1em", marginLeft: "30px" }}
                ></span>
              </div>
              <span>Account </span>
              <Link href="/user" style={{ display: "block", color: "gray" }}>
                User{" "}
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
              <Link href="/logout" style={{ display: "block", color: "gray" }}>
                Link
              </Link>
              <Link
                href="/logout"
                style={{ display: "block", color: "gray" }}
              ></Link>
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