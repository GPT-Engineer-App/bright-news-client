import React from "react";
import { Box, useColorModeValue, Icon } from "@chakra-ui/react";
import { FaRegNewspaper, FaMicrochip, FaRocket } from "react-icons/fa";

const TeaserImage = ({ postId, imageUrl }) => {
  // Generate a dynamic background color based on the post ID
  const bgHex = postId % 16777215; // This will generate a number between 0 and 16777215 (which is 'ffffff' in hex)
  const bgColor = bgHex.toString(16); // Convert this number to a hex string
  // Removed this line as it's redundant and causing an error due to redeclaration of imageUrl

  return (
    <Box w="100%" h="180px" mb={4} position="relative" overflow="hidden">
      <Box w="100%" h="180px" bg={`#${bgColor}`} mb={4} position="relative" overflow="hidden">
        {imageUrl && <img src={imageUrl} alt={`Unsplash Image for Post ${postId}`} style={{ width: "100%", height: "180px", objectFit: "cover", borderRadius: "md" }} />}
      </Box>
    </Box>
  );
};

export default TeaserImage;
