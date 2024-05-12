"use client";
// components/organisms/userInHeader/userInHeader.tsx
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
  updateUserProfilePicture: (image: string | null) => void; // Function to update profile picture
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
              <img
                src="https://cdn-icons-png.flaticon.com/128/1177/1177568.png" // Replace with actual image URL
                alt="Profile Picture"
                style={{
                  width: "45px",
                  height: "45px",
                  borderRadius: "90%",
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
                <img
                  src="https://cdn-icons-png.flaticon.com/128/1177/1177568.png"
                  alt="Profile Picture"
                  style={{
                    width: "50px",
                    height: "50px",
                    borderRadius: "50%",
                    marginRight: "10px",
                  }}
                />
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
              <Link
                href="/settings"
                style={{ display: "block", color: "gray" }}
              >
                Settings & Privacy
              </Link>
              <Link href="/  " style={{ display: "block", color: "gray" }}>
                Help
              </Link>
              <Link
                href="/chideminch"
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
