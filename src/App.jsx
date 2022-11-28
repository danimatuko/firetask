import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Create from './pages/Create';
import Project from './pages/Project';
import Dashboard from './pages/Dashboard';
import { useAuthContext } from './hooks/useAuthContext';
import OnlineUsers from './components/OnlineUsers';
import {
  Box,
  Drawer,
  DrawerContent,
  DrawerOverlay,
  useDisclosure,
} from '@chakra-ui/react';
import LeftSidebar from './components/LeftSidebar';
import Nav from './components/Nav';

function App() {
  const { authIsReady, user } = useAuthContext();
  const sidebar = useDisclosure();

  return (
    <div className='App'>
      <Nav sidebar={sidebar} />
      <LeftSidebar display={{ base: 'none', xl: 'unset' }} />
      <Drawer
        isOpen={sidebar.isOpen}
        onClose={sidebar.onClose}
        placement='left'>
        <DrawerOverlay />
        <DrawerContent>
          <LeftSidebar
            w='full'
            borderRight='none'
          />
        </DrawerContent>
      </Drawer>
      <Box pt={'24'}>
        {authIsReady && (
          <Routes>
            <Route
              path='/'
              element={user ? <Dashboard /> : <Navigate to='/login' />}
            />
            <Route
              path='/login'
              element={!user ? <Login /> : <Navigate to='/' />}
            />
            <Route
              path='/signup'
              element={!user ? <Signup /> : <Navigate to='/' />}
            />
            <Route
              path='/projects/:id'
              element={user ? <Project /> : <Navigate to='/login' />}
            />
            <Route
              path='/create'
              element={user ? <Create /> : <Navigate to='/login' />}
            />
          </Routes>
        )}
      </Box>
      <OnlineUsers display={{ base: 'none', xl: 'unset' }} />
      <Drawer
        isOpen={sidebar.isOpen}
        onClose={sidebar.onClose}
        placement='left'>
        <DrawerOverlay />
        <DrawerContent>
          <OnlineUsers
            w='full'
            borderRight='none'
          />
        </DrawerContent>
      </Drawer>
    </div>
  );
}

export default App;
