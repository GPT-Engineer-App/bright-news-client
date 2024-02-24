import React, { useState, useEffect } from "react";
import { Box, Heading, IconButton, useColorMode, VStack, Text, Divider, useColorModeValue, Link, Spinner, useToast } from "@chakra-ui/react";
import { FaSun, FaMoon, FaRedo, FaMicrochip, FaRocket } from "react-icons/fa";

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
        <VStack spacing={8} divider={<Divider borderColor="gray.200" />} p={8}>
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
    <Box bg="gray.100" px={4} py={4} display="flex" justifyContent="space-between" alignItems="center" boxShadow="sm">
      <Heading size="lg" color="white">
        SpectaculrNews
      </Heading>
      <IconButton icon={colorMode === "light" ? <FaMoon /> : <FaSun />} onClick={toggleColorMode} colorScheme="whiteAlpha" mr={2} />
      <IconButton icon={<FaRedo />} onClick={onRefresh} colorScheme="whiteAlpha" />
    </Box>
  );
};

import TeaserImage from "../components/TeaserImage.jsx";

const PostItem = ({ post }) => {
  const titleColor = useColorModeValue("gray.700", "gray.100");
  const infoColor = useColorModeValue("gray.500", "gray.400");
  const techKeywords = ["tech", "future"];
  const icon = techKeywords.some((keyword) => post.title.toLowerCase().includes(keyword)) ? FaMicrochip : FaRocket;

  return (
    <Box w="full" bg="gray.50" p={6} shadow="lg" borderRadius="lg" mb={6} transition="transform 0.2s, box-shadow 0.2s" _hover={{ transform: "translateY(-4px)", shadow: "xl" }}>
      <TeaserImage title={post.title} icon={icon} />
      <Link href={post.url} isExternal _hover={{ textDecoration: "none" }}>
        <Text fontSize="2xl" fontWeight="bold" color={titleColor} mb={3}>
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
