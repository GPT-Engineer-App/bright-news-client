import React from "react";
import { Box, Text, Input, Button, useColorModeValue } from "@chakra-ui/react";

const EmailOptIn = () => {
  const backgroundColor = "yellow.300";
  const textColor = useColorModeValue("white", "gray.800");

  return (
    <Box w="full" mx="auto" bg="#005ce6" pt="8" pb="8" color={textColor} textAlign="center" mb={0}>
      <Text fontSize="lg" fontWeight="bold" mb={3}>
        Get the latest tech news straight to your inbox! ✨
      </Text>
      <Text fontSize="md" my={2}>
        Join our exclusive list for daily insights that keep you one step ahead in the tech world.
      </Text>
      <Input placeholder="Enter your email..." size="lg" width="auto" maxW="500px" d="inline-block" verticalAlign="middle" _placeholder={{ color: "gray.500" }} />
      <Button size="lg" backgroundColor="white" color="#005ce6" _hover={{ bg: "#e7f1ff" }} d="inline-block" verticalAlign="middle" ml={2}>
        Subscribe Now
      </Button>
    </Box>
  );
};

export default EmailOptIn;
