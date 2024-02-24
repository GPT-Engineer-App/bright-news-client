import React from "react";
import { Box, useColorModeValue, Icon } from "@chakra-ui/react";
import { FaRegNewspaper, FaMicrochip, FaRocket } from "react-icons/fa";

const TeaserImage = ({ postId, postTitle }) => {
  // Find a keyword in the post title or fallback to "technology" or "space"
  const keywords = postTitle.split(" ").filter((word) => word.length > 3);
  const keyword = keywords.length > 0 ? keywords[0].toLowerCase() : postId % 2 === 0 ? "technology" : "space";
  const imageUrl = `https://source.unsplash.com/random/400x180?sig=${postId}&${keyword}`;

  return postId ? (
    <Box w="100%" h="180px" mb={4} position="relative" overflow="hidden">
      <img src={imageUrl} alt={`Unsplash Image for Post ${postId}`} width="100%" height="180" style={{ objectFit: "cover", borderRadius: "md" }} />
    </Box>
  ) : null;
};

export default TeaserImage;
