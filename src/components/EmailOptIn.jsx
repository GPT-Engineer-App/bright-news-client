import React from "react";
import { Box, Text, Input, Button, useColorModeValue } from "@chakra-ui/react";

const EmailOptIn = () => {
  const backgroundColor = useColorModeValue("purple.600", "purple.400");
  const textColor = useColorModeValue("white", "gray.800");

  return (
    <Box w="full" bg={backgroundColor} p={8} color={textColor} textAlign="center" mb={6}>
      <Text fontSize="2xl" fontWeight="bold" mb={4}>
        Get the latest tech news straight to your inbox!
      </Text>
      <Input placeholder="Enter your email..." size="lg" mb={4} />
      <Button size="lg" colorScheme="orange" variant="solid">
        Subscribe Now
      </Button>
    </Box>
  );
};

export default EmailOptIn;
