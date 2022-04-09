interface StringContainer {
  value: string
  format(): string
  split(): string[]
}

interface NumberContainer {
  value: number
  nearestPrime: number
  round(): number
}

type Item<T> = {
  id: T
  container: T extends string ? StringContainer : NumberContainer
}

let item: Item<string> = {
  id: '123',
  container: {
    value: '123',
    format: () => '123',
    split: () => ['1'],
  },
}

/** ================================ */

let itemNumber: Item<number> = {
  id: 123,
  container: {
    value: 123,
    nearestPrime: 125,
    round: () => 123,
  },
}

type ArrayFilter<T> = T extends any[] ? T : never
type StringsOrNumbers = ArrayFilter<string | number | string[] | number[]>

/** ================================ */

interface Book {
  id: string
  tableOfContents: string[]
}

interface Tv {
  id: number
  diagonal: number
}

interface IItemService {
  getItem<T extends Book | number>(id: T): T extends Book ? Book : Tv
}

let itemService: IItemService

const book =  itemService.getItem({
  id: '123',
  tableOfContents: ['123']
})
const tv = itemService.getItem(10)