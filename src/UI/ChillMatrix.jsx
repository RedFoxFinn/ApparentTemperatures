
import { useMemo } from "react";

import { windChill } from '../helpers/windChillCalc'
import { classifyChill } from "../helpers/cssClassifier";
import Tooltip from "./Tooltip";
import './styles/matrix.css'
//import './styles/matrix-alt.css'
import './styles/tooltip.css'

const T_RANGE = {'start': 10, 'end': -60}    // Temperature range in Celsius
const V_RANGE = {'start': 1, 'end': 30}     // Wind speed range in m/s

const TEMPERATURES = Array.from({ length: Math.abs(T_RANGE.start) + Math.abs(T_RANGE.end) + 1 }, (_, i) => T_RANGE.start - i)
const WIND_SPEEDS = Array.from({ length: V_RANGE.end }, (_, i) => V_RANGE.start + i)

export const ChillMatrix = () => {
//export const ChillMatrix = ({colorScheme}) => {
  const chillValues = useMemo(() => {
    return TEMPERATURES.map(t => WIND_SPEEDS.map(v => windChill(t, v, 'FMI')))
  }, []);
  return <div className="matrix-container">
    <table className="chill-matrix">
      <thead>
        <tr>
          <th>°C \ m/s</th>
          {WIND_SPEEDS.map(v => <th key={v}>{v} m/s</th>)}
        </tr>
      </thead>
      <tbody>
        {TEMPERATURES.map((t, i) => (
          <tr key={t}>
            <th>{t} °C</th>
            {chillValues[i].map((chill, j) => <td className={`${classifyChill(chill)} tooltip`} key={j}>{chill}<Tooltip val={chill} temp={t} wind={j+1}/></td>)}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
}