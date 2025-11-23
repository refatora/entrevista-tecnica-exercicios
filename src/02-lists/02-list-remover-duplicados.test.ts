import { describe, it, expect } from 'vitest'
import { DelDuplicatesLinkedList } from './02-list-remover-duplicados'

describe.skip('exercicio-02: Remova valores duplicados em uma lista encadeada', () => {
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
    const list = new DelDuplicatesLinkedList(init)
    list.delDuplicates()
    expect(list.toArray()).toStrictEqual(expected)
  })
})
