import React from "react";
import { Box, useColorModeValue, Icon } from "@chakra-ui/react";
import { FaRegNewspaper, FaMicrochip, FaRocket } from "react-icons/fa";

const TeaserImage = ({ postId, imageUrl }) => {
  return (
    <Box w="100%" h="180px" mb={4} position="relative" overflow="hidden">
      {imageUrl ? <img src={imageUrl} alt={`Unsplash Image for Post ${postId}`} style={{ width: "100%", height: "180px", objectFit: "cover", borderRadius: "md" }} /> : null}
    </Box>
  );
};

export default TeaserImage;
