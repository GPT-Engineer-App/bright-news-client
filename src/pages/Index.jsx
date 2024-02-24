import React, { useState, useEffect } from "react";
import { Box, Heading, IconButton, useColorMode, SimpleGrid, Text, useColorModeValue, Link, Spinner, useToast, Button, Icon } from "@chakra-ui/react";
import { FaSun, FaMoon, FaRedo, FaMicrochip, FaRocket, FaHeart } from "react-icons/fa";

// Replace with the actual API endpoint
const HN_API_URL = "https://hacker-news.firebaseio.com/v0/topstories.json";

import { Input } from "@chakra-ui/react";

const SearchBar = ({ searchQuery, setSearchQuery }) => {
  return (
    <Box my={4} mx="auto" maxWidth="1200px" px={8}>
      <Input placeholder="Search posts..." value={searchQuery} onChange={(event) => setSearchQuery(event.target.value)} />
    </Box>
  );
};

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");
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
      <Box mt={10} mb={6} display="flex" justifyContent="center" alignItems="center">
        <Heading size="xl" textAlign="center" px={4} py={2}>
          Stay ahead of the curve with the latest tech buzz! ⚡
        </Heading>
      </Box>
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      {isLoading ? (
        <Box display="flex" justifyContent="center" mt="20">
          <Spinner size="xl" />
        </Box>
      ) : (
        <SimpleGrid columns={3} spacing={8} mx="auto" maxWidth="1200px" px={8}>
          {posts
            .filter((post) => post.title.toLowerCase().includes(searchQuery.toLowerCase()))
            .map((post) => (
              <PostItem key={post.id} post={post} />
            ))}
        </SimpleGrid>
      )}
    </Box>
  );
};

const Header = ({ onRefresh }) => {
  const { colorMode, toggleColorMode } = useColorMode();
  const bg = useColorModeValue("orange.300", "orange.700");
  return (
    <Box bg={bg} px={4} py={4} display="flex" justifyContent="space-between" alignItems="center" boxShadow="sm">
      <Heading size="lg">SpectaculrNews</Heading>
      <Box>
        <IconButton icon={colorMode === "light" ? <FaMoon /> : <FaSun />} onClick={toggleColorMode} colorScheme="whiteAlpha" mr={2} />
        <IconButton icon={<FaRedo />} onClick={onRefresh} colorScheme="whiteAlpha" />
      </Box>
    </Box>
  );
};

import TeaserImage from "../components/TeaserImage.jsx";

const getEmojiForTitle = (title) => {
  return title;
};

const PostItem = ({ post }) => {
  const titleWithEmoji = getEmojiForTitle(post.title);
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(post.score);
  const titleColor = useColorModeValue("gray.700", "white");
  const infoColor = useColorModeValue("gray.500", "gray.200");
  const iconColor = useColorModeValue("red.500", "red.300");
  const techKeywords = ["tech", "future"];
  const icon = techKeywords.some((keyword) => post.title.toLowerCase().includes(keyword)) ? FaMicrochip : FaRocket;

  const handleLike = () => {
    setLiked(!liked);
    setLikeCount(liked ? likeCount - 1 : likeCount + 1);
  };

  return (
    <Box w="full" bg={useColorModeValue("gray.50", "gray.700")} p={6} shadow="lg" borderRadius="lg" mb={6} transition="transform 0.2s, box-shadow 0.2s" _hover={{ transform: "translateY(-4px)", shadow: "xl" }}>
      <TeaserImage title={post.title} icon={icon} />
      <Box display="flex" alignItems="center">
        <Button variant="ghost" onClick={handleLike} mr={4}>
          <Icon as={FaHeart} color={likeCount > 0 ? iconColor : "gray.400"} _hover={{ color: likeCount > 0 ? "red.700" : "gray.500" }} _active={{ color: likeCount > 0 ? "red.800" : "gray.600" }} />
          {likeCount > 0 && <Text ml={2}>{likeCount}</Text>}
        </Button>
        <Link href={post.url} isExternal _hover={{ textDecoration: "none" }} display="block">
          <Text fontSize="2xl" fontWeight="bold" color={titleColor} mb={3} isTruncated>
            {titleWithEmoji}
          </Text>
          <Text fontSize="sm" color={infoColor}>
            by {post.by}
          </Text>
        </Link>
      </Box>
    </Box>
  );
};

export default Index;
