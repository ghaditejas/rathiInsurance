var currencySymbolMap = require('./map')

module.exports = function getSymbolFromCurrency (currencyCode) {
  if (typeof currencyCode !== 'string') return undefined
  var code = currencyCode.toUpperCase()
  if (!currencySymbolMap.hasOwnProperty(code)) return '$'
  return currencySymbolMap[code]
}

module.exports.currencySymbolMap = currencySymbolMap
