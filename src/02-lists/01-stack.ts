/**
 * --- Enunciado do exercicio ---
 *
 * Implemente uma estrutura de dados 'pilha' (stack) utilizando
 * uma lista encadeada.
 */

/**
 * Representa um nó na pilha.
 * @template T O tipo de valor armazenado no nó.
 */
export class Node<T> {
  /**
   * @param value O valor a ser armazenado no nó.
   * @param next O próximo nó na pilha.
   */
  constructor(
    public value: T,
    public next: Node<T> | null = null,
  ) {}
}

/**
 * Implementação de uma pilha (Stack).
 * A pilha segue o princípio LIFO (Last-In, First-Out), onde o último elemento a ser adicionado é o primeiro a ser removido.
 * @template T O tipo de valor armazenado na pilha.
 */
export class Stack<T> {
  protected head: Node<T> | null = null

  /**
   * Cria uma nova instância de Pilha.
   * @param values Um array opcional de valores para inicializar a pilha.
   */
  constructor(values: ReadonlyArray<T> = []) {
    values.forEach((value) => this.push(value))
  }

  /**
   * Adiciona um elemento ao topo da pilha.
   * @param value O valor a ser adicionado.
   */
  push(value: T) {
    if (this.head === null) {
      this.head = new Node(value)
    } else {
      this.head = new Node(value, this.head)
    }
  }

  /**
   * Remove e retorna o elemento do topo da pilha.
   * @returns O valor do elemento removido, ou `undefined` se a pilha estiver vazia.
   */
  pop(): T | undefined {
    if (this.head === null) {
      return undefined
    }
    const value = this.head.value
    this.head = this.head.next
    return value
  }

  /**
   * Converte a pilha para um array.
   * Os elementos no array estarão na ordem do topo para a base da pilha.
   * @returns Um array contendo os elementos da pilha.
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
