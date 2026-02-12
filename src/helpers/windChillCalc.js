
export const windChill = (temperature, wind_speed, variant) => {
    if (temperature > 10) {
      return "Wind chill is not applicable for temperatures above 10°C.";
    }
    let wind_chill_value;
    if (wind_speed < 2) {
      wind_chill_value = temperature + ((-1.59 + 0.1312 * temperature)/5.0) * wind_speed;
      return wind_chill_value.toFixed(2);
    } else {
      switch (variant) {
        case 'UKMET':
          wind_chill_value = 13.12 + (0.6215 * temperature) - (11.37 * Math.pow(wind_speed, 0.16)) + (0.3965 * temperature * Math.pow(wind_speed, 0.16));
          return wind_chill_value.toFixed(2);
        case 'FMI':
          wind_chill_value = 13.12 + (0.6215 * temperature) - (13.956 * Math.pow(wind_speed, 0.16)) + (0.4867 * temperature * Math.pow(wind_speed, 0.16));
          return wind_chill_value.toFixed(2);
        default:
          return 0.00;
      }
    }
}
