import { useState } from "react"

export function Kelvin({ value }) {
  return (
    <div className="temp-card">
      The temperature in Kelvin is: <span className="temp">{value}K</span>
    </div>
  )
}

export function Fahrenheit({ value }) {
  return (
    <div className="temp-card">
      The temperature in Fahrenheit is:
      <span className="temp">{value}°F</span>
    </div>
  )
}

/* 
  If we wanted to implement an input field with which a user 
  can convert a temperature from Celsius to Kelvin and 
  Fahrenheit, we can use the renderKelvin and renderFahrenheit
  render props.

  These props receive the value of the input, which they convert
  to the correct temperature in either K or °F.
 */
export function TemperatureConverter(props) {
  const [value, setValue] = useState(0)

  return (
    <div className="card">
      <input
        type="number"
        placeholder="Degrees Celcius"
        onChange={(e) => setValue(parseInt(e.target.value))}
      />

      {props.renderKelvin({ value: Math.floor(value + 273.15) })}
      {props.renderFahrenheit({ value: Math.floor((value * 9) / 5 + 32) })}
      {props.consoleCheck({ run: "running" })}
    </div>
  )
}
