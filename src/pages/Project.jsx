import {
  Alert,
  Avatar,
  AvatarGroup,
  Box,
  Card,
  CardBody,
  CardHeader,
  Container,
  Grid,
  GridItem,
  Heading,
  Spinner,
  Tag,
  Text,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import ReactSelect from 'react-select';
import CommentForm from '../components/CommentForm';
import useDocumnet from '../hooks/useDocumnet';

const Project = () => {
  let { id } = useParams();
  const { document, error, isPending } = useDocumnet('projects', id);

  const [status, setStatus] = useState();

  const statusOptions = [
    { value: 'todo', label: 'Todo' },
    { value: 'in progress', label: 'In progress' },
    { value: 'ready', label: 'Ready' },
  ];

  if (isPending) return <Spinner />;

  if (error)
    return (
      <Alert status='error'>
        <AlertIcon />
        <AlertDescription>{error}</AlertDescription>
      </Alert>
    );

  return (
    <Container
      maxWidth={'container.xl'}
      py='16'>
      <Grid
        gap={8}
        templateColumns='repeat(3, 1fr)'>
        <GridItem colSpan={2}>
          <Card
            bg='whiteAlpha.700'
            mb={16}>
            <CardHeader>
              <Heading size='lg'> {document?.name}</Heading>
            </CardHeader>

            <CardBody>
              <Text>{document?.details}</Text>
            </CardBody>
          </Card>
          <Heading mb={4}>Comments</Heading>
          <CommentForm />
        </GridItem>
        <GridItem>
          <Card bg='whiteAlpha.600'>
            <CardBody>
              <Box mb={7}>
                <Heading
                  size={'sm'}
                  mb={2}>
                  Status
                </Heading>
                <ReactSelect
                  placeholder={status}
                  defaultInputValue={statusOptions[0].label}
                  onChange={(option) => setStatus(option)}
                  value={status}
                  options={statusOptions}
                />
              </Box>
              <Box mb={7}>
                <Heading
                  size={'sm'}
                  mb={2}>
                  Due Date
                </Heading>
                <Heading
                  size={'sm'}
                  mb={2}></Heading>
                {document?.dueDate.toDate().toDateString()}
              </Box>
              <Box mb={7}>
                <Heading
                  size={'sm'}
                  mb={2}>
                  Assigned to
                </Heading>
                <AvatarGroup
                  size='md'
                  max={2}>
                  {document?.assignedUsersList.map((user) => (
                    <Avatar
                      key={user.id}
                      name={user.displayName}
                      src={user.photoURL}
                    />
                  ))}
                </AvatarGroup>
              </Box>
              <Box mb={7}>
                <Heading
                  size={'sm'}
                  mb={2}>
                  Category
                </Heading>
                <Tag colorScheme={'messenger'}>{document?.category.label}</Tag>
              </Box>
              <Box mb={7}>
                <Heading
                  size={'sm'}
                  mb={2}>
                  Created By
                </Heading>
                <Avatar
                  name={document?.createdBy.displayName}
                  src={document?.createdBy.photoURL}
                />
              </Box>
            </CardBody>
          </Card>
        </GridItem>
      </Grid>
    </Container>
  );
};

export default Project;
