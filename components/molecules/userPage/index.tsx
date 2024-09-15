"use client";

import { PrimaryTextColors, SecondaryTextColors } from "@/models";
import {
  Box,
  Heading,
  Text,
  useColorModeValue,
  Image,
  Button,
  Flex,
  Input,
  HStack,
} from "@chakra-ui/react";
import { Inter } from "next/font/google";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import ScrollToTopButton from "@/constants/scrool";
import Footer from "../Footer/footer";
import { getMe } from "../../../service/api/userService/index"; // Import getMe function

const inter = Inter({ subsets: ["latin"] });

interface ProfilePictureProps {
  src: string;
  alt: string;
}

function ProfilePicture({ src, alt }: ProfilePictureProps) {
  return (
    <Image
      src={src}
      alt={alt}
      borderRadius="full"
      boxSize={{ base: "100px", sm: "120px", md: "150px" }}
      objectFit="cover"
    />
  );
}

interface CoverPhotoProps {
  src: string;
  alt: string;
  onChangePhoto: () => void;
}

function CoverPhoto({ src, alt, onChangePhoto }: CoverPhotoProps) {
  return (
    <Box position="relative" mb={10}>
      <Image src={src} alt={alt} w="full" h="250px" objectFit="cover" />
      <Button
        position="absolute"
        bottom={4}
        right={4}
        size="sm"
        zIndex={2}
        onClick={onChangePhoto}
      >
        Change Cover Photo
      </Button>
    </Box>
  );
}

function UserPage() {
  const primaryTextColors = useColorModeValue("gray.800", "white");

  const [coverPhoto, setCoverPhoto] = useState<string>("");
  const [user, setUser] = useState<{
    username: string;
    profilePicture: string;
  } | null>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await getMe(); // Fetch user data using getMe
        const userData = response.data;
        setUser({
          username: `${userData.firstname} ${userData.lastname}`,
          profilePicture:
            userData.profilePicture ||
            "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
        });
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();

    if (typeof window !== "undefined") {
      const storedCoverPhoto = localStorage.getItem("coverPhoto");
      setCoverPhoto(
        storedCoverPhoto ||
          "https://img.freepik.com/free-/abstract-luxury-blur-grey-color-gradient-used-as-background-studio-wall-display-your-products_1258-52609.jpg"
      );
    }
  }, []);

  useEffect(() => {
    const storedImage = localStorage.getItem("profilePicture");
    if (storedImage) {
      setSelectedImage(storedImage);
    }
  }, []);

  const handleCoverPhotoChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (e) => {
        if (e.target && typeof e.target.result === "string") {
          console.log("Selected file:", e.target.result); // Debugging log
          localStorage.setItem("coverPhoto", e.target.result);
          setCoverPhoto(e.target.result);
        }
      };
      reader.readAsDataURL(event.target.files[0]);
    }
  };

  const handleProfilePictureChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (e) => {
        if (e.target && typeof e.target.result === "string") {
          console.log("Profile picture file:", e.target.result); // Debugging log
          localStorage.setItem("profilePicture", e.target.result);
          setSelectedImage(e.target.result);
        }
      };
      reader.readAsDataURL(event.target.files[0]);
    }
  };

  useEffect(() => {
    const firstName = localStorage.getItem("firstName");
    const lastName = localStorage.getItem("lastName");
    if (firstName && lastName) {
      setUser((prevUser) => ({
        ...prevUser,
        username: `${firstName} ${lastName}`,
        profilePicture: prevUser?.profilePicture || "", // Հաճախորդի նկարը ապահովում ենք պարունակող արժեքով
      }));
    }
  }, []);

  return (
    <Box minH="100vh" display="flex" flexDirection="column">
      <Box flex="1">
        <CoverPhoto
          src={coverPhoto}
          alt="Cover Photo"
          onChangePhoto={() => fileInputRef.current?.click()}
        />
        <Flex
          justifyContent="center"
          align="center"
          marginBottom="20px"
          position="absolute"
          top="130px" // Adjusted for more spacing
          right={1300}
          bottom={170}
          p={1}
          zIndex={2}
        >
          {user && (
            <ProfilePicture
              src={selectedImage || user.profilePicture}
              alt="Profile Picture"
            />
          )}
        </Flex>

        <Box
          width="83%"
          // mx="auto"
          mt={-7}
          ml={250}
          color={primaryTextColors}
          borderBottom="3px solid"
        >
          <Box
            width="3%"
            // mx="auto"

            mr={200}
            color={primaryTextColors}
            borderBottom="3px solid"
          ></Box>
        </Box>

        {user && (
          <Heading
            as="h1"
            size="lg"
            ml="230px"
            mt="-0px"
            position="absolute"
            color={primaryTextColors}
          >
            {user.username}
          </Heading>
        )}
        <HStack
          spacing="20px"
          justifyContent="center"
          mt={20}
          position="absolute"
          left={0}
          right={0}
        >
          <Link href="#">TimeLine</Link>
          <Link href="#">Booking History</Link>
          <Link href="#">My Favourites</Link>
          <Link href="#">Account Settings</Link>
        </HStack>
        <Input
          type="file"
          ref={fileInputRef}
          style={{ display: "none" }}
          onChange={handleCoverPhotoChange}
        />
        <Box p={4}>
          <ScrollToTopButton />
        </Box>
        {/* <Footer /> */}
      </Box>
    </Box>
  );
}

export default UserPage;
