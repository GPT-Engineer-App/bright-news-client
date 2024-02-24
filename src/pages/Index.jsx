import React, { useState, useEffect } from "react";
import { Box, Heading, IconButton, useColorMode, VStack, Text, Divider, useColorModeValue, Link, Spinner, useToast } from "@chakra-ui/react";
import { FaSun, FaMoon, FaRedo } from "react-icons/fa";

// Replace with the actual API endpoint
const HN_API_URL = "https://hacker-news.firebaseio.com/v0/topstories.json";

const Index = () => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { colorMode, toggleColorMode } = useColorMode();
  const toast = useToast();

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(HN_API_URL);
      const postIds = await response.json();
      const topTenPostIds = postIds.slice(0, 10); // Get top 10 posts for brevity
      const postPromises = topTenPostIds.map((id) => fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`).then((res) => res.json()));
      const postsData = await Promise.all(postPromises);
      setPosts(postsData);
    } catch (error) {
      toast({
        title: "Error fetching posts.",
        description: error.message,
        status: "error",
        duration: 9000,
        isClosable: true,
      });
    }
    setIsLoading(false);
  };

  return (
    <Box>
      <Header onRefresh={fetchPosts} />
      {isLoading ? (
        <Box display="flex" justifyContent="center" mt="20">
          <Spinner size="xl" />
        </Box>
      ) : (
        <VStack spacing={4} divider={<Divider />} p={4}>
          {posts.map((post) => (
            <PostItem key={post.id} post={post} />
          ))}
        </VStack>
      )}
    </Box>
  );
};

const Header = ({ onRefresh }) => {
  const { colorMode, toggleColorMode } = useColorMode();
  const bg = useColorModeValue("orange.300", "orange.600");
  return (
    <Box bg={bg} px={4} py={3} display="flex" justifyContent="space-between" alignItems="center">
      <Heading size="lg" color="white">
        SpectaculrNews
      </Heading>
      <IconButton icon={colorMode === "light" ? <FaMoon /> : <FaSun />} onClick={toggleColorMode} colorScheme="whiteAlpha" mr={2} />
      <IconButton icon={<FaRedo />} onClick={onRefresh} colorScheme="whiteAlpha" />
    </Box>
  );
};

const PostItem = ({ post }) => {
  const titleColor = useColorModeValue("gray.700", "gray.100");
  const infoColor = useColorModeValue("gray.500", "gray.400");

  return (
    <Box w="full">
      <Link href={post.url} isExternal _hover={{ textDecoration: "none" }}>
        <Text fontSize="lg" fontWeight="bold" color={titleColor}>
          {post.title}
        </Text>
        <Text fontSize="sm" color={infoColor}>
          {post.score} points by {post.by}
        </Text>
      </Link>
    </Box>
  );
};

export default Index;
