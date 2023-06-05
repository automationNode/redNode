console.log("-->Starting Software");

let nodeRed = require("node-red");
let express = require("express");
let window = require("./window");
let utils = require("./utils");
let http = require("http");

start();
async function start() {
  let app = express();
  let server = http.createServer(app);
  let settings = {
    httpAdminRoot: "/",
    httpNodeRoot: "/api",
    userDir: "./",
    functionGlobalContext: {},
    editorTheme: {
      page: {
        title: "Automation Node",
        favicon: __dirname + "/icon.png",
      },
      header: {
        title: "Automation Node",
        image: __dirname + "/icon.png",
        //url: "https://automationnode.github.io"
      },
      deployButton: {
        icon: __dirname + "/icon.png",
      },
      menu: {
        "menu-item-help": {
          label: "Automation Node",
          url: "https://automationnode.github.io",
        },
      },
    },
  };
  nodeRed.init(server, settings);
  app.use(settings.httpAdminRoot, nodeRed.httpAdmin);
  app.use(settings.httpNodeRoot, nodeRed.httpNode);
  server.listen(1880);
  nodeRed.start();
  await utils.wait(5000);
  window.start(1880, 1000, 800, true);
}
