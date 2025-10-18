import { describe, expect, it } from 'vitest'
import { compact } from './05-string-compactar'

describe('exercicio-05: Compactar string', () => {
  it.each([
    ['', ''],
    ['a', 'a1'],
    ['ab', 'a1b1'],
    ['aaa', 'a3'],
    ['aaabbb', 'a3b3'],
    ['aaabbcccbbb', 'a3b2c3b3'],
  ])('retorne a string compactada: [%s]', (input, expected) => {
    expect(compact(input)).toBe(expected)
  })
})
