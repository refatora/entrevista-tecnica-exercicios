import { describe, expect, it } from 'vitest'
import { LinkedList } from './01-linked-list'

describe('exercicio-01: Implemente uma lista encadeada', () => {
  it.each([
    { init: [] },
    { init: [1] },
    { init: [1, 1] },
    { init: [1, 2] },
    { init: [2, 2] },
    { init: [1, 2, 3] },
    { init: [1, 2, 2, 3] },
  ])('inicializar com array: %j', ({ init }) => {
    const list = new LinkedList(init)
    expect(list.toArray()).toStrictEqual(init)
  })

  it.each([
    { init: [] },
    { init: [1] },
    { init: [1, 1] },
    { init: [1, 2] },
    { init: [2, 2] },
    { init: [1, 2, 3] },
    { init: [1, 2, 2, 3] },
  ])('add: %j', ({ init }) => {
    const list = new LinkedList()
    init.forEach((i) => list.add(i))
    expect(list.toArray()).toStrictEqual(init)
  })

  it.each([
    { init: [], index: 0, expected: undefined },
    { init: [0], index: 0, expected: 0 },
    { init: [0, 1, 2], index: 0, expected: 0 },
    { init: [0, 1, 2], index: 1, expected: 1 },
    { init: [0, 1, 2], index: 2, expected: 2 },
    { init: [10, 11, 12], index: 1, expected: 11 },
    { init: [0, 1, 2], index: 100, expected: undefined },
    { init: [0, 1, 2], index: -100, expected: undefined },
  ])('get: %j', ({ init, index, expected }) => {
    const list = new LinkedList<number>(init)
    expect(list.get(index)).toStrictEqual(expected)
  })

  it.each([
    { init: [], index: 0, expected: [] },
    { init: [0], index: 0, expected: [] },
    { init: [0, 1, 2], index: 0, expected: [1, 2] },
    { init: [0, 1, 2], index: 1, expected: [0, 2] },
    { init: [0, 1, 2], index: 2, expected: [0, 1] },
    { init: [0, 1, 2], index: 100, expected: [0, 1, 2] },
    { init: [0, 1, 2], index: -100, expected: [0, 1, 2] },
  ])('del: %j', ({ init, index, expected }) => {
    const list = new LinkedList<number>(init)
    list.del(index)
    expect(list.toArray()).toStrictEqual(expected)
  })
})
