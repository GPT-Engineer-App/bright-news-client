import React from "react";
import { Box, Text, Input, Button, useColorModeValue } from "@chakra-ui/react";

const EmailOptIn = () => {
  const backgroundColor = "yellow.300";
  const textColor = useColorModeValue("white", "gray.800");

  return (
    <Box w="65%" mx="auto" bg="blue.500" p={8} color={textColor} textAlign="center" mb={0}>
      <Text fontSize="2xl" fontWeight="bold">
        Get the latest tech news straight to your inbox!
      </Text>
      <Input placeholder="Enter your email..." size="lg" mb={4} width="auto" maxW="500px" />
      <Text fontSize="lg" mt={4}>
        Join our exclusive list for daily insights that keep you one step ahead in the tech world.
      </Text>
      <Button size="lg" backgroundColor="white" color="blue.800" _hover={{ bg: "blue.100" }}>
        Subscribe Now
      </Button>
    </Box>
  );
};

export default EmailOptIn;
