import React from "react";
import { Box, Text, Input, Button, useColorModeValue } from "@chakra-ui/react";

const EmailOptIn = () => {
  const backgroundColor = "yellow.300";
  const textColor = useColorModeValue("white", "gray.800");

  return (
    <Box w="full" mx="auto" bg="#005ce6" p={8} color={textColor} textAlign="center" mb={0}>
      <Text fontSize="2xl" fontWeight="bold">
        Get the latest tech news straight to your inbox!
      </Text>
      <Text fontSize="2xl" fontWeight="bold">
        Get the latest tech news straight to your inbox!
      </Text>
      <Text fontSize="lg" mt={4}>
        Join our exclusive list for daily insights that keep you one step ahead in the tech world.
      </Text>
      <Input placeholder="Enter your email..." size="lg" mb={4} width="auto" maxW="500px" />
      <Button size="lg" backgroundColor="white" color="#005ce6" _hover={{ bg: "#e7f1ff" }}>
        Subscribe Now
      </Button>
    </Box>
  );
};

export default EmailOptIn;
