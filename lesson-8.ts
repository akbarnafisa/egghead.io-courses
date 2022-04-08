interface SuperHero {
  powers: string[]
  savesTheDay: () => void
}

interface BadGuy {
  badDeeds: string[]
  getRandomBadDeed: () => string
  commitBadDeed: () => void
}

let dazzler: SuperHero = {
  powers: ['transduces sonic vibrations into light'],
  savesTheDay() {console.log(`Dazzler ${this.powers[0]} to save the day!!!`);
  }
}

let badGuy: BadGuy = {
  badDeeds: ['sleep on couch', 'fart'],
  getRandomBadDeed () {
    return this.badDeeds[0]
  },
  commitBadDeed () {
    console.log(`BadGuy ${this.getRandomBadDeed}`);
  }
}

function saveDayOrBadDeed(something: SuperHero | BadGuy) {
  if ((something as SuperHero).powers) {
    (something as SuperHero).savesTheDay()
  } else {
    (something as BadGuy).commitBadDeed()
  }
}

saveDayOrBadDeed(dazzler)
saveDayOrBadDeed(badGuy)