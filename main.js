// Modules
const {app, BrowserWindow, webContents, session, dialog, globalShortcut, Menu, MenuItem, ipcMain} = require('electron');
const fs = require('fs');
const path = require('path');

const sample_cocktail = {
    "cocktails" : [
        {
            "name" : "The Nikka Gin Martini",
            "description" : "A Nikka spin on a Classic Dry Martini.",
            "image" : "data/images/nikka_martini.jpg",
            "ingredients" : {
                "Nikka Coffey Gin" : [47.0,2],
                "Lo-Fi Aperitifs Dry Vermouth" : [16.5, 1],
                "Angostura Orange Bitters" : [56, 0.0625]
            }
        },

        {
            "name" : "The Bulleit Manhattan",
            "description" : "A Manhattan using Bulleit Rye.",
            "image" : "data/images/bulleit_manhattan.jpg",
            "ingredients" : {
                "Bulleit Rye Whiskey" : [45.0,2],
                "Lo-Fi Aperitifs Dry Vermouth" : [16.5, 0.5],
                "Lo-Fi Aperitifs Sweet Vermouth" : [17.5,0.5],
                "Angostura Aromatic Bitters" : [44.7, 0.03125]
            }
        },

        {
            "name" : "The Ould Fashioned",
            "description" : "A classic, even classic-er.",
            "image" : "data/images/ould_fashioned.jpg",
            "ingredients" : {
                "Four Roses Single Barrel Bourbon Whiskey" : [50.0,2],
                "Simple Syrup" : [0.0, 0.25],
                "Bitter Truth's Bogart's Bitters" : [42.1, 0.125],
                "Orange Peel Oil" : [0.0, 0.0],
                "Maraschino Cherry" : [0.0, 0.0],
                "Orange Curl" : [0.0, 0.0]
            }
        },

        {
            "name" : "The Captain's Daiquiri",
            "description" : "A Daiquiri using Captain Morgan Rum.",
            "image" : "data/images/captain_daiquiri.jpg",
            "ingredients" : {
                "Captain Morgan's Private Stock Rum" : [40.0,2],
                "Simple Syrup" : [0.0, 0.25],
                "Lime Juice" : [0.0, 0.5]
            }
        },

        {
            "name" : "VIP Side Car",
            "description" : "A DeLuxe Interpretation of the Side Car.",
            "image" : "data/images/vip_side_car.jpg",
            "ingredients" : {
                "Monnet VSOP Cognac" : [40.0,2],
                "Cointreau" : [40.0, 0.25],
                "Lemon Juice" : [0.0, 0.5]
            }
        },

        {
            "name" : "Saint Jack's Rose",
            "description" : "A Jack Rose cocktail using St. George Apple Brandy.",
            "image" : "data/images/saint_jacks_rose.jpg",
            "ingredients" : {
                "St. George Apple Brandy" : [35.0,2],
                "Grenadine" : [4.0, 0.25],
                "Lemon Juice" : [0.0, 0.5]
            }
        },

        {
            "name" : "The LAST／WORD",
            "description" : "A Nikka spin on the classic cocktail.",
            "image" : "data/images/last_word.jpg",
            "ingredients" : {
                "Nikka Coffey Gin" : [47.0,0.75],
                "Green Chartreuse" : [55.0, 0.75],
                "Lime Juice" : [0.0, 0.25],
                "Lemon Juice" : [0.0, 0.25],
                "Yuzu Juice" : [0.0, 0.25],
                "Luxardo Maraschino Liqueur" : [32.0, 0.75]
            }
        },

        {
            "name" : "The Vodka Red Bull",
            "description" : "An evil elixir that will give you a heart attack.",
            "image" : "data/images/vodka_red_bull.jpg",
            "ingredients" : {
                "Red Bull Energy Drink" : [0.0,8.4],
                "Tito's Vodka" : [40.0, 2.0]
            }
        },

        {
            "name" : "The Japanese Lemon Drop Martini",
            "description" : "The ladies will love you for this.",
            "image" : "data/images/lemon_drop.jpg",
            "ingredients" : {
                "Haku Vodka" : [40.0,2.0],
                "Yuzu Juice" : [0.0, 1.0],
                "Cointreau" : [40.0, 0.5],
                "Simple Syrup" : [0.0, 0.25],
                "Sugar Rim" : [0.0, 0.0]
            }
        },

        {
            "name" : "The Russian Santa Clause",
            "description" : "A Christmas spin on the White Russian.",
            "image" : "data/images/russian_santa.jpg",
            "ingredients" : {
                "Tito's Vodka" : [40.0,1.5],
                "Somrus Chai Cream Liqueur" : [30.0, 1.0],
                "Mr. Black Cold Brew Coffee Liqueur" : [25.0, 0.66666666666],
                "Cinnamon Stick" : [0.0, 0.0],
                "Cinnamon Powder" : [0.0, 0.0]
            }
        },


        {
            "name" : "The Flight of the Buffalo",
            "description" : "A complex Whiskey cocktail sure to become a classic.",
            "image" : "data/images/flight_buffalo.jpg",
            "ingredients" : {
                "Buffalo Trace Whiskey" : [45.0,2.0],
                "Crème de Violette" : [16.0, 0.5],
                "Luxardo Maraschino Liqueur" : [32.0, 0.75],
                "Lemon Juice" : [0.0, 0.75],
                "Ginger Syrup" : [0.0, 0.5],
                "Angostura Aromatic Bitters" : [0.0,0.03125],
                "Two Maraschino Cherries" : [0.0, 0.0]
            }
        },

        {
            "name" : "The Penicillin",
            "description" : "A contemporary modern classic.",
            "image" : "data/images/penicillin.jpg",
            "ingredients" : {
                "Monkey Shoulder Blended Scotch Whiskey" : [43.0,2.0],
                "Lemon Juice" : [0.0, 0.75],
                "Honey-Ginger Syrup" : [0.0, 0.75],
                "Bunnahabhain Abhainn Araig" : [50.8,0.25],
                "Candied Ginger" : [0.0, 0.0],
                "Lemon Peel" : [0.0,0.0]
            }
        }


    ]
};


if(process.argv.includes("-h") || process.argv.includes("--help")){
  console.log("barMate version 1.0.0 - Create cocktails and view your recipes!\n\nYou may run this app in dev mode. Unsupported command line switches will be ignored.\n\nOptions:\n\t-h, --help\tShows this menu.\n\t-d, --dev\tShow the chromium dev tools on launch.");
  process.exit();
}

const BARMATEDATAPATH = path.join(app.getPath('documents'), "barMate");
const DATAPATH = path.join(BARMATEDATAPATH, "data");
const IMAGEPATH = path.join(DATAPATH, "images")

if (!fs.existsSync(BARMATEDATAPATH)) {
    fs.mkdirSync(BARMATEDATAPATH);
}
if (!fs.existsSync(DATAPATH)) {
    fs.mkdirSync(DATAPATH);
    fs.writeFileSync(path.join(DATAPATH, "cocktail_journal.json"), JSON.stringify(sample_cocktail));
}
if (!fs.existsSync(IMAGEPATH)) {
    fs.mkdirSync(IMAGEPATH);

}



const ARGS_DEV = (process.argv.includes("--dev") || process.argv.includes('-d')) ? true : false;

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow //, secWindow

let mainMenu = new Menu()

let menuItem1 = new MenuItem({ label: 'Electron' })

mainMenu.append(menuItem1)

// Create a new BrowserWindow when `app` is ready
function createWindow () {



  mainWindow = new BrowserWindow({
    width: 1920 , height: 1080,
    x: 0, y: 50,
    minWidth: 100, minHeight: 100,
    maxWidth: 2560, maxHeight: 1440,
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
  mainWindow.loadFile('./index.html');

  if (ARGS_DEV)
  {
    mainWindow.webContents.openDevTools();
  }

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


ipcMain.on('getpath', function(event,data) { mainWindow.webContents.send('recievepath', app.getPath('documents'))});

// Electron `app` is ready
app.on('ready', createWindow);

// Quit when all windows are closed - (Not macOS - Darwin)
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
})

// When app icon is clicked and app is running, (macOS) recreate the BrowserWindow
app.on('activate', () => {
  if (mainWindow === null) createWindow();
})

