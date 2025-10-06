import { describe, expect, it } from 'vitest'
import { isPermutationWithSort, isPermutationWithMap } from './02-string-permutacao'

describe('exercicio-02: Determine se duas strings são permutação uma da outra', () => {
  it.each([
    ['', ''],
    [' ', ' '],
    ['abc', 'cba'],
    ['abc', 'cab'],
    ['abcde', 'adebc'],
    ['abba', 'bbaa'],
  ])('retorna true quando uma string é uma permutação da outra: [%s, %s]', (a, b) => {
    expect(isPermutationWithSort(a, b)).toBe(true)
    expect(isPermutationWithMap(a, b)).toBe(true)
  })

  it.each([
    [' ', ''],
    ['a', 'b'],
    ['abc', 'def'],
    ['abc', 'ab'],
    ['abc', 'abca'],
  ])('retorna false quando uma string não é uma permutação da outra: [%s, %s]', (a, b) => {
    expect(isPermutationWithSort(a, b)).toBe(false)
    expect(isPermutationWithMap(a, b)).toBe(false)
  })
})
