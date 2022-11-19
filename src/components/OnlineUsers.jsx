import { Box, Flex, Icon, Image, Text, useDisclosure } from "@chakra-ui/react";

import React from "react";
import { BsFillCircleFill } from "react-icons/bs";
import { FaUsers } from "react-icons/fa";
import { FiCircle } from "react-icons/fi";
import { rightSidebarData } from "../../data/onlineUsers";
import Logo from "../assets/react.svg";
import { useCollection } from "../hooks/useCollection";
import NavItem from "./NavItem";
import UserAvatar from "./UserAvatar";

const OnlineUsers = (props) => {
  const integrations = useDisclosure();

  const { documents: onlineUsers, error } = useCollection("users");

  return (
    <Box
      as='nav'
      pos='fixed'
      top='16'
      right='0'
      h='full'
      pb='10'
      overflowX='hidden'
      overflowY='auto'
      bg='white'
      _dark={{ bg: "gray.800" }}
      w='60'
      {...props}>
      <Flex
        px='4'
        py='5'
        align='center'>
        <Icon
          as={FaUsers}
          w={8}
          h={8}
          color={"gray.400"}
        />
        <Text
          fontSize='2xl'
          ml='2'
          color='brand.500'
          _dark={{ color: "white" }}
          fontWeight='semibold'>
          All Users
        </Text>
      </Flex>
      <Flex
        direction='column'
        as='nav'
        fontSize='sm'
        color='gray.600'
        aria-label='Main Navigation'>
        {onlineUsers?.map((user) => (
          <NavItem
            key={user.id}
            pl='12'>
            <Icon
              as={BsFillCircleFill}
              color={user.online ? "green" : "red"}
            />
            <UserAvatar src={user.photoURL} />
            <Text ml={1}>{user.displayName}</Text>
          </NavItem>
        ))}
      </Flex>
    </Box>
  );
};
export default OnlineUsers;
