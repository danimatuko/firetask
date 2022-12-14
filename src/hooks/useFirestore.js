import { useContext, useState } from 'react';
import { json } from 'react-router-dom';
import { FirestoreContext } from '../context/FireStoreContext';
import { firestore, timestamp } from '../firebase/config';

export const useFirestore = (collection) => {
  const { state, dispatch } = useContext(FirestoreContext);
  const [document, setDocument] = useState(null);
  const [error, setError] = useState(null);

  // collection ref
  const ref = firestore.collection(collection);

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
      console.log(err);
      dispatch({ type: 'ERROR', payload: err.message });
    }
  };

  const updateDocument = async (id, data) => {
    dispatch({ type: 'IS_PENDING' });
    try {
      const updatedDocument = await ref.doc(id).update(data);
      dispatch({
        type: 'UPDATE_DOCUMENT',
        payload: updatedDocument,
      });

      return updateDocument;
    } catch (err) {
      console.log(err);
      dispatch({ type: 'ERROR', payload: err.message });
    }
  };

  const deleteDocument = async (id) => {
    dispatch({ type: 'IS_PENDING' });

    try {
      await ref.doc(id).delete();
      dispatch({ type: 'DELETED_DOCUMENT' });
    } catch (err) {
      console.log(err);
      dispatch({ type: 'ERROR', payload: 'could not delete' });
    }
  };

  const reset = () => setTimeout(() => dispatch({ type: 'RESET' }), 5000);

  return { addDocument, deleteDocument, updateDocument, reset, state };
};
