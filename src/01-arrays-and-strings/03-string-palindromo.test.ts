import { describe, expect, it } from 'vitest'
import { isPalindromeTwoPointers } from './03-string-palindromo'

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
  ])('retorne true string é um palindromo: [%s]', (str) => {
    expect(isPalindromeTwoPointers(str)).toBe(true)
  })
  it.each([
    '!111',
    '!212',
    '!123454321',
    '!aa',
    '!aba',
    '!asa',
    '!ata',
    '!ele',
    '!rir',
    '!esse',
    '!osso',
    '!salas',
    '!reter',
    '!rever',
    '!!1!',
  ])('retorne false string é um palindromo: [%s]', (str) => {
    expect(isPalindromeTwoPointers(str)).toBe(false)
  })
})
