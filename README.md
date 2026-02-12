# Wind chill visualizer

## EN

It's a little visualizing tool to quickly check the wind effect on apparent temperature in the range of 10 -- -60 degrees centigrade. Calculations employ FMI (Finnish Meteorological Institute) formula (based on the "new" wind chill index (WCI) formula) on the wind speeds 2 -- 30 m/s and a customized fix for the 1 m/s since otherwise the value would appear to be higher than the actual temperature on the range of 10 -- 0 due to the assumption that the wind speed should be at least 1.8 m/s.

In the code there is alternative calculating with UKMET formula (the actual "new" WCI formula), BUT that is not the default AND it cannot be changed from the UI (yet).

[Wind chill (Wiki)](https://en.wikipedia.org/wiki/Wind_chill)

## FI

Pieni ja yksinkertainen havainnollistamistyökalu, jonka avulla voi helposti ja nopeasti tarkistaa tuulen vaikutuksen lämpötilan tuntuun l. pakkasen purevuuteen välillä 10 -- -60 sivistyneen maailman kansankielisellä asteikolla (Celciuksina). Ohjelma käyttää arvojen laskemisessa ilmatieteenlaitoksen käyttämää kaavaa tuulennopeuksilla 2 -- 30 m/s ja mukautettua korjauskaavaa 1 m/s nopeuksille. Syynä tähän on se, että alkuperäisen kaavan olettama tuulennopeus on vähintään 1.8 m/s ja antaa pienemmillä arvoilla vääriä tuloksia 10 -- 0 asteen lämpötiloissa.

Vaihtoehtoisena laskukaavana koodissa on UKMET:n (Yhdisteneiden kuningaskuntien ilmatieteenlaitos) käyttämä versio, MUTTA se ei ole oletusarvoisesti käytössä EIKÄ sitä voi käyttöliittymästä käsin vaihtaa (vielä).

[Pakkasen purevuus (Wiki)](https://fi.wikipedia.org/wiki/Pakkasen_purevuus)

## Tasklist:
- Heat index for temps above +10
- Take into account the relative humidity ?