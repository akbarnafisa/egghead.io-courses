interface Opponent {
  alias: string
  health: number
}

class ComicBookCharacters {
  constructor(
    public alias: string,
    public health: number,
    public strength: number,
    private secretIdentity: string
  ) {}

  getSecretidentity() {
    return this.secretIdentity
  }

  attackFunc(opponent: Opponent, attackWith: number) {
    opponent.health -= attackWith
    console.log(
      `${this.alias} attacked ${opponent.alias}, who's health = ${opponent.health}`
    )
    return opponent.health
  }

  static createTeam(teamName: string, members: ComicBookCharacters[]) {
    return {
      name: teamName,
      members: members
    }
  }
}

let storm = new ComicBookCharacters('Storm', 100, 100, 'GG')
let blob = new ComicBookCharacters('Booba', 1000, 5000, 'Amogus')

storm.attackFunc(blob, storm.strength)


let team  = ComicBookCharacters.createTeam('gg', [blob])