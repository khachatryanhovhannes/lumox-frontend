"use client";
import { PrimaryTextColors, SecondaryTextColors } from "@/models";
import { Box, Heading, Text, useColorModeValue, Image, Button, Flex } from "@chakra-ui/react";
import { Inter } from "next/font/google";
import Search from "../search";
const inter = Inter({ subsets: ["latin"] });

interface ProfilePictureProps {
  src: string;
  alt: string;
}

function ProfilePicture({src, alt}: ProfilePictureProps){
  return (
      <Image 
        src={src} 
        alt={alt} 
        borderRadius="50%" 
        boxSize="150px"
        objectFit="cover"
        zIndex={1}
        position="relative"
        top= "50px"
       />
  )
}

interface CoverPhotoProps {
  src: string;
  alt: string;
}

function CoverPhoto ({src, alt} : CoverPhotoProps){
  return(
      <Box position="relative">
          <Image 
       src={src} 
       alt={alt} 
       objectFit="cover" 
       w="100%" 
       h="200px"
       position="relative"
       />

       <Button
        position="absolute"
        bottom={4}
        right={4}
        size="sm"
       >
          Chaneg Cover Photo
       </Button>
      </Box>
  )
}

function UserPage() {
  const primaryTextColors = [
    useColorModeValue(PrimaryTextColors.lightMode, PrimaryTextColors.darkMode),
    useColorModeValue(PrimaryTextColors.lightMode, PrimaryTextColors.darkMode),
    useColorModeValue(PrimaryTextColors.lightMode, PrimaryTextColors.darkMode),
    useColorModeValue(PrimaryTextColors.lightMode, PrimaryTextColors.darkMode),
    useColorModeValue(PrimaryTextColors.lightMode, PrimaryTextColors.darkMode),
  ];

  const secondaryTextColors = [
    useColorModeValue(
      SecondaryTextColors.lightMode,
      SecondaryTextColors.darkMode
    ),
    useColorModeValue(
      SecondaryTextColors.lightMode,
      SecondaryTextColors.darkMode
    ),
    useColorModeValue(
      SecondaryTextColors.lightMode,
      SecondaryTextColors.darkMode
    ),
    useColorModeValue(
      SecondaryTextColors.lightMode,
      SecondaryTextColors.darkMode
    ),
    useColorModeValue(
      SecondaryTextColors.lightMode,
      SecondaryTextColors.darkMode
    ),
  ];


  

  return (
    <Box p={4}>
      <CoverPhoto 
             src='https://img.freepik.com/free-photo/abstract-luxury-blur-grey-color-gradient-used-as-background-studio-wall-display-your-products_1258-52609.jpg'
             alt='Background Picture'
            />
            
            <Flex
             justifyContent="space-between"
             align="center"
             marginBottom="20px"
             position="absolute"
             top="50%"
             left={10}
             right={0}
             bottom={0}
             p={4}
             zIndex={2}
            >
                <ProfilePicture 
                 src='https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png'
                 alt='Profile Picture'
                />
            </Flex>
    </Box>
  );
}

export default UserPage;
