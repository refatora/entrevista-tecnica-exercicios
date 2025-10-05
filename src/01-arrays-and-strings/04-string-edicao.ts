export function hasEdits(a: string, b: string): 0 | 1 | -1 {
  if (a === b) {
    return 0
  }
  let replaced: Array<string> = []
  let added: Array<string> = []
  let removed: Array<string> = []

  for (let i = 0; i < Math.max(a.length, b.length); i++) {
    if (a[i] === b[i]) {
      replaced[i] = a[i]
      added[i] = a[i]
      removed[i] = a[i]
    } else {
      replaced[i] = b[i]
      added[i] = b[i]
      removed[i] = a[i] ?? '' + b[i]
    }
  }
  const possibleEdits = [replaced.join(''), added.join(''), removed.join('')]

  console.log({ a, b, replaced, added, removed })
  return possibleEdits.find((edit) => edit === b) !== undefined ? 1 : -1
}
