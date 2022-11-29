import { Button, Flex } from '@chakra-ui/react';
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
    <Flex mb='8'>
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
  );
};

export default Filters;
