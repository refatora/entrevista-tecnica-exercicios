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
    values.forEach((value) => this.push(value))
  }

  push(value: T): void {
    if (this.head === null) {
      this.head = new Node(value)
    } else {
      let last = this.head
      while (last.next != null) {
        last = last.next
      }
      last.next = new Node(value)
    }
  }

  pop(): T | undefined {
    if (this.head === null) {
      return undefined
    }
    if (this.head.next === null) {
      const value = this.head.value
      this.head = null
      return value
    }
    let secondLast: Node<T> | null = null
    let last = this.head
    while (last.next !== null) {
      secondLast = last
      last = last.next
    }
    secondLast!.next = null
    return last.value
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
