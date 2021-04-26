import { ipcRenderer } from 'electron';
import {
  RUN_FIRESTORE_QUERY,
} from '../constants/events';

export const firestoreRenderer = {
  runQuery: () => {
    return ipcRenderer.invoke(RUN_FIRESTORE_QUERY, 'ping').then((result) => {
      console.log(result);
    });
  },
};


