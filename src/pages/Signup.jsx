import { useState } from "react";
import {
  Container,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Button,
  Heading,
  useColorModeValue,
  VStack,
  Center,
  InputGroup,
  InputRightElement,
  Checkbox,
  Link,
} from "@chakra-ui/react";
import { useSignup } from "../hooks/useSignup";
import AlertMessage from "../components/AlertMessage";

const Signup = () => {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);
  const [profileImg, setProfileImg] = useState(null);
  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signup, error, isPending } = useSignup();

  const handleFileChange = (e) => {
    e.preventDefault();
    const selected = e.target.files[0];
    console.log(selected);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    signup(email, password, displayName, profileImg);
  };

  return (
    <Container
      maxW='7xl'
      mt={28}
      p={{ base: 5, md: 10 }}>
      <Center>
        <Stack spacing={4}>
          <Stack align='center'>
            {error && (
              <AlertMessage
                status='error'
                message={error}
              />
            )}
            <Heading fontSize='3xl'>Sign in to your account</Heading>
          </Stack>
          <VStack
            onSubmit={handleSubmit}
            as='form'
            noValidate
            boxSize={{ base: "xs", sm: "sm", md: "md" }}
            h='max-content !important'
            bg={useColorModeValue("white", "gray.700")}
            rounded='lg'
            boxShadow='lg'
            p={{ base: 5, sm: 10 }}
            spacing={8}>
            <VStack
              spacing={4}
              w='100%'>
              <FormControl id='email'>
                <FormLabel>Email</FormLabel>
                <Input
                  rounded='md'
                  type='email'
                  onChange={(e) => setEmail(e.target.value)}
                />
              </FormControl>
              <FormControl id='password'>
                <FormLabel>Password</FormLabel>
                <InputGroup size='md'>
                  <Input
                    rounded='md'
                    type={show ? "text" : "password"}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <InputRightElement width='4.5rem'>
                    <Button
                      h='1.75rem'
                      size='sm'
                      rounded='md'
                      bg={useColorModeValue("gray.300", "gray.700")}
                      _hover={{
                        bg: useColorModeValue("gray.400", "gray.800"),
                      }}
                      onClick={handleClick}>
                      {show ? "Hide" : "Show"}
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </FormControl>
              <FormControl id='name'>
                <FormLabel>Name</FormLabel>
                <Input
                  rounded='md'
                  type='name'
                  onChange={(e) => setDisplayName(e.target.value)}
                />
              </FormControl>
              <FormControl id='profileImg'>
                <FormLabel>Profile Image</FormLabel>
                <Input
                  rounded='md'
                  type='file'
                  onChange={handleFileChange}
                />
              </FormControl>
            </VStack>
            <VStack w='100%'>
              <Stack
                direction='row'
                justify='space-between'
                w='100%'>
                <Checkbox
                  colorScheme='green'
                  size='md'>
                  Remember me
                </Checkbox>
                <Link fontSize={{ base: "md", sm: "md" }}>
                  Forgot password?
                </Link>
              </Stack>
              <Button
                type='submit'
                bg='brand.300'
                color='white'
                _hover={{
                  bg: "brand.500",
                }}
                rounded='md'
                w='100%'>
                Sign Up
              </Button>
            </VStack>
          </VStack>
        </Stack>
      </Center>
    </Container>
  );
};

export default Signup;
