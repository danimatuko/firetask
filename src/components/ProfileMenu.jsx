import React from "react";
import { Menu, MenuButton, MenuList, MenuItem, Avatar } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import { useLogout } from "../hooks/useLogout";
import { useAuthContext } from "../hooks/useAuthContext";
import UserAvatar from "./UserAvatar";

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
  const { user } = useAuthContext();
  const { logout } = useLogout();

  return (
<<<<<<< HEAD
    <Menu>
      <MenuButton>
        <UserAvatar />
      </MenuButton>
=======
    <Menu placement='bottom-end'>
      <MenuButton
        as={Avatar}
        ml='4'
        size='sm'
        name='anubra266'
        src='https://avatars.githubusercontent.com/u/30869823?v=4'
        cursor='pointer'></MenuButton>
>>>>>>> rightSideBar
      <MenuList>
        {!user &&
          data.map((link) => (
            <MenuItem
              key={link.title}
              as={NavLink}
              to={link.path}>
              {link.title}
            </MenuItem>
          ))}
        {user && <MenuItem onClick={logout}>Logout</MenuItem>}
      </MenuList>
    </Menu>
  );
};

export default ProfileMenu;
