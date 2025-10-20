import { describe, expect, it } from 'vitest'
import { template } from './00-x-template'
import { LinkedList } from './01-linked-list'
import { LinkedListIntersection } from './03-linked-list-intersecao'

type NamedObj = { name: string }
const a = { name: 'a' }
const b = { name: 'b' }
const c = { name: 'c' }
const d = { name: 'd' }
const e = { name: 'e' }

describe('exercicio-03: Interseção em um linked list', () => {
  it.each([
    [[a, b, c], [d, e], undefined],
    [[a, b, c], [d, a, e], a],
    [[a, b], [c, d, e], undefined],
    [[a, b], [c, a, e], a],
    [[a, b], [a, e], a],
  ])('Interseção: [%s]', (left, right, intersection) => {
    const leftList = new LinkedListIntersection<NamedObj>(left)
    const rightList = new LinkedListIntersection<NamedObj>(right)
    expect(leftList.intersects(rightList)).toEqual(intersection)
  })
})
