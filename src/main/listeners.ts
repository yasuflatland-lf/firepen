import { ipcMain, dialog, BrowserWindow } from 'electron';
import { RUN_FIRESTORE_QUERY } from '../constants/events';
import hasWindow from '../lib/util';
import run from '../lib/firestore';

const fs = require('fs-extra');

export default function setUtilsListeners(window: BrowserWindow) {
  ipcMain.handle(RUN_FIRESTORE_QUERY, async (_event, args) => {
    const promise = run();
    promise
      .then(() => console.log('Command has completed'))
      .catch(console.error);

    console.log(args);
    return 'pong';
  });

  ipcMain.handle(
    'show-save-dialog',
    async (_, filters: Electron.FileFilter[], path: string) => {
      ipcMain.removeAllListeners('write-save-result');
      if (hasWindow(window)) {
        const response = await dialog.showSaveDialog(window, {
          defaultPath: path,
          filters,
        });
        if (!response.canceled) {
          ipcMain.handleOnce('write-save-result', (_, result, errmsg) => {
            fs.writeFile(response.filePath, result, (err: any) => {
              if (err) dialog.showErrorBox(errmsg, String(err));
            });
          });
          return true;
        }
      }
      return false;
    }
  );
}
