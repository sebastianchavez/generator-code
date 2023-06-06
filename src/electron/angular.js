const cp = require('child_process')
const exec = cp.exec
const { ipcMain, BrowserWindow,  } = require('electron')
const window = BrowserWindow

ipcMain.on('test', (event, info) => {
    exec('ng new test --directory=/Devs/ --style=scss --routing=true', (err, stdout, stderr) => {
        let focusedWindow = window.getFocusedWindow();
            focusedWindow.webContents.send('log','Into on test');
            if(err){
            ipcMain.
            focusedWindow.webContents.send('log',{err});
            console.log('ERROR:', err);
            return
        }
        console.log('stdout:', stdout);
        focusedWindow.webContents.send('log',{stdout});
    })
})