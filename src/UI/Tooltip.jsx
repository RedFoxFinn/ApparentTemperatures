
import { classifyChill, classifyWind } from '../helpers/cssClassifier'

const Tooltip = ({val, temp, wind}) => {
  return (
    <table className="tooltiptext">
      <tr className={classifyChill(temp)}><td>Temperature °C</td><td>{temp}</td></tr>
      <tr className={classifyWind(wind)}><td>Wind m/s</td><td>{wind}</td></tr>
      <tr className={classifyChill(val)}><td>Wind chill</td><td>{val}</td></tr>
      <tr className='diff'><td>Difference</td><td>{(val-temp).toFixed(2)}</td></tr>
    </table>
  )
}

export default Tooltip