import { describe, expect, it } from 'vitest'
import { Stack } from './01-stack'

describe('exercicio-01: Implemente uma pilha utilizando uma lista encadeada', () => {
  it.each([[[]], [[1]], [[1, 1]], [[1, 2]], [[2, 2]], [[1, 2, 3]], [[1, 2, 2, 3]]])(
    'inicializar com array: [%s]',
    (init) => {
      const list = new Stack(init)
      expect(list.toArray()).toStrictEqual(init.reverse())
    },
  )

  it.each([[[]], [[1]], [[1, 1]], [[1, 2]], [[2, 2]], [[1, 2, 3]], [[1, 2, 2, 3]]])(
    'push: [%s]',
    (init) => {
      const list = new Stack()
      init.forEach((v) => list.push(v))
      expect(list.toArray()).toStrictEqual(init.reverse())
    },
  )

  it.each([
    [[], undefined, []],
    [[1], 1, []],
    [[1, 1], 1, [1]],
    [[1, 2], 2, [1]],
    [[2, 2], 2, [2]],
    [[1, 2, 3], 3, [2, 1]],
    [[1, 2, 2, 3], 3, [2, 2, 1]],
  ])('pop: %j %s %j', (init, value, arr) => {
    const list = new Stack(init)
    expect(list.pop()).toBe(value)
    expect(list.toArray()).toStrictEqual(arr)
  })
})
