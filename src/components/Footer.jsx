import { Box, Container, Text } from "@chakra-ui/react";
import React from "react";

const Footer = () => {
  return (
    <Box as="footer" py="5" width="full" bg="#1a202c" mt="8" textAlign="center">
      <Container>
        <Text fontSize="sm" color="white" mb={4}>
          🤖 Created by and proud of it!
        </Text>
        <Text fontSize="sm">&copy; {new Date().getFullYear()} Spectactulr News. All rights reserved.</Text>
      </Container>
    </Box>
  );
};

export default Footer;
