import { useState } from "react";
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
} from "@chakra-ui/react";

export default function Create() {
  // form field values
  const [name, setName] = useState("");
  const [details, setDetails] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [category, setCategory] = useState("");
  const [assignedUsers, setAssignedUsers] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(name, details, dueDate);
  };

  return (
    <Container
      className='create-form'
      py={16}>
      <Heading mb={8}>Create a new Project</Heading>
      <VStack
        as='form'
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
          {/* select here later */}
        </FormControl>
        <FormControl>
          <FormLabel>Assign to:</FormLabel>
          {/* select here later */}
        </FormControl>

        <Button
          type='submit'
          colorScheme='brand'>
          Add Project
        </Button>
      </VStack>
    </Container>
  );
}
