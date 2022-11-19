import React from "react";
import { Avatar } from "@chakra-ui/react";

const UserAvatar = (props) => {
  return (
    <Avatar
      ml='4'
      size='sm'
      name='user image'
      src={props.src}
      cursor='pointer'
    />
  );
};

export default UserAvatar;
