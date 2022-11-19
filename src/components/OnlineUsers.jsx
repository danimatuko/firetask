import React from "react";
import {
  Box,
  Drawer,
  DrawerContent,
  DrawerOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import SidebarContent from "./LeftSidebar";
import { rightSidebarData } from "../../data/rightSidebar";

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
        data={rightSidebarData}
      />
    </>
  );
};

export default OnlineUsers;
