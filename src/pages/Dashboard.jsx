import {
  Box,
  Drawer,
  DrawerContent,
  DrawerOverlay,
  useDisclosure,
} from '@chakra-ui/react';

import React, { useContext } from 'react';
import LeftSidebar from '../components/LeftSidebar';
import Nav from '../components/Nav';
import MainContent from '../components/MainContent';
import OnlineUsers from '../components/OnlineUsers';
import { FirestoreContext } from '../context/FireStoreContext';
import CustomToast from '../components/CustomToast';
import ProjectList from '../components/ProjectList';

export default function Dashboard() {
  const sidebar = useDisclosure();
  const { document, isPending, error, success } = useContext(FirestoreContext);

  return (
    <Box
      as='section'
      bg='gray.50'
      _dark={{ bg: 'gray.700' }}>
      {success && <CustomToast message={'New Project created '} />}
      <Box
        ml={{ base: 0, md: 60 }}
        w='75%'
        // w={{ base: 'full', md: '8xl' }}
        margin={'auto'}
        transition='.3s ease'>
        <Box
          bg='light'
          as='main'
          p='4'
          w={{ base: 'full', md: '8xl' }}
          margin='auto'>
          <Box rounded='md'>
            <Box
              bg='light'
              as='main'
              px='16'
              w={{ base: 'full', md: '8xl' }}
              margin='auto'>
              <Box
                rounded='md'
                h='90vh'>
                <ProjectList />
              </Box>
            </Box>{' '}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
