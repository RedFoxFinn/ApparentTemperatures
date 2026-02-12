
/*
import { useState } from "react"
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import AcUnitSharpIcon from '@mui/icons-material/AcUnitSharp';
import WarningSharpIcon from '@mui/icons-material/WarningSharp';
*/
import About from "./About"
import { ChillMatrix } from "./ChillMatrix"

import './styles/app.css'

const App = () => {
  /*const [colorScheme, setColorScheme] = useState('chill') // alt: 'danger'
  const handleScheme = (event, newScheme) => {
    setColorScheme(newScheme);
  };
  return (
    <article className="app" >
      <header>
        <h1>Wind chill visualizer</h1>
        <FormGroup style={{display: 'inline-flex', alignItems: 'center'}}>
          <FormControlLabel 
            control={<ToggleButtonGroup
              className="toggles"
              value={colorScheme}
              exclusive
              onChange={handleScheme}
              aria-label="color scheme"
              style={{paddingRight: '2rem'}}
            >
              <ToggleButton value="chill" aria-label="chill" style={{backgroundColor: 'lightskyblue'}}>
                Chill <AcUnitSharpIcon style={{paddingLeft: '0.3rem'}}/>
              </ToggleButton>
              <ToggleButton value="danger" aria-label="danger" style={{backgroundColor: 'salmon'}}>
                <WarningSharpIcon style={{paddingRight: '0.3rem'}}/> Danger
              </ToggleButton>
            </ToggleButtonGroup>}
          label={<p style={{fontSize: '1.75rem'}}>Color scheme</p>}
          />
        </FormGroup>
      </header>
      <ChillMatrix />
    </article>
  )
  */
  return (
    <article className="app" >
      <header>
        <h1><span className="star">{'\u2726'}</span> Wind chill visualizer</h1>
      </header>
      <ChillMatrix />
      <About />
    </article>
  )
}

export default App