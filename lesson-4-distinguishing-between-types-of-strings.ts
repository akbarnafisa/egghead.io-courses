let unit: string = 'awesome'
let miles: 'MILES' = 'MILES'

type distanceMetric = 'MILES' | 'KILOMETERS' | 'METERS'
function move(distance: number, value: distanceMetric) {
  console.log(`You moved ${distance} ${value}`);
}

move(3, 'KILOMETERS')