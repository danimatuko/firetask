import { Box } from '@chakra-ui/react';
import React from 'react';
import ProjectList from './ProjectList';

const mainContent = () => {
  return (
    <Box
      bg='light'
      as='main'
      p='4'
      w={{ base: 'full', md: '8xl' }}
      margin='auto'>
      <Box
        rounded='md'
        h='90vh'>
        <ProjectList />
      </Box>
    </Box>
  );
};

export default mainContent;
