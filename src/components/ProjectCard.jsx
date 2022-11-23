import React from 'react';
import {
  Box,
  Flex,
  chakra,
  AvatarGroup,
  Avatar,
  Text,
  Heading,
  Link,
} from '@chakra-ui/react';

import { Link as ReactLink } from 'react-router-dom';

const ProjectCard = ({ project }) => {
  const {
    id,
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
      h='52'
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
            as={ReactLink}
            to={`projects/${id}`}
            fontSize='xl'
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
            <Heading
              noOfLines={1}
              size='md'>
              {name}
            </Heading>
          </Link>
          <Text
            noOfLines={1}
            mt={2}
            color='gray.600'
            _dark={{ color: 'gray.300' }}>
            {details}
          </Text>
        </Box>

        <Flex
          justifyContent='space-between'
          alignItems='center'
          mt={4}>
          <Link
            as={ReactLink}
            to={`projects/${id}`}
            color='brand.600'
            _dark={{ color: 'brand.400' }}
            _hover={{ textDecor: 'underline' }}>
            Read more
          </Link>

          <AvatarGroup
            size='md'
            max={2}>
            {assignedUsersList.map((user) => (
              <Avatar
                key={user.id}
                name={user.displayName}
                src={user.photoURL}
              />
            ))}
          </AvatarGroup>
        </Flex>
      </Box>
    </Flex>
  );
};
export default ProjectCard;
