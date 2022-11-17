import { useState } from "react";
import { auth, firestore } from "../firebase/config";
import { useAuthContext } from "./useAuthContext";

export const useLogout = () => {
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const { dispatch, user } = useAuthContext();

  const logout = async () => {
    setError(null);
    setIsPending(true);

    try {
      // update online status
      const { uid } = user;
      await firestore.collection("users").doc(uid).update({
        online: false,
      });

      // sign the user out
      await auth.signOut();

      // dispatch logout action
      dispatch({ type: "LOGOUT" });

      // update state
      setIsPending(false);
      setError(null);
    } catch (err) {
      setError(err.message);
      setIsPending(false);
    }
  };

  return { logout, error, isPending };
};
