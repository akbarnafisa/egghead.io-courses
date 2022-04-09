function generatedId(seed: number) {
  return seed + '5'
}

type Id = ReturnType<typeof generatedId>

lookupEntity(generatedId(10))

function lookupEntity(id: Id) {

}

/** ============ */

type UnpackPromise<T> = T extends Promise<infer R>[] ? R : any
const arr = [Promise.resolve(true)]

type ExpectedBooleann = UnpackPromise<typeof arr>