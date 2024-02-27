import { Box, Container, Text } from "@chakra-ui/react";
import React from "react";

const Footer = () => {
  return (
    <Box as="footer" py="5" width="full" bg="gray.200" mt="8" textAlign="center">
      <Container>
        <Text fontSize="sm">&copy; {new Date().getFullYear()} Spectactulr News. All rights reserved.</Text>
      </Container>
    </Box>
  );
};

export default Footer;
