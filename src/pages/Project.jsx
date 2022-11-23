import { Heading } from '@chakra-ui/react';
import React from 'react';
import { useParams } from 'react-router-dom';
import useDocumnet from '../hooks/useDocumnet';

const Project = () => {
  let { id } = useParams();
  const { document, error, isPending } = useDocumnet('projects', id);

  !isPending && console.log(document);
  !isPending && error && console.log(error);

  return <Heading textAlign={'center'}>Project</Heading>;
};

export default Project;
