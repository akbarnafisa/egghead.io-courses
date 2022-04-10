function pushSomethingIntoCollection<T>(something: T, collection: T[]) {
  collection.push(something)
  console.log(collection)
}

let jeanGrey = { name: 'Jean Grey'}
let wolverine = { name: 'Wolverine'}

let superHeroes = [jeanGrey]
let powers = ['telekinesis', 'esp']

interface SuperHero { name: string }

pushSomethingIntoCollection<SuperHero>('nick', superHeroes)
pushSomethingIntoCollection<string>('booba', powers)
pushSomethingIntoCollection('amogus', powers)
