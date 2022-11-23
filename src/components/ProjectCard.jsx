import React from 'react';
import { Box, Flex, Image, Link, chakra } from '@chakra-ui/react';
import { timestamp } from '../firebase/config';

const ProjectCard = ({ project }) => {
  const {
    name,
    details,
    dueDate,
    category,
    commentes,
    createdBy,
    assignedUsersList,
  } = project;

  return (
    <Flex
      bg='#edf3f8'
      _dark={{ bg: '#3e3e3e' }}
      w='full'
      h='56'
      alignItems='center'
      justifyContent='center'>
      <Box
        mx='auto'
        px={8}
        py={4}
        rounded='lg'
        shadow='lg'
        bg='white'
        w={'full'}
        h='full'
        _dark={{ bg: 'gray.800' }}>
        <Flex
          justifyContent='space-between'
          alignItems='center'>
          <chakra.span
            fontSize='sm'
            color='gray.600'
            _dark={{ color: 'gray.400' }}>
            Due by {dueDate.toDate().toDateString()}
          </chakra.span>
          <Link
            px={3}
            py={1}
            bg='gray.600'
            color='gray.100'
            fontSize='sm'
            fontWeight='700'
            rounded='md'
            _hover={{ bg: 'gray.500' }}>
            {category.label}
          </Link>
        </Flex>

        <Box mt={2}>
          <Link
            fontSize='2xl'
            noOfLines={2}
            color='gray.700'
            _dark={{ color: 'white' }}
            fontWeight='700'
            _hover={{
              color: 'gray.600',
              _dark: {
                color: 'gray.200',
              },
              textDecor: 'underline',
            }}>
            {name}
          </Link>
          <chakra.p
            noOfLines={1}
            mt={2}
            color='gray.600'
            _dark={{ color: 'gray.300' }}>
            {details}
          </chakra.p>
        </Box>

        <Flex
          justifyContent='space-between'
          alignItems='center'
          mt={4}>
          <Link
            color='brand.600'
            _dark={{ color: 'brand.400' }}
            _hover={{ textDecor: 'underline' }}>
            Read more
          </Link>

          <Flex alignItems='center'>
            <Image
              mx={4}
              w={10}
              h={10}
              rounded='full'
              fit='cover'
              display={{ base: 'none', sm: 'block' }}
              src={assignedUsersList[0].photoURL}
              alt='avatar'
            />
            <Link
              color='gray.700'
              _dark={{ color: 'gray.200' }}
              fontWeight='700'
              cursor='pointer'>
              {assignedUsersList[0]?.displayName}
            </Link>
          </Flex>
        </Flex>
      </Box>
    </Flex>
  );
};
export default ProjectCard;
