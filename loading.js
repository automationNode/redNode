let electron = require("electron");

let width = 600;
let heigth = 540;
let loadingWindow = {};

async function start() {
  electron.app.whenReady().then(() => {
    loadingWindow = new electron.BrowserWindow({
      icon: "./icon.png",
      width: width,
      height: heigth,
      x: electron.screen.getPrimaryDisplay().bounds.width / 2 - width / 3,
      y: electron.screen.getPrimaryDisplay().bounds.height / 2 - heigth / 3,
      autoHideMenuBar: true,
      frame: false,
      transparent: true,
      webPreferences: {
        nodeIntegration: true,
      },
    });
    loadingWindow.loadFile(`${__dirname}/loading.html`);
  });
}

async function end() {
  loadingWindow.close();
}

module.exports = { start, end };
