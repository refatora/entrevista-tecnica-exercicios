/**
 * --- Enunciado do exercicio ---
 *
 * Escreva um algoritmo que, dada uma matriz M x N, se um elemento for 0,
 * toda a sua linha e coluna sejam definidas como 0.
 */

/**
 * Abordagem com Sets para armazenar linhas e colunas:
 *
 * Esta função primeiro percorre toda a matriz para identificar as linhas e colunas
 * que contêm pelo menos um zero. As linhas e colunas a serem zeradas são
 * armazenadas em dois `Set`s, `rowsToZero` e `colsToZero`, para evitar duplicatas
 * e garantir uma verificação rápida.
 *
 * Esta abordagem garante que a matriz original seja modificada apenas depois que
 * todas as posições de zero forem encontradas, evitando que um zero recém-adicionado
 * afete o resultado final. A complexidade de tempo é O(M * N) devido à necessidade
 * de percorrer a matriz, e a complexidade de espaço é O(M + N) para armazenar
 * as linhas e colunas a serem zeradas.
 */
export function zeroMatrix(matrix: Array<Array<number>>): Array<Array<number>> {
  if (!matrix || matrix.length === 0) {
    return matrix
  }

  const rowLength = matrix.length
  const colLength = matrix[0].length
  const rowsToZero: Set<number> = new Set()
  const colsToZero: Set<number> = new Set()
  for (let row = 0; row < rowLength; row++) {
    for (let col = 0; col < colLength; col++) {
      if (matrix[row][col] === 0) {
        rowsToZero.add(row)
        colsToZero.add(col)
      }
    }
  }

  if (rowsToZero.size === 0) {
    return matrix
  }

  for (const row of rowsToZero) {
    matrix[row].fill(0)
  }

  for (let row = 0; row < rowLength; row++) {
    for (const col of colsToZero) {
      matrix[row][col] = 0
    }
  }

  return matrix
}