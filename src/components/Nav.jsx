import React from "react";
import { Flex, Icon, IconButton } from "@chakra-ui/react";
import { FaBell } from "react-icons/fa";
import { FiMenu } from "react-icons/fi";
import Search from "./Search";
import ProfileMenu from "./ProfileMenu";

const Nav = (props) => {
  const { sidebar } = props;

  return (
    <Flex
      as='header'
      align='center'
      justify='space-between'
<<<<<<< HEAD
      margin={"auto"}
      px='72'
=======
      w={{ base: "full", md: "8xl" }}
      margin={"auto"}
      px='4'
>>>>>>> rightSideBar
      bg='white'
      _dark={{ bg: "gray.800" }}
      borderBottomWidth='1px'
      color='inherit'
      h='14'>
      <IconButton
        aria-label='Menu'
        display={{ base: "inline-flex", md: "none" }}
        onClick={sidebar.onOpen}
        icon={<FiMenu />}
        size='sm'
      />
      <Search />

      <Flex align='center'>
        <Icon
          color='gray.500'
          as={FaBell}
          cursor='pointer'
        />
        <ProfileMenu />
      </Flex>
    </Flex>
  );
};

export default Nav;
