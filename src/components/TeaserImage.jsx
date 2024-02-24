import React from "react";
import { Box, useColorModeValue, Icon } from "@chakra-ui/react";
import { FaRegNewspaper, FaMicrochip, FaRocket } from "react-icons/fa";

const TeaserImage = ({ postId }) => {
  // Generate a dynamic background color based on the post ID
  const bgHex = postId % 16777215; // This will generate a number between 0 and 16777215 (which is 'ffffff' in hex)
  const bgColor = bgHex.toString(16); // Convert this number to a hex string
  const keyword = postId % 2 === 0 ? "technology" : "space";
  const imageUrl = `https://source.unsplash.com/random/400x180?sig=${postId}&${keyword}`;

  return postId ? (
    <Box w="100%" h="180px" mb={4} position="relative" overflow="hidden">
      <img src={imageUrl} alt={`Unsplash Image for Post ${postId}`} width="100%" height="180" style={{ objectFit: "cover", borderRadius: "md" }} />
    </Box>
  ) : null;
};

export default TeaserImage;
