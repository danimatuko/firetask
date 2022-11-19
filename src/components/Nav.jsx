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
      // margin={"auto"}
      px='4'
      ml='60'
      bg='white'
      _dark={{ bg: "gray.800" }}
      h='16'>
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
