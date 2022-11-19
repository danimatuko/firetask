import { Box, Flex, Icon, Image, Text, useDisclosure } from "@chakra-ui/react";

import React from "react";
import { leftSidebarData } from "../../data/leftSidebar";
import { rightSidebarData } from "../../data/rightSidebar";
import Logo from "../assets/react.svg";
import NavItem from "./NavItem";

const RightSidebar = (props) => {
  const integrations = useDisclosure();
  return (
    <Box
      as='nav'
      pos='fixed'
      top='0'
      right='0'
      zIndex='sticky'
      h='full'
      pb='10'
      overflowX='hidden'
      overflowY='auto'
      bg='white'
      _dark={{ bg: "gray.800" }}
      border
      color='inherit'
      borderRightWidth='1px'
      w='60'
      {...props}>
      <Flex
        px='4'
        py='5'
        align='center'>
        <Image
          src={Logo}
          alt='Dan Abramov'
        />
        <Text
          fontSize='2xl'
          ml='2'
          color='brand.500'
          _dark={{ color: "white" }}
          fontWeight='semibold'>
          Firetask
        </Text>
      </Flex>
      <Flex
        direction='column'
        as='nav'
        fontSize='sm'
        color='gray.600'
        aria-label='Main Navigation'>
        {rightSidebarData?.map((props) => (
          <NavItem key={props.title}>
            <Icon as={props.icon} />
            <Text ml={1}> {props.title}</Text>
          </NavItem>
        ))}
      </Flex>
    </Box>
  );
};
export default RightSidebar;
