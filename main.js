// Modules
const {app, BrowserWindow, webContents, session, dialog, globalShortcut, Menu, MenuItem} = require('electron')



// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow //, secWindow

let mainMenu = new Menu()

let menuItem1 = new MenuItem({ label: 'Electron' })

mainMenu.append(menuItem1)

// Create a new BrowserWindow when `app` is ready
function createWindow () {



  mainWindow = new BrowserWindow({
    width: 600 , height: 600,
    x: 0, y: 50,
    minWidth: 100, minHeight: 100,
    maxWidth: 1920, maxHeight: 1080,
    frame: true,
    titleBarOverlay: {
      titleBarOverlay: true, 
      color: '#2B2E3B',
      symbolColor: 'orange',
    },
    webPreferences: {
      // --- !! IMPORTANT !! ---
      // Disable 'contextIsolation' to allow 'nodeIntegration'
      // 'contextIsolation' defaults to "true" as from Electron v12
      contextIsolation: false,
      nodeIntegration: true,
      backgroundColor: '#2B2E3B'
    }
  })


  // secWindow = new BrowserWindow({
  //   width: 800, height: 600,
  //   x: 200, y: 200,
  //   webPreferences: {
  //     nodeIntegration: true, 
  //     partition: 'persist:part1',
  //   }
  // })


  //console.log(Object.is(ses, customSes))

  // Load index.html into the new BrowserWindow
  mainWindow.loadFile('index2.html')



 mainWindow.webContents.openDevTools()

  mainWindow.webContents.on('did-finish-load', () =>{
    // dialog.showOpenDialog({
    //   buttonLabel: "Select a photo",
    //   defaultPath: app.getPath('desktop'),
    //   properties: ['multiSelections', 'promptToCreate', 'openFile']
    // }).then(result => {
    //   console.log(result)
    // })
    // dialog.showSaveDialog({}).then(result => {
    //   console.log(result)
    // })

    // const answers = ['Yes', 'No', 'Maybe']
    // dialog.showMessageBox({
    //   title: 'Message Box',
    //   message: 'Please select an option',
    //   detail: 'Message details.',
    //   buttons: answers
    // }).then( result => {
    //   console.log(`User selected: ${answers[result.response]}`)
    // })
  })

/*
  let wc = mainWindow.webContents
  //console.log( webContents.getAllWebContents())

  wc.on('did-finish-load', () => {
    console.log('Content Fully Loaded')
  })
  wc.on('dom-ready', () => {
    console.log('DOM Ready')
  })

  wc.on('context-menu', (e, params) => {
    let selectedText = params.selectionText


    wc.executeJavaScript(`alert("${selectedText}")`)
  

  })*/
  // mainWindow.webContents.on('media-started-playing', () => {
  //   console.log('Video Started')
  // })
  // mainWindow.webContents.on('media-paused', () => {
  //   console.log('Video Paused')
  // })
  // wc.on('login', (e, request, authInfo, callback) => {
  //   console.log('logging in: ')
  //   callback('user', 'passwd')
  // })

  // mainWindow.webContents.on('did-navigate', (e, url, statusCode, message) => {
  //   console.log(`Navigated to: ${url}`)
  //   console.log(statusCode)
  // })
  // mainWindow.webContents.on('before-input-event', (e, input) => {
  //   console.log(`${input.key}: ${input.type}`)
  // })

  // mainWindow.webContents.on('new-window', (e, url) => {
  //   e.preventDefault()
  //   console.log(`preventing new window for: ${url} `)
  // })

  // wc.on('did-finish-load', () => {
  //   console.log('Content fully loaded')
  // })
  // wc.on('dom-ready', () => {
  //   console.log('DOM Ready')
  // })
/* 
  mainWindow.on('focus', () => {
    console.log('Main win focused')
  })

  secondaryWindow.on('focus', () => {
    console.log('Secondary win focused')
  })

 app.on('browser-window-focus', () => {
  console.log('App focused')
 })

 console.log(BrowserWindow.getAllWindows())
*/

  // Listen for window being closed
  mainWindow.on('closed',  () => {
    mainWindow = null
  })
  // secWindow.on('closed',  () => {
  //   secWindow = null
  // })
}




// Electron `app` is ready
app.on('ready', createWindow)

// Quit when all windows are closed - (Not macOS - Darwin)
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})

// When app icon is clicked and app is running, (macOS) recreate the BrowserWindow
app.on('activate', () => {
  if (mainWindow === null) createWindow()
})
