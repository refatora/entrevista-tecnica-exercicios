import { describe, expect, it } from 'vitest'
import { LinkedListRemoveDuplicates } from './03-list-remover-duplicados'

describe('exercicio-03: Remova valores duplicados em uma lista encadeada', () => {
  it.each([
    [[], []],
    [[1], [1]],
    [[1, 1], [1]],
    [
      [1, 1, 2],
      [1, 2],
    ],
    [
      [1, 2, 2],
      [1, 2],
    ],
    [
      [1, 2, 2, 2],
      [1, 2],
    ],
    [
      [1, 2, 1, 3, 2],
      [1, 2, 3],
    ],
  ])('remover valores duplicados: [%s -> %s]', (init, expected) => {
    const list = new LinkedListRemoveDuplicates(init)
    list.removeDuplicates()
    expect(list.toArray()).toStrictEqual(expected)
  })
})
