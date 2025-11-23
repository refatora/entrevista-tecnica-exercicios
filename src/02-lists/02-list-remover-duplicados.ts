import { LinkedList, Node } from './01-linked-list'

export class DelDuplicatesLinkedList<T> extends LinkedList<T> {
  delDuplicates(): void {
    if (this.head === null) {
      return
    }
    const visited = new Set<T>([this.head.value])
    const curr: Node<T> | null = this.head
    while (curr.next !== null) {
      if (visited.has(curr.next.value)) {
        curr.next = curr.next.next
        continue
      }
      visited.add(curr.value)
      curr.next = curr.next.next
    }
  }
}
