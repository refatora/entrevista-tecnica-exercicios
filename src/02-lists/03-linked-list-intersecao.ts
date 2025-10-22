import { LinkedList } from './01-linked-list'

/**
 * --- Enunciado do exercicio ---
 *
 * Dadas duas listas ligadas, retorne o valor do nó de interseção. Note que a
 * interseção é definida pelo valor, não pela referência do objeto. Se dois nós
 * em listas diferentes tiverem o mesmo valor, eles são considerados uma
 * interseção.
 */
export class LinkedListIntersection<T> extends LinkedList<T> {
  /**
   * Abordagem de Força Bruta (Baixo Consumo de Memória)
   *
   * Esta função encontra a interseção de duas listas ligadas comparando cada
   * elemento da primeira lista com cada elemento da segunda. É a abordagem mais
   * simples e com o menor consumo de memória.
   *
   * Lógica:
   * 1. Percorra a primeira lista (externa) com um ponteiro `leftCurrent`.
   * 2. Para cada nó da primeira lista, percorra a segunda lista (interna)
   *    com um ponteiro `rightCurrent`.
   * 3. Se o valor de `leftCurrent` for igual ao valor de `rightCurrent`,
   *    uma interseção foi encontrada e seu valor é retornado.
   * 4. Se os loops terminarem sem encontrar uma correspondência, significa que
   *    não há interseção, e `undefined` é retornado.
   *
   * Complexidade:
   * - Tempo: O(N * M), onde N e M são os comprimentos das listas.
   * - Espaço: O(1), pois não usa estruturas de dados auxiliares.
   *
   * @param rightList A segunda lista para verificar a interseção.
   * @returns O valor do primeiro nó de interseção ou `undefined` se não houver.
   */
  intersects(rightList: LinkedListIntersection<T>): T | undefined {
    let leftCurrent = this.head
    while (leftCurrent !== null) {
      let rightCurrent = rightList.head
      while (rightCurrent !== null) {
        if (leftCurrent.value === rightCurrent.value) {
          return leftCurrent.value
        }
        rightCurrent = rightCurrent.next
      }
      leftCurrent = leftCurrent.next
    }
    return undefined
  }
}
