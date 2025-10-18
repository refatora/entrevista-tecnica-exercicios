/**
 * --- Enunciado do exercicio ---
 *
 * Dadas duas strings, determine se uma é uma permutação da outra.
 */

/**
 * Abordagem com Ordenação (Sort):
 *
 * Esta função verifica se duas strings são permutações uma da outra, assumindo que
 * a comparação é case-sensitive e que espaços em branco são significativos.
 *
 * A lógica é a seguinte:
 * 1. Se as strings tiverem comprimentos diferentes, elas não podem ser permutações, então retorna `false`.
 * 2. As strings são convertidas em arrays de caracteres.
 * 3. Os arrays são ordenados em ordem alfabética.
 * 4. Os arrays ordenados são convertidos de volta para strings.
 * 5. Se as strings resultantes forem idênticas, significa que as strings originais eram permutações.
 *
 */
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

/**
 * Abordagem com Mapa de Frequência (HashMap):
 *
 * Esta função utiliza um mapa para contar a frequência de cada caractere na primeira string.
 * Em seguida, itera sobre a segunda string para verificar se as contagens de caracteres correspondem.
 *
 * A lógica é a seguinte:
 * 1. Se as strings tiverem comprimentos diferentes, não podem ser permutações, então retorna `false`.
 * 2. Um mapa (`frequency`) é criado para armazenar a contagem de cada caractere da primeira string (`a`).
 * 3. A função itera sobre a segunda string (`b`). Para cada caractere:
 *    - A contagem do caractere no mapa é decrementada.
 *    - Se a contagem se tornar negativa, ou se o caractere não existir no mapa,
 *      significa que `b` não é uma permutação de `a`, e a função retorna `false` imediatamente.
 * 4. Se o loop terminar sem retornar `false`, significa que as strings são permutações.
 *
 * Esta abordagem é eficiente em termos de tempo (O(N)), especialmente para strings longas,
 * pois evita o custo da ordenação.
 */
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
    const total = frequency.get(char)
    // Se o caractere de `b` não existe em `a` ou se a frequência se tornaria negativa,
    // então não é uma permutação.
    if (!total) {
      return false
    }
    frequency.set(char, total - 1)
  }

  return true
}
