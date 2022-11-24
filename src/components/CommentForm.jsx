import { Avatar, Box, Button, Flex, Input } from '@chakra-ui/react';
import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { v4 as uuidv4 } from 'uuid';
import { timestamp } from '../firebase/config';

const CommentForm = () => {
  const { user } = useContext(AuthContext);

  const submitHandler = (e) => {
    e.preventDefault();
    const comment = {
      id: uuidv4(),
      content: e.target.value,
      photoURL: user?.photoURL,
      createdAt: new Date(),
    };

    console.log(comment);
  };

  return (
    <Box
      rounded='md'
      onSubmit={submitHandler}
      as='form'
      py='8'
      px='4'
      bg={'whiteAlpha.900'}>
      <Flex
        align='center'
        mb={4}>
        <Avatar
          name={user?.displayName}
          src={user?.photoURL}
          mr={4}
        />
        <Input
          placeholder='Add a comment...'
          variant={'flushed'}
        />
      </Flex>
      <Button
        type='submit'
        variant={'solid'}
        colorScheme='brand'
        display='block'
        marginLeft='auto'>
        Comment
      </Button>
    </Box>
  );
};

export default CommentForm;
