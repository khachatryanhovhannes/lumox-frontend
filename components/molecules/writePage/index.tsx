"use client";

import React, { useRef, useState } from "react";
import { Flex, Button, Image, Textarea, Text } from "@chakra-ui/react";
import Footer from "../Footer/footer";

function WritePage() {
  const [coverPhoto, setCoverPhoto] = useState<string>("");
  const [headerText, setHeaderText] = useState<string>("");
  const [postContent, setPostContent] = useState<string>("");
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleAddImage = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const result = reader.result;
        if (typeof result === "string") {
          setCoverPhoto(result);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handlePublish = () => {
    if (headerText.trim() && postContent.trim()) {
      const existingPosts = JSON.parse(localStorage.getItem("posts") || "[]");
      const newPost = {
        coverPhoto,
        headerText,
        postContent,
      };

      existingPosts.push(newPost);
      localStorage.setItem("posts", JSON.stringify(existingPosts));

      setCoverPhoto("");
      setHeaderText("");
      setPostContent("");
      setSuccessMessage("Successful");
      setTimeout(() => setSuccessMessage(null), 3000); // Hide the message after 3 seconds
    } else {
      setSuccessMessage("Please fill out all fields");
      setTimeout(() => setSuccessMessage(null), 3000); // Hide the message after 3 seconds
    }
  };

  return (
    <>
      <Flex direction="column" alignItems="center" px={8} py={8}>
        <input
          type="file"
          accept="image/*"
          style={{ display: "none" }}
          ref={fileInputRef}
          onChange={handleFileChange}
        />
        {coverPhoto && (
          <Image
            src={coverPhoto}
            alt="Cover Photo"
            mb={8}
            boxSize="300px"
            objectFit="cover"
          />
        )}
        <Flex justifyContent="space-around" width="100%" px={8} py={8}>
          <Button mr={8} onClick={handleAddImage}>
            Add a Cover Photo
          </Button>
          <Button mr={8} onClick={handlePublish}>
            Publish
          </Button>
        </Flex>
        <Textarea
          placeholder="Enter your header here"
          mt={8}
          width="100%"
          maxWidth="800px"
          onChange={(e) => setHeaderText(e.target.value)}
          value={headerText}
        />
        <Textarea
          placeholder="Write your post content here ..."
          mt={8}
          width="100%"
          maxWidth="800px"
          onChange={(e) => setPostContent(e.target.value)}
          value={postContent}
        />
        {successMessage && (
          <Text
            mt={4}
            color={successMessage === "Successful" ? "green.500" : "red.500"}
          >
            {successMessage}
          </Text>
        )}
      </Flex>
      <Footer />
    </>
  );
}

export default WritePage;
