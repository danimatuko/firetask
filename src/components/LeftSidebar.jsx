import { Box, Flex, Icon, Image, Text, useDisclosure } from "@chakra-ui/react";

import React from "react";
import { AiFillFire } from "react-icons/ai";
import { leftSidebarData } from "../../data/leftSidebar";
import Logo from "../assets/react.svg";
import NavItem from "./NavItem";

const LeftSidebar = (props) => {
  const integrations = useDisclosure();
  return (
    <Box
      as='nav'
      pos='fixed'
      top='0'
      // left='0'
      zIndex='sticky'
      h='full'
      pb='10'
      overflowX='hidden'
      overflowY='auto'
      bg='brand.700'
      _dark={{ bg: "gray.800" }}
      w='60'
      {...props}>
      <Flex
        px='4'
        py='5'
        align='center'>
        <Icon
          as={AiFillFire}
          fontSize='3xl'
          color={"orange.300"}
        />
        <Text
          fontSize='2xl'
          ml='1'
          color='whiteAlpha.800'
          _dark={{ color: "white" }}
          fontWeight='semibold'>
          Firetask
        </Text>
      </Flex>
      <Flex
        direction='column'
        as='nav'
        fontSize='sm'
        color='whiteAlpha.700'
        aria-label='Main Navigation'>
        {leftSidebarData?.map((props) => (
          <NavItem key={props.title}>
            <Icon as={props.icon} />
            <Text ml={1}>{props.title}</Text>
          </NavItem>
        ))}
      </Flex>
    </Box>
  );
};
export default LeftSidebar;
