/**
 * --- Enunciado do exercicio ---
 *
 * Existem três tipos de edições que podem ser realizadas em strings:
 *  - Inserir um caractere
 *  - Remover um caractere
 *  - Substituir um caractere
 *
 * Dado duas strings, escreva uma função para verificar se elas estão a uma edição (ou zero edições) de distância.
 */

/**
 * Verifica se duas strings de mesmo comprimento estão a uma substituição de distância.
 *
 * Compara as strings caractere por caractere e conta as diferenças. Se o número
 * de diferenças for exatamente 1, significa que uma única substituição
 * pode tornar as strings iguais.
 *
 * @param a A primeira string.
 * @param b A segunda string.
 * @returns `true` se houver exatamente uma substituição, `false` caso contrário.
 */
function isOneReplacementAway(a: string, b: string): boolean {
  let diffCount = 0
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) {
      diffCount++
    }
    if (diffCount > 1) {
      return false
    }
  }
  return diffCount === 1
}

/**
 * Verifica se uma string pode ser obtida da outra por uma única remoção.
 *
 * Utiliza a abordagem de dois ponteiros para percorrer ambas as strings simultaneamente.
 * Se uma diferença é encontrada, o ponteiro da string mais longa é avançado,
 * simulando uma remoção. Se mais de uma
 * diferença for encontrada, as strings não estão a uma edição de distância.
 *
 * @param longer A string mais longa.
 * @param shorter A string mais curta.
 * @returns `true` se uma única remoção for suficiente, `false` caso contrário.
 */
function isOneInsertRemovalAway(longer: string, shorter: string): boolean {
  if (longer.length - shorter.length > 1) {
    return false
  }

  let diffs = 0

  for (let l = 0; l < longer.length; l++) {
    if (longer[l] !== shorter[l - diffs]) {
      diffs++
      if (diffs > 1) {
        return false
      }
    }
  }

  return diffs === 1
}

/**
 * Verifica se duas strings estão a no máximo uma edição de distância.
 *
 * Esta função é o ponto de entrada principal. Ela primeiro verifica a diferença
 * de comprimento entre as strings para descartar casos com mais de uma edição.
 * Em seguida, delega a verificação para a função auxiliar apropriada com base
 * no comprimento relativo das strings.
 *
 * @param a A primeira string.
 * @param b A segunda string.
 * @returns 0 se as strings são idênticas, 1 se estão a uma edição de distância, e -1 caso contrário.
 */
export function hasEdits(a: string, b: string): 0 | 1 | -1 {
  if (a === b) {
    return 0
  }

  const lenDiff = Math.abs(a.length - b.length)
  if (lenDiff > 1) {
    return -1
  }

  if (a.length === b.length) {
    return isOneReplacementAway(a, b) ? 1 : -1
  }

  if (a.length > b.length) {
    return isOneInsertRemovalAway(a, b) ? 1 : -1
  } else {
    return isOneInsertRemovalAway(b, a) ? 1 : -1
  }
}
