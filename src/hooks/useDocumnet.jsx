import { useEffect, useState } from 'react';
import { firestore } from '../firebase/config';

const useDocumnet = (collection, id) => {
  const [document, setDocument] = useState(null);
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);

  useEffect(() => {
    setIsPending(true);
    firestore
      .collection(collection)
      .doc(id)
      .get()
      .then((doc) => {
        if (!doc.data()) throw Error('Document does not exist');
        setDocument(doc.data());
      })
      .catch((error) => setError(error.message))
      .finally(() => setIsPending(false));
  }, [collection, id]);

  return { document, error, isPending };
};

export default useDocumnet;
