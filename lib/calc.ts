export function calculateROI(data) {
  const loan = data.price * (1 - data.down / 100)
  const rate = data.rate / 100 / 12
  const term = data.years * 12

  const mortgage = (loan * rate) / (1 - Math.pow(1 + rate, -term))
  const expenses = mortgage + data.taxes + data.insurance + data.maintenance
  const cashFlow = data.rent - expenses

  return {
    mortgage,
    monthlyCashFlow: cashFlow,
    annualCashFlow: cashFlow * 12,
    capRate: (cashFlow * 12) / data.price * 100
  }
}
