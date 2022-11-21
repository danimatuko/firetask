import { useEffect, useState } from "react";
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
import { useCollection } from "../hooks/useCollection";
import Select from "react-select";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
} from "@chakra-ui/react";

const categories = [
  { value: "development", label: "Development" },
  { value: "design", label: "Design" },
  { value: "sales", label: "Sales" },
  { value: "marketing", label: "Marketing" },
];

export default function Create() {
  // form field values
  const [name, setName] = useState("");
  const [details, setDetails] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [category, setCategory] = useState("");
  const [assignedUsers, setAssignedUsers] = useState([]);
  const [users, setUsers] = useState([]);

  const { documents } = useCollection("users");
  // map the  fetched users to use them in the select input
  useEffect(() => {
    const options = documents?.map((user) => {
      return {
        value: user,
        label: user.displayName,
      };
    });
    console.log(documents);
    setUsers(options);
  }, [documents]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(name, details, dueDate, category, assignedUsers);
  };

  return (
    <Container
      className='create-form'
      py={16}>
      <Heading mb={8}>Create a new Project</Heading>
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
          colorScheme='brand'>
          Add Project
        </Button>
      </VStack>
    </Container>
  );
}
