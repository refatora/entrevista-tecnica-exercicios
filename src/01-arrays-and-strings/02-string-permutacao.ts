export function isPermutationWithSort(a: string, b: string): boolean {
  // Se as strings têm comprimentos diferentes, não podem ser permutações.
  if (a.length !== b.length) {
    return false
  }

  // Converte as strings para arrays, ordena e compara o resultado.
  const aSorted = Array.from(a).sort().join('')
  const bSorted = Array.from(b).sort().join('')

  return aSorted === bSorted
}

export function isPermutationWithMap(a: string, b: string): boolean {
  if (a.length !== b.length) {
    return false
  }

  const frequency = new Map<string, number>()
  for (const c of a) {
    const total = frequency.get(c) ?? 0
    frequency.set(c, total + 1)
  }

  for (const c of b) {
    const total = frequency.get(c) ?? 0
    frequency.set(c, total - 1)
  }

  return Array.from(frequency.values()).every((v) => v === 0)
}
