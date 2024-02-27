import React from "react";
import { Box, Text, Input, Button, useColorModeValue } from "@chakra-ui/react";

const EmailOptIn = () => {
  const backgroundColor = "yellow.300";
  const textColor = useColorModeValue("white", "gray.800");

  return (
    <Box w="full" mx="auto" bg="#005ce6" p={6} color={textColor} textAlign="center" mb={0}>
      <Text fontSize="xl" fontWeight="bold" mb={3}>
        Get the latest tech news straight to your inbox!
      </Text>
      <Text fontSize="md" my={2}>
        Join our exclusive list for daily insights that keep you one step ahead in the tech world.
      </Text>
      <Input placeholder="Enter your email..." size="lg" mb={4} width="auto" maxW="500px" _placeholder={{ color: "gray.200" }} />
      <Button size="lg" backgroundColor="white" color="#005ce6" _hover={{ bg: "#e7f1ff" }} mt={4}>
        Subscribe Now
      </Button>
    </Box>
  );
};

export default EmailOptIn;
