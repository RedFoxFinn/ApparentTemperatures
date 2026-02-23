
import './styles/about.css'

const About = () => {
  return (
    <article className="about">
      <h2>Projektista</h2>
      <p>Pieni ja yksinkertainen havainnollistamistyökalu, jonka avulla voi helposti ja nopeasti tarkistaa tuulen vaikutuksen lämpötilan tuntuun l. pakkasen purevuuteen välillä 10 – -60 sivistyneen maailman kansankielisellä asteikolla (Celciuksina). Ohjelma käyttää arvojen laskemisessa ilmatieteenlaitoksen käyttämää kaavaa tuulennopeuksilla 2 – 30 m/s ja mukautettua korjauskaavaa 1 m/s nopeuksille. Syynä tähän on se, että alkuperäisen kaavan olettama tuulennopeus on vähintään 1.8 m/s ja antaa pienemmillä arvoilla vääriä tuloksia 10 – 0 asteen lämpötiloissa.</p>
      <p>Vaihtoehtoisena laskukaavana koodissa on UKMET:n (Yhdisteneiden kuningaskuntien ilmatieteenlaitos) käyttämä versio, MUTTA se ei ole oletusarvoisesti käytössä EIKÄ sitä voi käyttöliittymästä käsin vaihtaa (vielä).</p>
      <a href='https://fi.wikipedia.org/wiki/Pakkasen_purevuus'>Pakkasen purevuus (wiki)</a>
      <h2>About</h2>
      <p>It's a little visualizing tool to quickly check the wind effect on apparent temperature in the range of 10 – -60 degrees centigrade. Calculations employ FMI (Finnish Meteorological Institute) formula (based on the "new" wind chill index (WCI) formula) on the wind speeds 2 – 30 m/s and a customized fix for the 1 m/s since otherwise the value would appear to be higher than the actual temperature on the range of 10 – 0 due to the assumption that the wind speed should be at least 1.8 m/s.</p>
      <p>In the code there is alternative calculating with UKMET formula (the actual "new" WCI formula), BUT that is not the default AND it cannot be changed from the UI (yet).</p>
      <a href='https://en.wikipedia.org/wiki/Wind_chill'>Wind chill (wiki)</a>
      <h2>Upcoming (?)</h2>
      <p>Heat index calculations for temps above +10</p>
      <p>Take into account the relative humidity (when sub-zero) ?</p>
      <h2>Software</h2>
      <p>React+Vite \ HTML5 \ CSS3 \ Unicode \ Material UI</p>
      <a href='https://github.com/RedFoxFinn/ApparentTemperatures'>Source code</a>
    </article>
  )
}

export default About
