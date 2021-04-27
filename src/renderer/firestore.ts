import { ipcRenderer } from 'electron';
import {
  RUN_FIRESTORE_QUERY,
} from '../constants/events';

export const firestoreRenderer = {
  runQuery: (query: String) => {
    return ipcRenderer.invoke(RUN_FIRESTORE_QUERY, query).then((result) => {
      console.log(result);
    });
  },
};


