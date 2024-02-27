import { useState, useEffect } from "react";
import { Box, Button, Text, useColorModeValue } from "@chakra-ui/react";

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = sessionStorage.getItem("cookieConsent");
    if (consent !== "accepted") {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    sessionStorage.setItem("cookieConsent", "accepted");
    setIsVisible(false);
  };

  const bgColor = useColorModeValue("gray.100", "gray.800");
  const textColor = useColorModeValue("gray.800", "white");

  return (
    isVisible && (
      <Box position="fixed" bottom="0" left="0" right="0" width="full" py="3" px="5" bg={bgColor} textAlign="center" zIndex="sticky">
        <Text fontSize="sm" color={textColor}>
          We use cookies to ensure you get the best experience on our website.
        </Text>
        <Button size="sm" mt="2" onClick={handleAccept}>
          I Accept
        </Button>
      </Box>
    )
  );
};

export default CookieConsent;
