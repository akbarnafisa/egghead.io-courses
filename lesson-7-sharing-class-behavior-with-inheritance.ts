class ComicBookCharacter {
  constructor(
    public alias: string,
    public health: number,
    public strength: number,
    protected secretIdentity: string
  ) {}

  getSecretId() {
    console.log(this.secretIdentity)
  }
}

class SuperHero extends ComicBookCharacter {
  traits = ['empathy', 'strong moral code']

}
class SuperVillain extends ComicBookCharacter {
  flaws = ['hubris', 'always expalins evil plan']

  constructor(a, b, c, d) {
    super(a, b, c, d)
    console.log('Eat kittenss!!!')
  }
}

let booba = new SuperHero('Booba', 23, 233, 'Boobaas')
let amogus = new SuperVillain('Agus', 123, 1234, 'Rahmat')

booba.getSecretId()