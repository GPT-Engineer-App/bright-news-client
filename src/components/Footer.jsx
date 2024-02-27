import { Box, Container, Text } from "@chakra-ui/react";
import React from "react";

const Footer = () => {
  return (
    <Box as="footer" py="5" width="full" bg="#1a202c" mt="8" textAlign="center">
      <Container>
        <Text fontSize="sm" color="gray.100">
          Created by 🤖 and proud of it!
        </Text>
        <Text fontSize="sm" mt={4} color="gray.100">
          &copy; {new Date().getFullYear()} Spectactulr News. All rights reserved.
        </Text>
      </Container>
    </Box>
  );
};

export default Footer;
