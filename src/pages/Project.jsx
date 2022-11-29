import {
  Alert,
  AlertDescription,
  AlertIcon,
  Avatar,
  AvatarGroup,
  Box,
  Button,
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
import React, { useContext, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import ReactSelect from 'react-select';
import CommentForm from '../components/CommentForm';
import CommentList from '../components/CommentList';
import { AuthContext } from '../context/AuthContext';
import { FirestoreContext } from '../context/FireStoreContext';
import { useDocument } from '../hooks/useDocumnet';
import { useFirestore } from '../hooks/useFirestore';

const Project = () => {
  const { id } = useParams();
  const { document: project, isPending } = useDocument('projects', id);
  const { deleteDocument, reset } = useFirestore('projects');
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const { error, success } = useContext(FirestoreContext);

  const removeProject = async () => {
    deleteDocument(id);
    reset();
  };
  useEffect(() => {
    success && navigate('/');
  }, [success]);

  const statusOptions = [
    { value: 'todo', label: 'Todo' },
    { value: 'in progress', label: 'In progress' },
    { value: 'ready', label: 'Ready' },
  ];

  if (isPending) return <Spinner />;

  return (
    <Container
      maxWidth={'container.xl'}
      // pb='16'
      // pt={32}>
    >
      {error && (
        <Alert
          status='error'
          mb={4}>
          <AlertIcon />
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}
      <Grid
        gap={8}
        templateColumns='repeat(3, 1fr)'>
        <GridItem colSpan={2}>
          <Card
            bg='whiteAlpha.700'
            mb={16}>
            <CardHeader>
              <Heading size='lg'> {project?.name}</Heading>
            </CardHeader>

            <CardBody>
              <Text>{project?.details}</Text>
            </CardBody>
          </Card>
          <CommentForm
            projectId={id}
            project={project}
          />
          <CommentList comments={project?.comments} />
        </GridItem>
        <GridItem>
          <Card bg='whiteAlpha.700'>
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
                {project?.dueDate.toDate().toDateString()}
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
                  {project?.assignedUsersList.map((user) => (
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
                <Tag colorScheme={'messenger'}>{project?.category.label}</Tag>
              </Box>
              <Box mb={7}>
                <Heading
                  size={'sm'}
                  mb={2}>
                  Created By
                </Heading>
                <Avatar
                  name={project?.createdBy.displayName}
                  src={project?.createdBy.photoURL}
                />
              </Box>
              <Box mb={7}>
                {user.id}
                <Button
                  size='sm'
                  variant='outline'
                  colorScheme='red'
                  onClick={removeProject}>
                  Remove Project
                </Button>
              </Box>
              {/* {user.uid === project?.createdBy.id && (
                <Box mb={7}>
                  {user.id}
                  <Button
                    size='sm'
                    variant='outline'
                    colorScheme='red'
                    onClick={removeProject}>
                    Remove Project
                  </Button>
                </Box>
              )} */}
            </CardBody>
          </Card>
        </GridItem>
      </Grid>
    </Container>
  );
};

export default Project;
