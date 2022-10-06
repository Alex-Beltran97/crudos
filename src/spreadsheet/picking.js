const { GoogleSpreadsheet } = require("google-spreadsheet")
const credenciales = require("../../json/credenciales.json")

let googleId = "1WF6BubKPGjsogbFGCEfVHjgOGD_VQDqkFhY0Rwn9fVM"

async function accederGoogleSheet() {
  try {
    const document = new GoogleSpreadsheet(googleId)
    await document.useServiceAccountAuth(credenciales)
    await document.loadInfo()
    const sheet = document.sheetsByIndex[0]
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
