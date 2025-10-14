import { describe, expect, it } from 'vitest'
import { LinkedListRemoveDuplicates } from './02-list-remover-duplicados'

describe('exercicio-01: Remova valores duplicados em uma lista', () => {
  it.each([
    [[], []],
    [[1], [1]],
    [[1, 1], [1]],
    [[1, 1, 2], [1, 2]],
    [[1, 2, 2], [1, 2]],
    [[1, 2, 2, 2], [1, 2]],
  ])('remover valores duplicados: [%s -> %s]', (init, expected) => {
    const list = new LinkedListRemoveDuplicates(init)
    list.removeDuplicates()
    expect(list.toArray()).toStrictEqual(expected)
  })
})
