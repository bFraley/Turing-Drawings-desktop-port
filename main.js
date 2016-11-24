// Electron window setup.
const electron = require('electron')
const app = electron.app
const BrowserWindow = electron.BrowserWindow
let mainWindow

function createWindow () {
  mainWindow = new BrowserWindow({width: 1200, height: 800})
  mainWindow.loadURL(`file://${__dirname}/index.html`)

  // Emitted when the window is closed.
  mainWindow.on('closed', function () {
    mainWindow = null
  })
}

// On Electron initialized ready event, create a browser window.
app.on('ready', createWindow)

// Quit when all windows are closed.
app.on('window-all-closed', function () {
  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', function () {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (mainWindow === null) {
    createWindow()
  }
})
