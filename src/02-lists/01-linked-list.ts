/**
 * Representa um nó na lista.
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

export class LinkedList<T> {
  protected head: Node<T> | null = null

  constructor(values: ReadonlyArray<T> = []) {
    values.forEach((value) => this.add(value))
  }

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

  del(index: number): void {
    if (this.head === null) {
      return
    }
    if (index === 0) {
      this.head = this.head.next
      return
    }
    let curr = this.head
    let prev: Node<T> | null = null
    let i = 0
    while (curr.next !== null && i < index) {
      prev = curr
      curr = curr.next
      i++
    }
    if (prev !== null) {
      prev.next = curr.next
    }
  }

  /**
   * Converte a lista para um array.
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
