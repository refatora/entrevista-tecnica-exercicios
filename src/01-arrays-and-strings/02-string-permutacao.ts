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
  for (const char of a) {
    const total = frequency.get(char) ?? 0
    frequency.set(char, total + 1)
  }

  for (const char of b) {
    const total = frequency.get(char) ?? 0
    /**
     * Podemos otimizar e retornar cedo caso o char atual não 
     * existe no frequency map.
     * Mas vou deixar sem otimizar por simplicidade.
     */ 
    frequency.set(char, total - 1)
  }

  return Array.from(frequency.values()).every((v) => v === 0)
}
