const { app, BrowserWindow } = require("electron");
const path = require("path");

function criarJanela() {
  const janela = new BrowserWindow({
    width: 900,
    height: 600,
    minWidth: 600,
    minHeight: 400,
    center: true,
    title: "Copa do mundo",
    webPreferences: {
      preload: path.join(__dirname, "..", "preload", "preload.js"),
      contextIsolated: true,
    },
    icon: path.join(__dirname, "Futebol.jpg")
  })

  janela.loadFile("src/renderer/index.html");
  janela.on("closed", () =>{
    console.log("Janela fechada")
  })
}

app.whenReady().then(() => {
  criarJanela()
})

app.on("window-all-closed", () => {
  app.quit()
})