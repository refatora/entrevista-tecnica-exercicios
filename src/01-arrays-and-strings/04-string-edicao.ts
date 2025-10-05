function hasOneEdit(a: string, b: string): boolean {
  if (a.length !== b.length) {
    return false
  }
  const counts = new Array(a.length)
    .fill(1)
    .filter((_, i) => a[i] !== b[i])
    .reduce((prev, curr) => prev + curr)
  return counts === 1
}

function hasOneRemoved(a: string, b: string): boolean {
  const target = Array.from(a)
  let i = 0
  do {
    if (target[i] !== b[i]) {
      target.splice(i, 1)
    }
    i += 1
  } while (i < a.length)
  return b === target.join('')
}

export function hasEdits(a: string, b: string): 0 | 1 | -1 {
  if (a === b) {
    return 0
  }
  if (a.length === b.length) {
    return hasOneEdit(a, b) ? 1 : -1
  }
  if (a.length === b.length + 1) {
    return hasOneRemoved(a, b) ? 1 : -1
  }
  if (a.length === b.length - 1) {
    return hasOneRemoved(b, a) ? 1 : -1
  }
  return -1
}
