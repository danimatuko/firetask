import React from "react";
import { Avatar, Flex, Icon, IconButton } from "@chakra-ui/react";
import { FaBell } from "react-icons/fa";
import { FiMenu } from "react-icons/fi";
import Search from "./Search";

const Nav = (props) => {
  const { sidebar } = props;

  return (
    <Flex
      as='header'
      align='center'
      justify='space-between'
      w='full'
      px='4'
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
        <Avatar
          ml='4'
          size='sm'
          name='anubra266'
          src='https://avatars.githubusercontent.com/u/30869823?v=4'
          cursor='pointer'
        />
      </Flex>
    </Flex>
  );
};

export default Nav;
