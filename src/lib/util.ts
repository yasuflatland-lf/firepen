import { BrowserWindow } from 'electron';

export default function hasWindow(mainWindow: BrowserWindow): boolean {
  return mainWindow !== null && !mainWindow.isDestroyed();
}
