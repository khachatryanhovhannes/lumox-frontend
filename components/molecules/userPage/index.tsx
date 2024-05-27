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
import Search from "../search"; 
import { useEffect, useRef, useState } from "react"; 
import Link from "next/link";
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
      borderRadius="50%" 
      boxSize={{base:"100px", sm:"120px", md:"150px"}} 
      objectFit="cover" 
      zIndex={1} 
      position="relative" 
      top={{base:"20px", sm:"30px", md:"50px"}} 
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
    <Box position="relative"> 
      <Image 
        src={src} 
        alt={alt} 
        objectFit="cover" 
        w="100%" 
        h={{base:"150px", sm:"180px", md:"200px" }}
        position="relative" 
      /> 
 
      <Button 
        position="absolute" 
        bottom={4} 
        right={4} 
        size="sm" 
        zIndex={3} 
        onClick={onChangePhoto} 
      > 
        Change Cover Photo 
      </Button> 
    </Box> 
  ); 
} 
 
function UserPage() { 
  const [coverPhoto, setCoverPhoto] = useState<string>(""); 
 
  const fileInputRef = useRef<HTMLInputElement>(null); 
 
  useEffect(() => { 
    if (typeof window !== "undefined") { 
      const storedCoverPhoto = localStorage.getItem("coverPhoto"); 
      setCoverPhoto( 
        storedCoverPhoto || 
          "https://img.freepik.com/free-photo/abstract-luxury-blur-grey-color-gradient-used-as-background-studio-wall-display-your-products_1258-52609.jpg" 
      ); 
    } 
  }, []); 
 
  const handleCoverPhotoChange = ( 
    event: React.ChangeEvent<HTMLInputElement> 
  ) => { 
    if (event.target.files && event.target.files[0]) { 
      const reader = new FileReader(); 
      reader.onload = (e) => { 
        if (e.target && typeof e.target.result === "string") { 
          localStorage.setItem("coverPhoto", e.target.result); 
          setCoverPhoto(e.target.result); 
        } 
      }; 
      reader.readAsDataURL(event.target.files[0]); 
    } 
  }; 
 
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
        src={coverPhoto} 
        alt="Background Picture" 
        onChangePhoto={() => fileInputRef.current?.click()} 
      /> 
 
      <Flex 
        justifyContent="space-between" 
        align="center" 
        marginBottom="20px" 
        position="absolute" 
        top={{base:"100px", md:"150px"}}
        left={10} 
        right={0} 
        bottom={0} 
        p={4} 
        zIndex={2} 
      > 
        <ProfilePicture 
          src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" 
          alt="Profile Picture" 
        /> 
      </Flex> 
      <Heading
      as="h1"
      size="lg"
      ml={{base:"150px", sm:"180px", md:"230px"}}
      mt="20px"
      position="absolute"
      >
        UserName
      </Heading>
      <HStack
       spacing={{base:"10px", sm:"20px", md:"80px"}}
       justifyContent="center"
       mt={20}
       position="absolute"
       left={0}
       right={0}
      >
        <Link href="#"> TimeLine </Link>
        <Link href="#"> Booking History </Link>
        <Link href="#"> My Favourites </Link>
        <Link href="#"> Account Settings </Link>
      </HStack>
      <Input 
        type="file" 
        ref={fileInputRef} 
        style={{ display: "none" }}
        onChange={handleCoverPhotoChange} 
        /> 
      </Box> 
    ); 
  } 
   
  export default UserPage;