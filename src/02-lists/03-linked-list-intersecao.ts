import { LinkedList } from './01-linked-list'

export class LinkedListIntersection<T> extends LinkedList<T> {
  contains(target: T): boolean {
    let current = this.head
    while (current !== null) {
      if (current.value === target) {
        return true
      }
      current = current.next
    }
    return false
  }

  intersects(rightList: LinkedListIntersection<T>): T | undefined {
    let current = this.head
    while (current !== null) {
      const { value } = current
      if (rightList.contains(value)) {
        return value
      }
      current = current.next
    }
    return undefined
  }
}
