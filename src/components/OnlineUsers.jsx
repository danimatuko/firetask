import React from "react";
import {
  Box,
  Drawer,
  DrawerContent,
  DrawerOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import SidebarContent from "./SidebarContent";

const OnlineUsers = () => {
  const sidebar = useDisclosure();

  return (
    <>
      <Drawer
        isOpen={sidebar.isOpen}
        onClose={sidebar.onClose}
        placement='right'>
        <DrawerOverlay />
        <DrawerContent>
          <SidebarContent
            w='full'
            borderRight='none'
          />
        </DrawerContent>
      </Drawer>
      <SidebarContent
        display={{ base: "none", md: "unset" }}
        right='0'
      />
    </>
  );
};

export default OnlineUsers;
