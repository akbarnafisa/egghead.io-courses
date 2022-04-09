class Library {
  titles: string[]

  constructor() {
    this.titles = ['123']
  }
}

const library = new Library()

const shortTitles = library.titles.filter(
  title => title.length < 5
)