import { describe, expect, it } from 'vitest'
import { LinkedList } from './01-linked-list'

describe('exercicio-02: Implemente uma lista encadeada', () => {
  it.each([[[]], [[1]], [[1, 1]], [[1, 2]], [[2, 2]], [[1, 2, 3]], [[1, 2, 2, 3]]])(
    'inicializar com array: [%s]',
    (init) => {
      const list = new LinkedList(init)
      expect(list.toArray()).toStrictEqual(init)
    },
  )

  it.each([[[]], [[1]], [[1, 1]], [[1, 2]], [[2, 2]], [[1, 2, 3]], [[1, 2, 2, 3]]])(
    'push: [%s]',
    (init) => {
      const list = new LinkedList()
      init.forEach((v) => list.add(v))
      expect(list.toArray()).toStrictEqual(init)
    },
  )

  it.each([
    [[], undefined, []],
    [[1], 1, []],
    [[1, 1], 1, [1]],
    [[1, 2], 2, [1]],
    [[2, 2], 2, [2]],
    [[1, 2, 3], 3, [1, 2]],
    [[1, 2, 2, 3], 3, [1, 2, 2]],
  ])('pop: %j %s %j', (init, value, arr) => {
    const list = new LinkedList(init)
    expect(list.pop()).toBe(value)
    expect(list.toArray()).toStrictEqual(arr)
  })
})
