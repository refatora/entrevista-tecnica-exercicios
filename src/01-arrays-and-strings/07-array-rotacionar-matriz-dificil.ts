/**
 * --- Enunciado do exercício ---
 *
 * Dada uma matriz `N x N` que representa uma imagem, onde cada pixel tem 4 bytes,
 * escreva uma função para rotacionar a imagem em 90 graus.
 *
 * Você consegue fazer isso no local (in-place), ou seja, sem utilizar uma matriz auxiliar?
 */
/**
 * Solução: Abordagem de Rotação em Camadas (In-place)
 *
 * A abordagem para rotacionar a matriz no local (in-place) envolve a iteração através
 * das 'camadas' da matriz, da mais externa para a mais interna. Para cada camada,
 * realizamos uma rotação dos elementos em um ciclo de quatro posições.
 *
 * O processo para cada camada é o seguinte:
 * 1. Salvamos o valor do elemento superior (`top`) em uma variável temporária.
 * 2. Movemos o valor do elemento esquerdo (`left`) para a posição do `top`.
 * 3. Movemos o valor do elemento inferior (`bottom`) para a posição do `left`.
 * 4. Movemos o valor do elemento direito (`right`) para a posição do `bottom`.
 * 5. Finalmente, atribuímos o valor salvo na variável temporária (o `top` original)
 *    à posição do `right`.
 *
 * Este processo é repetido para todos os elementos de uma camada e, em seguida, para
 * todas as camadas, resultando em uma rotação completa de 90 graus da matriz sem a
 * necessidade de memória extra.
 */
export function rotateMatrixInPlaceHard(m: Array<Array<number>>): Array<Array<number>> {
  const n = m.length
  const layers = Math.floor(n / 2)

  for (let l = 0; l < layers; l++) {
    for (let i = l; i < n - 1 - l; i++) {
      const temp = m[l][i]
      m[l][i] = m[n - 1 - i][l]
      m[n - 1 - i][l] = m[n - 1 - l][n - 1 - i]
      m[n - 1 - l][n - 1 - i] = m[i][n - 1 - l]
      m[i][n - 1 - l] = temp
    }
  }
  return m
}
