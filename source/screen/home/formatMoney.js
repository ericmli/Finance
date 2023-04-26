export function formatMoney(
  amount,
  decimalCount = 2,
  decimal = '.',
  thousands = ','
) {
  decimalCount = Math.abs(decimalCount)
  decimalCount = isNaN(decimalCount) ? 2 : decimalCount

  const negativeSign = amount < 0 ? '-' : ''

  const i = parseInt(
    (amount = Math.abs(Number(amount) || 0).toFixed(decimalCount))
  ).toString()
  const j = i.length > 3 ? i.length % 3 : 0

  return (
    negativeSign +
    (j ? i.substr(0, j) + thousands : '') +
    i.substr(j).replace(/(\d{3})(?=\d)/g, '$1' + thousands) +
    (decimalCount
      ? decimal +
        Math.abs(amount - i)
          .toFixed(decimalCount)
          .slice(2)
      : '')
  )
}

export function lastNumber(number) {
  const regex = /\d{4}(?!\d)/g
  const matches = number.toString().match(regex)
  if (matches && matches.length > 0) {
    return matches[matches.length - 1]
  } else {
    return null
  }
}

export function showCard(number) {
  const formated = number.toString().replace(/(\d{4})/g, '$1 ')
  return formated
}
