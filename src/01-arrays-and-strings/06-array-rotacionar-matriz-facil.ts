/**
 * --- Enunciado do exercicio ---
 *
 * Dada uma matriz (imagem) NxN, escreva uma função para rotacioná-la em 90 graus.
 * Você consegue fazer isso in-place (sem alocar memória extra para outra matriz)?
 */

/**
 * Abordagem criando uma nova matriz (clonando):
 *
 * Esta função rotaciona a matriz em 90 graus no sentido horário, criando uma nova matriz para armazenar o resultado.
 *
 * 1. Primeiro, uma nova matriz `result` é criada como uma cópia da matriz original para manter as dimensões.
 * 2. A função itera sobre cada elemento da matriz original usando dois loops (um para linhas `i` e outro para colunas `j`).
 * 3. Para cada elemento `matrix[i][j]`, a nova posição na matriz rotacionada é calculada.
 *    - A nova linha será `j`.
 *    - A nova coluna será `length - 1 - i`.
 * 4. O elemento é atribuído à sua nova posição na matriz `result`.
 * 5. Ao final, a nova matriz rotacionada é retornada.
 *
 * Esta abordagem é mais simples de entender, mas utiliza memória extra (O(N^2)) para a nova matriz.
 */
export function rotateMatrixCloning(matrix: Array<Array<number>>): Array<Array<number>> {
  const length = matrix.length
  const result: Array<Array<number>> = matrix.map((m) => m.map((n) => n))

  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length; j++) {
      result[j][length - 1 - i] = matrix[i][j]
    }
  }
  return result
}

/**
 * Abordagem in-place (modificando a matriz original):
 *
 * Esta função rotaciona a matriz em 90 graus no sentido horário sem criar uma nova matriz,
 * modificando a original diretamente para economizar memória (O(1) de espaço extra).
 *
 * O processo é feito em duas etapas:
 *
 * 1. Transposição da Matriz:
 *    - A matriz é transposta ao longo de sua diagonal principal.
 *    - Isso é feito trocando o elemento `matrix[i][j]` com `matrix[j][i]`.
 *    - O loop interno começa com `j = i` para evitar trocar os elementos duas vezes.
 *
 * 2. Inversão de cada Linha:
 *    - Após a transposição, cada linha da matriz é invertida.
 *    - Por exemplo, a primeira linha se torna a última coluna, a segunda linha se torna a penúltima coluna, e assim por diante.
 *
 * A combinação dessas duas operações resulta em uma rotação de 90 graus no sentido horário.
 */
export function rotateMatrixInPlace(matrix: Array<Array<number>>): Array<Array<number>> {
  const length = matrix.length

  for (let i = 0; i < length; i++) {
    for (let j = i; j < length; j++) {
      const temp = matrix[i][j]
      matrix[i][j] = matrix[j][i]
      matrix[j][i] = temp
    }
  }

  for (let i = 0; i < length; i++) {
    matrix[i].reverse()
  }

  return matrix
}
