import { useContext, useEffect, useState } from 'react';
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  VStack,
  Box,
  Container,
  Input,
  Textarea,
  Heading,
  Button,
  Alert,
  AlertIcon,
} from '@chakra-ui/react';
import { useCollection } from '../hooks/useCollection';
import Select from 'react-select';
import { useAuthContext } from '../hooks/useAuthContext';
import { timestamp } from '../firebase/config';
import { useFirestore } from '../hooks/useFirestore';
import { FirestoreContext } from '../context/FireStoreContext';
import { useNavigate } from 'react-router-dom';

const categories = [
  { value: 'development', label: 'Development' },
  { value: 'design', label: 'Design' },
  { value: 'sales', label: 'Sales' },
  { value: 'marketing', label: 'Marketing' },
];

export default function Create() {
  // form field values
  const [name, setName] = useState('');
  const [details, setDetails] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [category, setCategory] = useState('');
  const [assignedUsers, setAssignedUsers] = useState([]);
  const [users, setUsers] = useState([]);

  const navigate = useNavigate();
  const { user } = useAuthContext();
  const { isPending, error, success } = useContext(FirestoreContext);
  const { documents } = useCollection('users');
  const { addDocument, reset } = useFirestore('projects');

  // map the  fetched users to use them in the select input
  useEffect(() => {
    const options = documents?.map((user) => {
      return {
        value: user,
        label: user.displayName,
      };
    });
    setUsers(options);
  }, [documents]);

  // refirect on successfull form submit
  useEffect(() => {
    reset();
    success && navigate('/');
  }, [success]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // prepare project object to store in firestore
    const createdBy = {
      id: user.uid,
      displayName: user.displayName,
      photoURL: user.photoURL,
    };

    const assignedUsersList = assignedUsers.map((user) => {
      return {
        id: user.value.id,
        displayName: user.value.displayName,
        photoURL: user.value.photoURL,
      };
    });

    const project = {
      name,
      details,
      dueDate: timestamp.fromDate(new Date()),
      category: category,
      commentes: [],
      createdBy,
      assignedUsersList,
    };

    addDocument(project);
  };

  return (
    <Container
      className='create-form'
      py={16}>
      <Heading mb={8}>Create a new Project</Heading>
      {!isPending && error && (
        <Alert status='error'>
          <AlertIcon />
          {error}
        </Alert>
      )}
      <VStack
        as='form'
        noValidate
        onSubmit={handleSubmit}>
        <FormControl>
          <FormLabel>Project name:</FormLabel>
          <Input
            required
            type='text'
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
        </FormControl>
        <FormControl>
          <FormLabel>Project Details:</FormLabel>
          <Textarea
            required
            onChange={(e) => setDetails(e.target.value)}
            value={details}></Textarea>
        </FormControl>
        <FormControl>
          <FormLabel>Set due date:</FormLabel>
          <Input
            required
            type='date'
            onChange={(e) => setDueDate(e.target.value)}
            value={dueDate}
          />
        </FormControl>
        <FormControl>
          <FormLabel>Project category:</FormLabel>
          <Select
            placeholder='Select option'
            onChange={(option) => setCategory(option)}
            options={categories}
          />
        </FormControl>
        <FormControl>
          <FormLabel>Assign to:</FormLabel>
          <Select
            isMulti
            onChange={(option) => setAssignedUsers(option)}
            value={assignedUsers}
            options={users}
          />
        </FormControl>

        <Button
          type='submit'
          colorScheme='brand'
          loadingText='Creating project'
          isLoading={isPending}
          spinnerPlacement='end'>
          Add Project
        </Button>
      </VStack>
    </Container>
  );
}
