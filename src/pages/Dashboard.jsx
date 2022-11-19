import {
  Box,
  Drawer,
  DrawerContent,
  DrawerOverlay,
  useDisclosure,
} from "@chakra-ui/react";

import React from "react";
import SidebarContent from "../components/SidebarContent";
import Nav from "../components/Nav";
import OnlineUsers from "../components/OnlineUsers";
import { leftSidebarData } from "../../data/leftSidebar";

export default function Dashboard() {
  const sidebar = useDisclosure();

  return (
    <Box
      as='section'
      bg='gray.50'
      _dark={{ bg: "gray.700" }}
      minH='100vh'>
      <SidebarContent
        display={{ base: "none", md: "unset" }}
        left='0'
        data={leftSidebarData}
      />
      <Drawer
        isOpen={sidebar.isOpen}
        onClose={sidebar.onClose}
        placement='left'>
        <DrawerOverlay />
        <DrawerContent>
          <SidebarContent
            w='full'
            borderRight='none'
          />
        </DrawerContent>
      </Drawer>
      <Box
        // ml={{ base: 0, md: 60 }}
        m='auto'
        transition='.3s ease'>
        <Nav sidebar={sidebar} />

        <Box
          as='main'
          width={"70%"}
          margin='auto'
          p='4'>
          <Box
            borderWidth='4px'
            borderStyle='dashed'
            rounded='md'
            h='90vh'>
            <p> Add content here, remove div below</p>
          </Box>
        </Box>
      </Box>
      <OnlineUsers />
    </Box>
  );
}
