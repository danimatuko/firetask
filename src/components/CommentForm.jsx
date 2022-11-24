import { Alert, Avatar, Box, Button, Flex, Input } from '@chakra-ui/react';
import React, { useContext, useState } from 'react';
import { AuthContext } from '../context/AuthContext';
import { v4 as uuidv4 } from 'uuid';
import { useFirestore } from '../hooks/useFirestore';
import { FirestoreContext } from '../context/FireStoreContext';

const CommentForm = ({ projectId, project }) => {
  const { user } = useContext(AuthContext);
  const { error } = useContext(FirestoreContext);
  const { updateDocument } = useFirestore('projects');
  const [message, setMessage] = useState('');

  const submitHandler = async (e) => {
    e.preventDefault();
    const newComment = {
      id: uuidv4(),
      content: message,
      photoURL: user?.photoURL,
      createdAt: new Date(),
    };

    console.log(newComment);

    await updateDocument(projectId, {
      comments: [...project.comments, newComment],
    });
  };

  return (
    <Box
      rounded='md'
      onSubmit={submitHandler}
      as='form'
      py='8'
      px='4'
      bg={'whiteAlpha.900'}>
      {error && <Alert>{error}</Alert>}
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
          value={message}
          onChange={(e) => setMessage(e.target.value)}
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
