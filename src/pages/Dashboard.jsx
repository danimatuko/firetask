import {
  Box,
  Drawer,
  DrawerContent,
  DrawerOverlay,
  useDisclosure,
} from "@chakra-ui/react";

import React from "react";
import LeftSidebar from "../components/LeftSidebar";
import Nav from "../components/Nav";
import MainContent from "../components/MainContent";
import RightSidebar from "../components/RightSidebar";

export default function Dashboard() {
  const sidebar = useDisclosure();

  return (
    <Box
      as='section'
      bg='gray.50'
      _dark={{ bg: "gray.700" }}
      minH='100vh'>
      <LeftSidebar display={{ base: "none", md: "unset" }} />
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
      <Box
        // ml={{ base: 0, md: 60 }}
        // w='75%'
        // w={{ base: "full", md: "8xl" }}
        // margin={"auto"}
        transition='.3s ease'>
        <Nav sidebar={sidebar} />
        <MainContent />
      </Box>
      <RightSidebar display={{ base: "none", md: "unset" }} />
      <Drawer
        isOpen={sidebar.isOpen}
        onClose={sidebar.onClose}
        placement='left'>
        <DrawerOverlay />
        <DrawerContent>
          <RightSidebar
            w='full'
            borderRight='none'
          />
        </DrawerContent>
      </Drawer>
    </Box>
  );
}
