import { List } from './linked-list'

/**
 * --- Enunciado do exercicio ---
 *
 * Escreva um algoritmo para remover os elementos duplicados de uma lista encadeada.
 */
export class LinkedListRemoveDuplicates<T> extends List<T> {
  /**
   * Abordagem com Buffer (HashSet):
   *
   * Este método itera pela lista encadeada, utilizando um `Set` para rastrear os
   * valores que já foram encontrados (`visited`).
   *
   * Para cada nó:
   * 1. Verifica se o valor do nó atual já existe no `Set`.
   * 2. Se existir, o nó é uma duplicata e é removido da lista, ajustando os
   *    ponteiros `next` e `prev` dos nós adjacentes.
   * 3. Se não existir, o valor é adicionado ao `Set` como "visitado".
   *
   * A iteração continua até que todos os nós tenham sido processados.
   * Esta abordagem tem uma complexidade de tempo de O(N), onde N é o número de
   * elementos na lista, pois cada nó é visitado uma única vez.
   */
  removeDuplicates() {
    const visited = new Set<T>()
    let node = this.head
    while (node !== null) {
      const nextNode = node.next
      if (visited.has(node.value)) {
        if (node === this.tail) {
          this.tail === node.prev
        }
        if (node.prev !== null) {
          node.prev.next = node.next
        }
        if (node.next !== null) {
          node.next.prev = node.prev
        }
      } else {
        visited.add(node.value)
      }
      node = nextNode
    }
  }
}

