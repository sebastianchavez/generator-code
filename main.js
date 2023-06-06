const { app, BrowserWindow, Menu, ipcMain } = require("electron");
const path = require('path')
let appWin;


createWindow = () => {
    appWin = new BrowserWindow({
        width:  1280,
        height: 800,
        title: "Code Generator",
        resizable: false,
        webPreferences: {
            contextIsolation: false,
            nodeIntegration: true
        }
    });
    
    appWin.loadURL(path.join(__dirname,`/dist/generator-code/index.html`));

    // appWin.setMenu(Menu.buildFromTemplate(menu));
    appWin.setMenu(null);

    appWin.webContents.openDevTools();

    appWin.on("closed", () => {
        appWin = null;
    });
}

app.on("ready", createWindow);

app.on("window-all-closed", () => {
    if (process.platform !== "darwin") {
      app.quit();
    }
});

module.exports = {
    appWin
}

require('./src/electron/angular')
