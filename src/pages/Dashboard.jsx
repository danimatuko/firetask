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
import OnlineUsers from "../components/OnlineUsers";

export default function Dashboard() {
  const sidebar = useDisclosure();

  return (
    <Box
      as='section'
      bg='gray.50'
      _dark={{ bg: "gray.700" }}
      minH='100vh'>
      <Box
        // ml={{ base: 0, md: 60 }}
        // w='75%'
        // w={{ base: "full", md: "8xl" }}
        // margin={"auto"}
        transition='.3s ease'>
        <MainContent />
      </Box>
    </Box>
  );
}
