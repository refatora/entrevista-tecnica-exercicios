/**
 * --- Enunciado do exercicio ---
 *
 * Escreva um código para remover os elementos duplicados de uma lista encadeada
 * não ordenada.
 */
import { Stack } from './stack'
import type { Node } from './stack'

export class LinkedListRemoveDuplicates<T> extends Stack<T> {
  /**
   * --- Abordagem com a estrutura de dados Set ---
   *
   * Para remover os elementos duplicados, percorremos a lista encadeada do início ao fim,
   * utilizando um `Set` para rastrear os valores que já encontramos. O `Set` oferece
   * uma verificação de existência (`has`) com complexidade de tempo média de O(1).
   *
   * A lógica é a seguinte:
   * 1. Inicializamos um `Set` chamado `visited` para armazenar os valores únicos.
   * 2. Utilizamos dois ponteiros: `node` para o nó atual e `previous` para o nó anterior.
   * 3. Iteramos pela lista com o ponteiro `node`.
   * 4. Em cada nó, verificamos se seu valor já está no `Set` `visited`.
   *    - Se estiver, significa que é uma duplicata. Removemos o nó atual
   *      fazendo com que o `next` do nó `previous` aponte para o `next` do nó `node`.
   *    - Se não estiver, o valor é único até o momento. Adicionamos o valor ao `Set`
   *      e atualizamos o ponteiro `previous` para o nó `node` atual.
   * 5. Avançamos o ponteiro `node` para o próximo nó e continuamos o processo até o final da lista.
   *
   * A complexidade de tempo desta abordagem é O(N), onde N é o número de elementos na lista,
   * pois percorremos a lista uma única vez. A complexidade de espaço é O(N) no pior caso,
   * que ocorre quando todos os elementos da lista são únicos e precisam ser armazenados no `Set`.
   */
  removeDuplicates() {
    const visited = new Set<T>()
    let node = this.head
    let previous: Node<T> | null = null
    while (node !== null) {
      if (visited.has(node.value)) {
        // O valor já foi visto, então `node` é uma duplicata e deve ser removido.
        // `previous` não pode ser `null` aqui, pois o primeiro nó nunca é uma duplicata.
        previous!.next = node.next
      } else {
        // É a primeira vez que vemos este valor. Adiciona ao set e atualiza `previous`.
        visited.add(node.value)
        previous = node
      }
      // Avança para o próximo nó.
      node = node.next
    }
  }
}