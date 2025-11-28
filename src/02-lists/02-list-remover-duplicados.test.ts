import { describe, it, expect } from 'vitest'
import { DelDuplicatesLinkedList } from './02-list-remover-duplicados'

describe('exercicio-02: Remova valores duplicados em uma lista encadeada', () => {
  it.each([
    { init: [], expected: [] },
    { init: [1], expected: [1] },
    { init: [1, 1], expected: [1] },
    { init: [1, 1, 2], expected: [1, 2] },
    { init: [1, 2, 2], expected: [1, 2] },
    { init: [1, 2, 2, 2], expected: [1, 2] },
    { init: [1, 2, 1, 3, 2], expected: [1, 2, 3] },
  ])('remover valores duplicados: %j', ({ init, expected }) => {
    const list = new DelDuplicatesLinkedList(init)
    list.delDuplicates()
    expect(list.toArray()).toStrictEqual(expected)
  })
})
