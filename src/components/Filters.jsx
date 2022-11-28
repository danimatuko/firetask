import { Button, Flex } from '@chakra-ui/react';
import React, { useState } from 'react';

const filterOptions = [
  'all',
  'mine',
  'development',
  'design',
  'marketing',
  'sales',
];
const Filters = () => {
  const [filter, setFilter] = useState('all');
  return (
    <Flex mb='8'>
      {filterOptions.map((filter) => (
        <Button
          key={filter}
          onClick={() => setFilter(filter)}>
          {filter}
        </Button>
      ))}
    </Flex>
  );
};

export default Filters;
