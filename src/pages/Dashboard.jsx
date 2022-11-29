import {
  Box,
  Container,
  Drawer,
  DrawerContent,
  DrawerOverlay,
  useDisclosure,
} from '@chakra-ui/react';

import React, { useContext, useState } from 'react';

import { FirestoreContext } from '../context/FireStoreContext';
import CustomToast from '../components/CustomToast';
import ProjectList from '../components/ProjectList';
import Filters from '../components/Filters';

export default function Dashboard() {
  const sidebar = useDisclosure();
  const { document, isPending, error, success } = useContext(FirestoreContext);
  const [filter, setFilter] = useState('all');

  return (
    <Container
      maxW={'container.2xl'}
      as='section'
      bg='gray.50'
      _dark={{ bg: 'gray.700' }}>
      {success && <CustomToast message={'New Project created '} />}
      <Box
        // ml={{ base: 0, md: 60 }}
        // w={{ base: 'full', md: '8xl' }}
        margin={'auto'}
        transition='.3s ease'>
        <Box
          bg='light'
          as='main'
          margin='auto'>
          <Box rounded='md'>
            <Box
              bg='light'
              as='main'
              margin='auto'>
              <Box
                rounded='md'
                h='90vh'>
                <Filters
                  filter={filter}
                  setFilter={setFilter}
                />
                <ProjectList filterValue={filter} />
              </Box>
            </Box>{' '}
          </Box>
        </Box>
      </Box>
    </Container>
  );
}
