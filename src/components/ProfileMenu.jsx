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
    <Menu placement='bottom-end'>
      <MenuButton>
        <UserAvatar src={user?.photoURL} />
      </MenuButton>
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
