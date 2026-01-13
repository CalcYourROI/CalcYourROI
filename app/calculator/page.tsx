'use client'
import { useState } from 'react'
import { calculateROI } from '@/lib/calc'

export default function Calculator() {
  const [form, setForm] = useState({
    price: 300000,
    down: 20,
    rate: 7,
    years: 30,
    rent: 2500,
    taxes: 300,
    insurance: 100,
    maintenance: 150
  })

  const result = calculateROI(form)

  function update(e) {
    setForm({ ...form, [e.target.name]: Number(e.target.value) })
  }

  return (
    <div style={{ padding: 40 }}>
      <h1>Rental ROI Calculator</h1>

      {Object.keys(form).map(key => (
        <div key={key}>
          <label>{key}</label>
          <input
            name={key}
            value={form[key]}
            onChange={update}
          />
        </div>
      ))}

      <h2>Results</h2>
      <pre>{JSON.stringify(result, null, 2)}</pre>
    </div>
  )
}
