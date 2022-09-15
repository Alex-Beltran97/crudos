const { GoogleSpreadsheet } = require("google-spreadsheet")
const credenciales = require("../../json/credenciales.json")

let googleId = "1Ps2swOsTEXexNh86CyH5qxSZOlx6gOigk9pXSsuGdTg"

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
