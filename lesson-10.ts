interface Crocodile {
  personality: string
}
interface Taxes {
  year: number
}
interface Container<T> {
  unit: T
}

let crocContainer: Container<Crocodile> = {
  unit: {
    personality: 'gg',
  },
}

let taxContainer: Container<Taxes> = {
  unit: {
    year: 1996,
  },
}




interface RedCroc extends Crocodile {
  color: 'red'
}
interface BlueCroc extends Crocodile {
  color: 'blue'
}
interface CrocContainer<T extends Crocodile> {
  crocUnit: T
}

let redCrocContainnter: CrocContainer<RedCroc> = {
  crocUnit: {
    personality: 'gg',
    color: 'red'
  }
}

let blueCrocContainer: CrocContainer<BlueCroc> = {
  crocUnit: {
    color: 'blue',
    personality: 'cc'
  }
}

class ClassyContainner<T extends Crocodile> {
  classyCrocUnit: T;
}

let classyCrocContainer = new ClassyContainner<RedCroc>()
classyCrocContainer.classyCrocUnit = {
  personality: 'classy',
  color: 'red'
}