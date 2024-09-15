"use client";
import React, { useEffect, useState, useCallback } from "react";
import {
  Box,
  Heading,
  Text,
  Image,
  Flex,
  Avatar,
  Button,
  IconButton,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useToast,
  Grid,
  Link,
} from "@chakra-ui/react";
import { FaTrashAlt } from "react-icons/fa";
import Footer from "@/components/molecules/Footer/footer";
import ScrollToTopButton from "@/constants/scrool";
import { Search } from "@/components";

interface Post {
  authorName: string;
  authorProfilePicture: string;
  publishDate: string;
  coverPhoto?: string;
  headerText?: string;
  postContent: string;
}

function Home() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [selectedPost, setSelectedPost] = useState<Post | null>(null);
  const [expandedPosts, setExpandedPosts] = useState<Set<number>>(new Set());
  const [visiblePostsCount, setVisiblePostsCount] = useState(3);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();

  useEffect(() => {
    try {
      const storedPosts = JSON.parse(localStorage.getItem("posts") || "[]");
      setPosts(storedPosts);
    } catch (error) {
      console.error("Error loading posts from localStorage:", error);
    }
  }, []);

  const handleImageClick = useCallback(
    (post: Post) => {
      setSelectedPost(post);
      onOpen();
    },
    [onOpen]
  );

  const handleDelete = useCallback(
    (postToDelete: Post) => {
      const updatedPosts = posts.filter((post) => post !== postToDelete);
      setPosts(updatedPosts);
      localStorage.setItem("posts", JSON.stringify(updatedPosts));
      toast({
        title: "Post deleted.",
        description: "The selected post has been deleted.",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
    },
    [posts, toast]
  );

  const toggleExpand = (index: number) => {
    setExpandedPosts((prevExpanded) => {
      const newExpanded = new Set(prevExpanded);
      if (newExpanded.has(index)) {
        newExpanded.delete(index);
      } else {
        newExpanded.add(index);
      }
      return newExpanded;
    });
  };

  const handleShowMore = () => {
    setVisiblePostsCount((prevCount) => prevCount + 3);
  };

  return (
    <Box textAlign="center" p={[4, 6, 8, 10]}>
      {/* New Content Start */}
      <Heading
        fontFamily="Lateef"
        color="primaryTextColors" // Replace with actual color variable
        fontSize={["30px", "35px", "40px", "45px", "80px"]}
        fontWeight="normal"
        mt={["20px", "25px", "30px", "35px", "40px"]}
        lineHeight={["1", "0.9", "0.8", "0.7", "0.3"]}
      >
        Learn to code for free
      </Heading>
      <Text
        fontSize={["16px", "18px", "20px", "22px", "24px"]}
        fontWeight="100"
        lineHeight={["1.2", "1.3", "1.4", "1.5", "1.6"]}
        color="secondaryTextColors" // Replace with actual color variable
        mt={["15px", "20px", "25px", "30px", "35px"]}
      >
        Join the millions learning to code with Lumox for free.
      </Text>
      <Box mt="30px">
        <Search />
      </Box>
      <Box mt="50px" display="flex" justifyContent="center" flexWrap="wrap">
        {[
          "Coderepublic",
          "Javascript",
          "Programming",
          "Linux",
          "LinusTorvalds",
          "Coderepublic",
          "Javascript",
          "Programming",
          "Linux",
          "LinusTorvalds",
          "Coderepublic",
          "Javascript",
        ].map((link, index) => (
          <Link
            key={index}
            href="#"
            color="secondaryTextColors" // Replace with actual color variable
            mx="20px"
            my="10px"
          >
            {link}
          </Link>
        ))}
      </Box>

      <Box p={4}>
        <ScrollToTopButton />
      </Box>
      {/* New Content End */}

      {/* Existing Posts Section */}
      <Flex direction="column" gap={4} mb="50px">
        {posts.slice(0, visiblePostsCount).map((post, index) => (
          <Flex
            key={index}
            p={4}
            shadow="md"
            borderWidth="1px"
            borderRadius="lg"
            overflow="hidden"
            align="center"
            maxW="100%"
            textAlign="left"
            cursor="pointer"
            onClick={() => handleImageClick(post)}
          >
            <Box w="100%">
              {/* Author Information */}
              <Flex align="center" mb={4}>
                <Avatar
                  src={post.authorProfilePicture || "default-profile-pic.jpg"}
                  name={post.authorName}
                  size="sm"
                  mr={3}
                />
                <Box>
                  <Text fontWeight="bold">{post.authorName}</Text>
                  <Text fontSize="sm" color="gray.500">
                    {new Date(post.publishDate).toLocaleDateString()}
                  </Text>
                </Box>
              </Flex>

              {/* Image and Text */}
              <Flex align="center">
                {post.coverPhoto && (
                  <Box
                    position="relative"
                    flexShrink={0}
                    mr={4}
                    w="45%"
                    h="auto"
                  >
                    <Image
                      src={post.coverPhoto}
                      alt="Cover Photo"
                      width="100%"
                      height="auto"
                      objectFit="cover"
                      borderRadius="md"
                    />
                    <IconButton
                      aria-label="Delete post"
                      icon={<FaTrashAlt />}
                      size="sm"
                      colorScheme="red"
                      position="absolute"
                      top={2}
                      right={2}
                      zIndex={1}
                      onClick={(e) => {
                        e.stopPropagation();
                        handleDelete(post);
                      }}
                    />
                  </Box>
                )}

                <Box flex="1">
                  {post.headerText && (
                    <Heading fontSize="lg">{post.headerText}</Heading>
                  )}
                  <Text mt={2} fontSize="md" color="gray.600">
                    {expandedPosts.has(index)
                      ? post.postContent
                      : `${post.postContent
                          .split("\n")
                          .slice(0, 10)
                          .join("\n")}...`}
                  </Text>
                  <Button
                    mt={2}
                    size="sm"
                    onClick={() => toggleExpand(index)}
                    variant="link"
                  >
                    {expandedPosts.has(index) ? "Read Less" : "Read More"}
                  </Button>
                </Box>
              </Flex>
            </Box>
          </Flex>
        ))}
      </Flex>

      {/* Show More Button */}
      {posts.length > visiblePostsCount && (
        <Button
          onClick={handleShowMore}
          colorScheme="blue"
          variant="outline"
          borderRadius="full"
        >
          Show More
        </Button>
      )}

      {/* Post Detail Modal */}
      {selectedPost && (
        <Modal isOpen={isOpen} onClose={onClose} size="lg">
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>{selectedPost.headerText}</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Flex direction="column" align="center">
                {selectedPost.coverPhoto && (
                  <Image
                    src={selectedPost.coverPhoto}
                    alt="Cover Photo"
                    mb={4}
                    borderRadius="md"
                  />
                )}
                <Text>{selectedPost.postContent}</Text>
              </Flex>
            </ModalBody>
          </ModalContent>
        </Modal>
      )}

      <Footer />
    </Box>
  );
}

export default Home;
