import { LinkedList } from './01-linked-list'

export class IntersectionLinkedList<T> extends LinkedList<T> {
  public intersection(target: LinkedList<T>, equals: (a: T, b: T) => boolean): ReadonlyArray<T> {
    const result: Array<T> = []
    let tar = target.peak()
    while (tar !== null) {
      let cur = this.head
      while (cur !== null) {
        if (equals(tar.value, cur.value)) {
          result.push(cur.value)
          break
        }
        cur = cur.next
      }
      tar = tar?.next
    }
    return result
  }
}
