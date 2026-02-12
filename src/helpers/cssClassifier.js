
const between = (x, min, max) => x >= min && x <= max;

export const classifyChill = (chill) => {
  switch (true) {
    case between(chill, -120, -60):
      return 'extreme';
    case between(chill, -60, -45):
      return 'dangerous';
    case between(chill, -45, -30):
      return 'severe';
    case between(chill, -30, -15):
      return 'moderate';
    case between(chill, -15, 0):
      return 'mild';
    default:
      return 'none';
  }
}

export const classifyWind = (wind) => {
  switch (true) {
    case between(wind, 5, 10):
      return 'breeze';
    case between(wind, 10, 20):
      return 'windy';
    case between(wind, 20, 30):
      return 'storm';
    default:
      return 'calm';
  }
}
