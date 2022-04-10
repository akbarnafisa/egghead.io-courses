import { type } from './src/ui/radio'
type thing = string | number | string[] | boolean
let returnSomeThing = (someThing: thing) => {
  if (someThing instanceof Array) {
    someThing.join(' ')
  } else {
    console.log('joinedThings', someThing)
  }
}

returnSomeThing(false)

type stuff = string | { name: string }
let gimmeStuff = (stuff: stuff) => {
  typeof stuff === 'string'
  typeof stuff.name === 'string'
}

type coolThings = { name: string } | { id: number }
let gimmeCoolThings = (thing: coolThings) => {
  if (typeof thing.name === 'string') {
    return thing.name
  }

  if (typeof thing.id === 'number') {
    return thing.id
  }
}

type stuffAndThings =
  | {
      cool: string
      meh: string
    }
  | {
      cool: string
      lame: string
    }

let gimmeStuffAndThings = (sat: stuffAndThings) => {
  return sat.cool || sat.lame
}
