import { describe, expect, it } from 'vitest'
import { isPalindrome as isPalindrome } from './03-string-palindromo'

describe('exercicio-03: Determina se uma string é um palindromo', () => {
  it.each([
    '',
    '111',
    '212',
    '123454321',
    'aa',
    'aba',
    'asa',
    'ata',
    'ele',
    'rir',
    'esse',
    'osso',
    'salas',
    'reter',
    'rever',
    '!1!',
  ])('retorne true quando a string é um palíndromo: [%s]', (str) => {
    expect(isPalindrome(str)).toBe(true)
  })
  it.each(['ab', 'abc', 'abca', '123', 'aab', 'bba', 'not a palindrome', '!111', '!!1!'])(
    'retorne false quando a string não é um palíndromo: [%s]',
    (str) => {
      expect(isPalindrome(str)).toBe(false)
    },
  )
})
