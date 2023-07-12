// https://javascriptpatterns.vercel.app/patterns/react-patterns/render-props

import { Students } from "./Example1/students.jsx";
import {
  Fahrenheit,
  Kelvin,
  TemperatureConverter,
} from "./Example1/temperatureConverter.jsx";
import Example2 from "./Example2/index.jsx";

/*   
 Overview With the Render Props pattern, we pass components as 
 props to other components. The components that are passed as 
 props can in turn receive props from that component.

Render props make it easy to reuse logic across multiple components.
 */
export default function RenderProps() {
  return (
    <div>
      <Example2 />
      <Students />
      <hr style={{ marginTop: 50, marginBottom: 50 }} />
      <TemperatureConverter
        renderKelvin={({ value }) => <Kelvin value={value} />}
        renderFahrenheit={({ value }) => <Fahrenheit value={value} />}
        consoleCheck={({ run }) => console.log(run)}
      />
    </div>
  );
}