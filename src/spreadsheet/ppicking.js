const { GoogleSpreadsheet } = require("google-spreadsheet")
const credenciales = require("../../json/credenciales.json")

let googleId = "1GkHlu6h272ORLCump5BFrCxQKqkMv1Z72ZV5gureo3I"

//TODO : agregar id sheet en env

async function accederGoogleSheet() {
  try {
    const document = new GoogleSpreadsheet(googleId)
    await document.useServiceAccountAuth(credenciales)
    await document.loadInfo()
    const sheet = document.sheetsByIndex[1]
    let register = await sheet.getRows()
    return register
  } catch (e) {
    console.error(e.message, "no tiene permisos de sheet")
    return {message : e.message}
  }
}

module.exports = {
  accederGoogleSheet,
}
