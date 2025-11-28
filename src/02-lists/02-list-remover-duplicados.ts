import { LinkedList, Node } from './01-linked-list'

export class DelDuplicatesLinkedList<T> extends LinkedList<T> {
  delDuplicates(): void {
    if (this.head === null) {
      return
    }
    const visited = new Set<T>()
    let pre: Node<T> | null = null
    let cur: Node<T> | null = this.head
    while (cur !== null) {
      if (visited.has(cur.value)) {
        pre!.next = cur.next
        cur = cur.next
        continue
      }
      visited.add(cur.value)
      pre = cur
      cur.next = cur.next
    }
  }
}
