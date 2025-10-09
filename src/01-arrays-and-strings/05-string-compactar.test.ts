import { describe, expect, it } from 'vitest'
import { compact } from './05-string-compactar'

describe('exercicio-05: Compactar string', () => {
  it.each(['a', 'abc', 'abcdefg', 'aa', 'aab', 'aabb', 'abbb'])(
    'retorne a mesma string quando compactacao resultar em uma string de maior ou igual comprimento: [%s]',
    (str) => {
      expect(compact(str)).toBe(str)
    },
  )

  it.each([
    ['aaa', 'a3'],
    ['aaabbb', 'a3b3'],
    ['aabbcccdddde', 'a2b2c3d4e1'],
  ])('retorne a string compactada: [%s]', (input, expected) => {
    expect(compact(input)).toBe(expected)
  })
})
