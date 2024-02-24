import React from "react";
import { Box, useColorModeValue, Icon } from "@chakra-ui/react";
import { FaRegNewspaper, FaMicrochip, FaRocket } from "react-icons/fa";

const TeaserImage = ({ postId }) => {
  const imageUrl = `https://via.placeholder.com/400x180?text=Post+ID:+${postId}`;

  return (
    <Box w="100%" h="180px" mb={4} position="relative" overflow="hidden">
      <img src={imageUrl} alt={`Post ${postId}`} width="100%" height="180" style={{ objectFit: "cover", borderRadius: "md" }} />
    </Box>
  );
};

export default TeaserImage;
