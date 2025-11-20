/**
 * --- Enunciado do exercício ---
 *
 * Implemente uma estrutura de dados de Lista Encadeada (Linked List) em TypeScript.
 * A lista deve suportar operações básicas como adicionar, remover e converter para array.
 * Esta implementação servirá de base para resolver outros exercícios que utilizam listas encadeadas.
 */

/**
 * Representa um nó individual na lista encadeada.
 * Cada nó armazena um valor e uma referência ao próximo nó.
 *
 * @template T O tipo de dado que o nó armazena.
 */
export class Node<T> {
  /**
   * Cria uma instância de um nó.
   *
   * @param value O valor a ser armazenado no nó.
   * @param next Uma referência opcional para o próximo nó na lista. O padrão é `null`.
   */
  constructor(
    public value: T,
    public next: Node<T> | null = null,
  ) {}
}

/**
 * Implementação de uma Lista Encadeada (Singly Linked List).
 * A lista mantém uma referência à sua cabeça (`head`) e permite
 * a manipulação de seus elementos através de operações como adicionar e remover.
 *
 * @template T O tipo de dado que a lista armazena.
 */
export class LinkedList<T> {
  protected head: Node<T> | null = null

  /**
   * Cria uma instância de uma LinkedList.
   *
   * @param values Um array opcional de valores para inicializar a lista.
   *               Os valores serão adicionados na ordem em que aparecem no array.
   */
  constructor(values: ReadonlyArray<T> = []) {
    values.forEach((value) => this.add(value))
  }

  /**
   * Adiciona um novo nó com o valor especificado ao final da lista.
   *
   * Lógica passo a passo:
   * 1. Se a lista estiver vazia (`head` é `null`), o novo nó se torna a cabeça da lista.
   * 2. Se a lista não estiver vazia, percorre-se a lista a partir da cabeça
   *    até encontrar o último nó (aquele cujo `next` é `null`).
   * 3. O ponteiro `next` do último nó é atualizado para apontar para o novo nó.
   *
   * Complexidade de Tempo:
   * - **O(n)**: No pior caso, é necessário percorrer toda a lista para encontrar
   *   o último elemento antes de realizar a inserção.
   *
   * @param value O valor a ser adicionado à lista.
   */
  add(value: T): void {
    if (this.head === null) {
      this.head = new Node(value)
      return
    }
    let curr = this.head
    while (curr.next != null) {
      curr = curr.next
    }
    curr.next = new Node(value)
  }

  /**
   * Abordagem Clássica para Deleção de Nó por Índice.
   *
   * Este método remove um nó da lista encadeada dado um índice específico.
   * A abordagem envolve percorrer a lista para encontrar o nó anterior ao que
   * será removido e, em seguida, ajustar os ponteiros `next` para "pular" o nó a ser deletado.
   *
   * Lógica passo a passo:
   * 1. **Casos de Borda:**
   *    - Se a lista estiver vazia (`head === null`) ou o índice for negativo, não há o que remover, então o método retorna.
   * 2. **Remoção da Cabeça (Índice 0):**
   *    - Se o índice for 0, o nó a ser removido é o `head`. O `head` é então atualizado para apontar para o próximo nó (`this.head.next`).
   * 3. **Remoção de Outros Nós:**
   *    - Para remover um nó em qualquer outro índice `i`, a lista é percorrida até o nó que *precede* o nó no índice `i`.
   *    - Uma variável `current` é usada para iterar. O loop continua enquanto `current.next` não for nulo e `i` for menor que `index - 1`.
   *    - Ao sair do loop, `current` estará no nó anterior ao que deve ser removido (se o índice for válido).
   *    - Se `current.next` não for nulo (o que significa que o nó a ser removido existe), o ponteiro `next` de `current` é atualizado para apontar para o nó *depois* do nó a ser removido (`current.next.next`). Isso efetivamente remove o nó do meio da lista.
   *
   * Complexidade de Tempo:
   * - **O(n)**: No pior caso (remover o último elemento ou um elemento no meio), o método precisa percorrer a lista até o nó anterior ao alvo, o que leva um tempo proporcional ao número de elementos `n` na lista.
   *
   * @param index O índice do nó a ser removido (base 0).
   */
  del(index: number): void {
    if (this.head === null || index < 0) {
      return
    }

    if (index === 0) {
      this.head = this.head.next
      return
    }

    let current = this.head
    let i = 0

    while (current.next !== null && i < index - 1) {
      current = current.next
      i++
    }

    if (current.next !== null) {
      current.next = current.next.next
    }
  }

  /**
   * Converte a lista encadeada em um array.
   *
   * Lógica passo a passo:
   * 1. Cria um array vazio para armazenar os resultados.
   * 2. Percorre a lista a partir da cabeça (`head`), nó por nó.
   * 3. Em cada nó, adiciona o `value` do nó ao array.
   * 4. Continua até o final da lista (`null`).
   *
   * Complexidade de Tempo:
   * - **O(n)**: O método precisa visitar cada um dos `n` nós da lista para extrair seu valor.
   *
   * @returns Um array contendo todos os valores da lista na ordem original.
   */
  toArray(): Array<T> {
    let node = this.head
    const result: Array<T> = []
    while (node !== null) {
      result.push(node.value)
      node = node.next
    }
    return result
  }
}
