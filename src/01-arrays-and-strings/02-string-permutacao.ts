export function isPermutation(a: string, b: string): boolean {
  const aSorted = Array.from(a).sort((left,right) => left.localeCompare(right)).toString()
  const bSorted = Array.from(b).sort((left,right) => left.localeCompare(right)).toString()
  return aSorted === bSorted
}
