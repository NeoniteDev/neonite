'use strict';
const {
  dialog: dialog,
  ipcMain: ipcMain,
  app: app,
  BrowserWindow: BrowserWindow
} = require("electron");
const server = require("./app");
const client = require("discord-rich-presence")("460412604209168394");
const fs = require("fs");
const path = require("path");
var configFile = path.join(__dirname, "/config/config.json");
var config = require(configFile);
var shopFile = path.join(__dirname, "/config/shop.json");
var shop = require(shopFile);
var athenaFile = path.join(__dirname, "/config/aabbccddeeff11223344556677889900/profiles/profile_athena.json");
var coreFile = path.join(__dirname, "/config/aabbccddeeff11223344556677889900/profiles/profile_common_core.json");
//Options for the message
const options = {
  type: "info",
  title: "Action Done!",
  buttons: ["OKAY Boomer"],
  message: "DONE!"
};
let win;
/**
 * @return {undefined}
 */
function createWindow() {
  (win = new BrowserWindow({
    width: 1024,
    height: 600,
    icon: "./bs.png",
    webPreferences: {
      nodeIntegration: true
    }
  })).loadFile("web/index.html");
}
//discord rich presence
client.updatePresence({
  state: "Fortnite Server Emulator",
  details: "https://discord.gg/hdVX7Rj",
  largeImageKey: "fn",
  smallImageKey: "bs",
  instance: true
}),
/**
 * Panel options
 * Ipc events that got triggered using ipc.js 
 * THIS CODE IS SO UGLY SO GOOD LUCK UNDERSTANDING IT :SHRUG:
 */
 ipcMain.on("call-mainjsfunction", (canCreateDiscussions, i) => {
  const jiveUser = dialog.showMessageBox(null, options);
  console.log(jiveUser);
  /** @type {string} */
  config.name = i;
  fs.writeFile(configFile, JSON.stringify(config, null, 2), function (animate_param) {
    if (animate_param) {
      return console.log(animate_param);
    }
  });
}), ipcMain.on("call-mainjsfunction1", (canCreateDiscussions, paintHorizontalGrid) => {
  const jiveUser = dialog.showMessageBox(null, options);
  console.log(jiveUser);
  config.announcement = paintHorizontalGrid;
  fs.writeFile(configFile, JSON.stringify(config, null, 2), function (animate_param) {
    if (animate_param) {
      return console.log(animate_param);
    }
  });
}), ipcMain.on("call-mainjsfunction2", (canCreateDiscussions, i) => {
  const jiveUser = dialog.showMessageBox(null, options);
  console.log(jiveUser);
  shop.featured1 = i;
  fs.writeFile(shopFile, JSON.stringify(shop, null, 2), function (animate_param) {
    if (animate_param) {
      return console.log(animate_param);
    }
  });
}), ipcMain.on("call-mainjsfunction3", (canCreateDiscussions, i) => {
  const jiveUser = dialog.showMessageBox(null, options);
  console.log(jiveUser);
  shop.featured2 = i;
  fs.writeFile(shopFile, JSON.stringify(shop, null, 2), function (animate_param) {
    if (animate_param) {
      return console.log(animate_param);
    }
  });
}), ipcMain.on("call-mainjsfunction4", (canCreateDiscussions, paintHorizontalGrid) => {
  const jiveUser = dialog.showMessageBox(null, options);
  console.log(jiveUser);
  config.season = paintHorizontalGrid;
  fs.writeFile(configFile, JSON.stringify(config, null, 2), function (animate_param) {
    if (animate_param) {
      return console.log(animate_param);
    }
  });
}), ipcMain.on("call-mainjsfunction5", (canCreateDiscussions, i) => {
  const jiveUser = dialog.showMessageBox(null, options);
  console.log(jiveUser);
  shop.daily1 = i;
  fs.writeFile(shopFile, JSON.stringify(shop, null, 2), function (animate_param) {
    if (animate_param) {
      return console.log(animate_param);
    }
  });
}), ipcMain.on("call-mainjsfunction6", (canCreateDiscussions, i) => {
  const jiveUser = dialog.showMessageBox(null, options);
  console.log(jiveUser);
  shop.daily2 = i;
  fs.writeFile(shopFile, JSON.stringify(shop, null, 2), function (animate_param) {
    if (animate_param) {
      return console.log(animate_param);
    }
  });
}), ipcMain.on("call-mainjsfunction7", (canCreateDiscussions, i) => {
  const jiveUser = dialog.showMessageBox(null, options);
  console.log(jiveUser);
  shop.daily3 = i;
  fs.writeFile(shopFile, JSON.stringify(shop, null, 2), function (animate_param) {
    if (animate_param) {
      return console.log(animate_param);
    }
  });
}), ipcMain.on("call-mainjsfunction8", (canCreateDiscussions, i) => {
  const jiveUser = dialog.showMessageBox(null, options);
  console.log(jiveUser);
  shop.daily4 = i;
  fs.writeFile(shopFile, JSON.stringify(shop, null, 2), function (animate_param) {
    if (animate_param) {
      return console.log(animate_param);
    }
  });
}), ipcMain.on("call-mainjsfunction9", (canCreateDiscussions, i) => {
  const jiveUser = dialog.showMessageBox(null, options);
  console.log(jiveUser);
  shop.daily5 = i;
  fs.writeFile(shopFile, JSON.stringify(shop, null, 2), function (animate_param) {
    if (animate_param) {
      return console.log(animate_param);
    }
  });
}), ipcMain.on("call-mainjsfunction10", (canCreateDiscussions, i) => {
  const jiveUser = dialog.showMessageBox(null, options);
  console.log(jiveUser);
  shop.daily6 = i;
  fs.writeFile(shopFile, JSON.stringify(shop, null, 2), function (animate_param) {
    if (animate_param) {
      return console.log(animate_param);
    }
  });
}), ipcMain.on("call-mainjsfunction11", (canCreateDiscussions, defaultTemplateId) => {
  const jiveUser = dialog.showMessageBox(null, options);
  console.log(jiveUser);
  /** @type {string} */
  templateId = defaultTemplateId;
  fs.readFile(athenaFile, (flagError, array) => {
    if (flagError) {
      return console.error(flagError);
    }
    (array = JSON.parse(array.toString())).items[templateId] = {
      templateId: templateId,
      attributes: {
        max_level_bonus: 0,
        level: 1,
        item_seen: 1,
        xp: 0,
        variants: [],
        favorite: false
      },
      quantity: 1
    };
    fs.writeFile(athenaFile, JSON.stringify(array), (flagError, animate_param) => {
      if (flagError) {
        return console.error(flagError);
      }
      console.log(animate_param);
    });
  });
}), ipcMain.on("call-mainjsfunction12", (canCreateDiscussions, i) => {
  const jiveUser = dialog.showMessageBox(null, options);
  console.log(jiveUser);
  fs.readFile(coreFile, (flagError, array) => {
    if (flagError) {
      return console.error(flagError);
    }
    (array = JSON.parse(array.toString())).items.gifting.attributes.fromAccountId = i;
    fs.writeFile(coreFile, JSON.stringify(array), (flagError, i) => {
      if (flagError) {
        return console.error(flagError);
      }
    });
  });
}), ipcMain.on("call-mainjsfunction13", (canCreateDiscussions, type) => {
  const jiveUser = dialog.showMessageBox(null, options);
  console.log(jiveUser);
  fs.readFile(coreFile, (flagError, array) => {
    if (flagError) {
      return console.error(flagError);
    }
    /** @type {string} */
    (array = JSON.parse(array.toString())).items.gifting.attributes.lootList[0].itemType = type;
    /** @type {string} */
    array.items.gifting.attributes.lootList[0].itemGuid = type;
    fs.writeFile(coreFile, JSON.stringify(array), (flagError, i) => {
      if (flagError) {
        return console.error(flagError);
      }
    });
  });
}), ipcMain.on("call-mainjsfunction14", (canCreateDiscussions, i) => {
  const jiveUser = dialog.showMessageBox(null, options);
  console.log(jiveUser);
  fs.readFile(coreFile, (flagError, array) => {
    if (flagError) {
      return console.error(flagError);
    }
    /** @type {string} */
    (array = JSON.parse(array.toString())).items.gifting.templateId = "GiftBox:" + i;
    fs.writeFile(coreFile, JSON.stringify(array), (flagError, i) => {
      if (flagError) {
        return console.error(flagError);
      }
    });
  });
}), app.on("ready", createWindow), app.on("window-all-closed", () => {
  if ("darwin" !== process.platform) {
    app.quit();
  }
}), app.on("activate", () => {
  if (null === win) {
    createWindow();
  }
});