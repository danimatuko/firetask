import { Button, Container, Flex } from '@chakra-ui/react';
import React from 'react';

const filterOptions = [
  'all',
  'mine',
  'development',
  'design',
  'marketing',
  'sales',
];
const Filters = ({ filter, setFilter }) => {
  return (
    <Container maxW={'container.xl'}>
      <Flex
        justifyContent='start'
        mb='8'>
        {filterOptions.map((option) => (
          <Button
            variant={'ghost'}
            colorScheme={filter == option ? 'pink' : 'black'}
            key={option}
            textTransform='capitalize'
            onClick={() => setFilter(option)}>
            {option}
          </Button>
        ))}
      </Flex>
    </Container>
  );
};

export default Filters;
