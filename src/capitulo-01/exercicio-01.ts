/**
 * Abordagem com a estrutura de dados Set (HashSet):
 *
 * Esta função itera sobre a string, armazenando cada caractere já visto em um `Set`.
 * A cada iteração, ela verifica se o caractere atual já existe no `Set`.
 * - Se existir, significa que um caractere duplicado foi encontrado, e a função retorna `true`.
 * - Caso contrário, o caractere é adicionado ao `Set` e a iteração continua.
 * Se o loop terminar sem encontrar duplicatas, a função retorna `false`.
 */
export function hasDuplicateCharsWithSet(inputString: string): boolean {
  const previousChars = new Set<string>()
  for (const s of inputString) {
    const hasPreviousChar = previousChars.has(s)
    if (hasPreviousChar) {
      return true
    }
    previousChars.add(s)
  }
  return false
}

/**
 * Abordagem com Array de Booleans (Tabela de Caracteres):
 *
 * Esta função utiliza um array de booleanos como uma tabela para rastrear os caracteres já vistos.
 * O código do caractere (obtido com `charCodeAt(0)`) é usado como índice no array.
 * - Se o valor no índice correspondente ao caractere atual for `true`, significa que o caractere já foi visto,
 *   e a função retorna `true`.
 * - Caso contrário, o valor nesse índice é definido como `true`.
 * Se o loop terminar, significa que não há duplicatas, e a função retorna `false`.
 *
 * Nota: Esta abordagem é eficiente, mas assume um conjunto de caracteres limitado (ex: UTF-16).
 */
export function hasDuplicateCharsWithArray(inputString: string): boolean {
  const previousChars: Array<boolean> = []
  for (const s of inputString) {
    const charCode = s.charCodeAt(0) // Veja: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charCodeAt
    const hasPreviousChar = previousChars[charCode]
    if (hasPreviousChar) {
      return true
    }
    previousChars[charCode] = true
  }
  return false
}
