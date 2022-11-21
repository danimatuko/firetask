import { useContext } from 'react';
import { FirestoreContext } from '../context/FireStoreContext';
import { firestore, timestamp } from '../firebase/config';

export const useFirestore = (collection) => {
  const { state, dispatch } = useContext(FirestoreContext);

  // collection ref
  const ref = firestore.collection(collection);

  // add a document
  const addDocument = async (doc) => {
    dispatch({ type: 'IS_PENDING' });

    try {
      const createdAt = timestamp.fromDate(new Date());
      const addedDocument = await ref.add({ ...doc, createdAt });
      dispatch({
        type: 'ADDED_DOCUMENT',
        payload: addedDocument,
      });
    } catch (err) {
      dispatch({ type: 'ERROR', payload: err.message });
    }
  };

  // delete a document
  const deleteDocument = async (id) => {
    dispatch({ type: 'IS_PENDING' });

    try {
      await ref.doc(id).delete();
      dispatch({ type: 'DELETED_DOCUMENT' });
    } catch (err) {
      dispatch({ type: 'ERROR', payload: 'could not delete' });
    }
  };

  return { addDocument, deleteDocument, state };
};
