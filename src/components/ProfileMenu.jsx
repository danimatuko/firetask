import { Menu, MenuButton, MenuList, MenuItem, Avatar } from "@chakra-ui/react";

import React from "react";
import { NavLink } from "react-router-dom";

const data = [
  {
    title: "Login",
    path: "/login",
  },
  {
    title: "Signup",
    path: "/signup",
  },
];

const ProfileMenu = () => {
  return (
    <Menu>
      <MenuButton
        as={Avatar}
        ml='4'
        size='sm'
        name='anubra266'
        src='https://avatars.githubusercontent.com/u/30869823?v=4'
        cursor='pointer'></MenuButton>
      <MenuList>
        {data.map((link) => (
          <MenuItem
            key={link.title}
            as={NavLink}
            to={link.path}>
            {link.title}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default ProfileMenu;
