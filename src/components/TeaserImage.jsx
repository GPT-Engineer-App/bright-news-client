import React from "react";
import { Box, useColorModeValue, Icon } from "@chakra-ui/react";
import { FaRegNewspaper, FaMicrochip, FaRocket } from "react-icons/fa";

const TeaserImage = ({ imageUrl, postId }) => {
  return imageUrl ? (
    <Box w="100%" h="180px" mb={4} position="relative" overflow="hidden">
      <img src={imageUrl} alt={`Unsplash Image for Post ${postId}`} width="100%" height="180" style={{ objectFit: "cover", borderRadius: "md" }} />
    </Box>
  ) : null;
};

export default TeaserImage;
