import { useState } from "react";
import { auth, firestore, storage } from "../firebase/config";
import { useAuthContext } from "./useAuthContext";

export const useSignup = () => {
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const { dispatch } = useAuthContext();

  const signup = async (email, password, displayName, avatar) => {
    setError(null);
    setIsPending(true);

    try {
      // signup
      const res = await auth.createUserWithEmailAndPassword(email, password);

      if (!res) {
        throw new Error("Could not complete signup");
      }

      // uploud user profile image
      const uploudPath = `avatar/${res.user.uid}/${avatar.name}`;

      const profileImage = await storage.ref(uploudPath).put(avatar);
      const photoURL = await profileImage.ref.getDownloadURL();

      // add display name to user
      await res.user.updateProfile({ displayName, photoURL });

      // create a user document
      await firestore.collection("users").doc(res.user.uid).set({
        online: true,
        displayName,
        photoURL,
      });

      // dispatch login action
      dispatch({ type: "LOGIN", payload: res.user });

      setIsPending(false);
      setError(null);
    } catch (err) {
      console.log(err.code);
      err.code == "storage/unauthorized" // THE IMAGE WON'T BE UPLOUDED BUT THE USER IS STILL SINGED UP !!
        ? setError("Uploaded file must be an image and less than 1mb!")
        : setError(err.message);
      setIsPending(false);
    }
  };

  return { signup, error, isPending };
};
