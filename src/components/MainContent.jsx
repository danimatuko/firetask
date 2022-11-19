import { Box } from "@chakra-ui/react";
import React from "react";

const mainContent = () => {
  return (
    <Box
      bg='light'
      as='main'
      p='4'
      w={{ base: "full", md: "8xl" }}
      margin='auto'>
      <Box
        rounded='md'
        h='90vh'>
        <p> Add content here, remove div below</p>
      </Box>
    </Box>
  );
};

export default mainContent;
