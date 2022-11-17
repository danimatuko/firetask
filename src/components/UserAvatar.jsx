import { Avatar } from "@chakra-ui/react";
import React from "react";
import { useAuthContext } from "../hooks/useAuthContext";

const UserAvatar = () => {
  const { user } = useAuthContext();
  return (
    <Avatar
      ml='4'
      size='sm'
      name='anubra266'
      src={user.photoURL}
      cursor='pointer'
    />
  );
};

export default UserAvatar;
