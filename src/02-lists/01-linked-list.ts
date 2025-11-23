export class Node<T> {
  public next: Node<T> | null = null

  constructor(public value: T) {}
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

  get(index: number): T | undefined {
    if (index < 0) {
      return undefined
    }

    let current: Node<T> | null = this.head
    let i = 0
    while (current !== null && i < index) {
      current = current.next
      i++
    }

    return current?.value
  }

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
