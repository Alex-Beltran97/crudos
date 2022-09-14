const { GoogleSpreadsheet } = require("google-spreadsheet")
const credenciales = require("../../json/credenciales.json")

let googleId = "1b8WHzncsBZs3o8VLLmvQ7NWFpL9Os3xKMUl3dkMvRm4"

async function accederGoogleSheet() {
  const document = new GoogleSpreadsheet(googleId)
  await document.useServiceAccountAuth(credenciales)
  await document.loadInfo()
  const sheet = document.sheetsByIndex[0]

  let register = await sheet.getRows()
  return register
}

module.exports = {
  accederGoogleSheet,
}
