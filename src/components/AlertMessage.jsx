import React from "react";
import { Alert, AlertIcon, AlertDescription } from "@chakra-ui/react";

const AlertMessage = (props) => {
  const { status, message } = props;

  return (
    <Alert status={status}>
      <AlertIcon />
      <AlertDescription>{message}</AlertDescription>
    </Alert>
  );
};

export default AlertMessage;
