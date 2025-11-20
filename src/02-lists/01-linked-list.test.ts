import { describe, expect, it } from 'vitest'
import { LinkedList } from './01-linked-list'

describe('exercicio-01: Implemente uma lista encadeada', () => {
  it.each([[[]], [[1]], [[1, 1]], [[1, 2]], [[2, 2]], [[1, 2, 3]], [[1, 2, 2, 3]]])(
    'inicializar com array: [%s]',
    (init) => {
      const list = new LinkedList(init)
      expect(list.toArray()).toStrictEqual(init)
    },
  )

  it.each([[[]], [[1]], [[1, 1]], [[1, 2]], [[2, 2]], [[1, 2, 3]], [[1, 2, 2, 3]]])(
    'add: [%s]',
    (init) => {
      const list = new LinkedList()
      init.forEach((v) => list.add(v))
      expect(list.toArray()).toStrictEqual(init)
    },
  )

  it.each([
    { init: [], index: 0, expected: [] },
    { init: [0], index: 0, expected: [] },
    { init: [0, 1, 2], index: 0, expected: [1, 2] },
    { init: [0, 1, 2], index: 1, expected: [0, 2] },
    { init: [0, 1, 2], index: 2, expected: [0, 1] },
    { init: [0, 1, 2], index: 100, expected: [0, 1, 2] },
    { init: [0, 1, 2], index: -100, expected: [0, 1, 2] },
  ])('del: %j %s %j', ({ init, index, expected }) => {
    const list = new LinkedList<number>(init)
    list.del(index)
    expect(list.toArray()).toStrictEqual(expected)
  })
})
