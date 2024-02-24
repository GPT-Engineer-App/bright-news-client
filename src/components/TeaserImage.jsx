import React from "react";
import { Box, useColorModeValue, Icon } from "@chakra-ui/react";
import { FaRegNewspaper, FaMicrochip, FaRocket } from "react-icons/fa";

const TeaserImage = ({ title, icon = FaRegNewspaper }) => {
  const bgColor = useColorModeValue("gray.200", "gray.700");
  const color = useColorModeValue("gray.600", "gray.300");

  const firstLetter = title.charAt(0).toUpperCase();

  return (
    <Box w="100%" h="180px" bg={bgColor} color={color} display="flex" justifyContent="center" alignItems="center" borderRadius="md" mb={4} position="relative" overflow="hidden">
      <Box position="absolute" fontSize="6xl" fontWeight="bold" opacity="0.8">
        {firstLetter}
      </Box>
    </Box>
  );
};

export default TeaserImage;
