import { Box } from '@chakra-ui/react';
import React from 'react';
import Comment from './Comment';

const CommentList = ({ comments }) => {
  return (
    <Box>
      {comments?.map((comment) => (
        <Comment
          key={comment.id}
          comment={comment}
        />
      ))}
    </Box>
  );
};

export default CommentList;
