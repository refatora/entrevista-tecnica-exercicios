import { describe, expect, it } from 'vitest'
import { IntersectionLinkedList } from './03-linked-list-intersecao'

type NamedObj = { name: string }
const a = { name: 'a' }
const b = { name: 'b' }
const c = { name: 'c' }
const d = { name: 'd' }
const e = { name: 'e' }

describe('exercicio-03: Encontre a interseção em uma lista encadead', () => {
  it.each([
    { left: [a, b, c], right: [d, e], intersection: [] },
    { left: [a, b, c], right: [d, a, e], intersection: [a] },
    { left: [a, b], right: [c, d, e], intersection: [] },
    { left: [a, b], right: [c, a, e], intersection: [a] },
    { left: [a, b], right: [a, e], intersection: [a] },
    { left: [a, b], right: [a, b], intersection: [a, b] },
  ])('Interseção: %j', ({ left, right, intersection }) => {
    const equals = (a: NamedObj, b: NamedObj) => a.name === b.name
    const leftList = new IntersectionLinkedList<NamedObj>(left)
    const rightList = new IntersectionLinkedList<NamedObj>(right)
    expect(leftList.intersection(rightList, equals)).toEqual(intersection)
  })
})
