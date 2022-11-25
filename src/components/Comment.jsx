import { Avatar, Box, Flex, Text } from '@chakra-ui/react';
import React from 'react';

const Comment = ({ comment }) => {
  return (
    <Box
      boxShadow={'md'}
      rounded='sm'
      py='8'
      px='4'
      bg='whiteAlpha.700'>
      <Flex
        align='center'
        mb={4}>
        <Avatar
          name={'Dani Matuko'}
          src={comment?.photoURL}
          mr={4}
        />
        <Flex direction={'column'}>
          <Text
            fontWeight={'semibold'}
            color='blackAlpha.700'>
            {comment?.displayName}
          </Text>

          <Text>{comment?.content}</Text>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Comment;
