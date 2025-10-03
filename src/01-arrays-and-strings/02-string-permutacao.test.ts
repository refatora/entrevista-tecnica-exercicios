import { describe, expect, it } from 'vitest'
import { isPermutationWithSort, isPermutationWithMap } from './02-string-permutacao'

describe('exercicio-02: Determine se duas strings são permutação uma da outra', () => {
  it.each([
    { a: '', b: '' },
    { a: ' ', b: ' ' },
    { a: 'abc', b: 'cba' },
    { a: 'abc', b: 'cab' },
    { a: 'abcde', b: 'adebc' },
    { a: 'abba', b: 'bbaa' },
  ])('retorna true quando uma string é uma permutação da outra: [%s]', ({ a, b }) => {
    expect(isPermutationWithSort(a, b)).toBe(true)
    expect(isPermutationWithMap(a, b)).toBe(true)
  })

  it.each([
    { a: 'a', b: 'b' },
    { a: 'abc', b: 'def' },
    { a: 'abc', b: 'ab' },
    { a: 'abc', b: 'abca' },
    { a: ' ', b: '' },
  ])('retorna false quando uma string não é uma permutação da outra: [%s]', ({ a, b }) => {
    expect(isPermutationWithSort(a, b)).toBe(false)
    expect(isPermutationWithMap(a, b)).toBe(false)
  })
})
