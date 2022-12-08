const ipcRenderer = require('electron').ipcRenderer;

ipcRenderer.send('getpath', "iwant");
ipcRenderer.on('recievepath', function(event,data) {localStorage.setItem('path', data)});
