import React from 'react';
import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import { FiSearch } from 'react-icons/fi';

const Search = () => {
  return (
    <InputGroup
      w='96'
      display={{ base: 'none', md: 'flex' }}>
      <InputLeftElement color='gray.500'>
        <FiSearch />
      </InputLeftElement>
      <Input placeholder='Search...' />
    </InputGroup>
  );
};

export default Search;
