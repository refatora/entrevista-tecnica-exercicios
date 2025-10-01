import { describe, expect, it } from 'vitest'
import { hasDuplicateCharsWithArray, hasDuplicateCharsWithSet } from './01-string-has-unique-chars'

describe('exercicio-01: Determina se uma string contém caracteres duplicados', () => {
  it.each(['  ', 'aa', 'abab', '1213', 'abba', '😊😊'])(
    'retorne true quando a string contém caracteres duplicados: [%s]',
    (inputString) => {
      expect(hasDuplicateCharsWithSet(inputString)).toBe(true)
      expect(hasDuplicateCharsWithArray(inputString)).toBe(true)
    },
  )

  it.each(['', ' ', 'a', 'abc', '123', 'aAbB'])(
    'retorne false quando a string contém apenas caracteres únicos: [%s]',
    (inputString) => {
      expect(hasDuplicateCharsWithSet(inputString)).toBe(false)
      expect(hasDuplicateCharsWithArray(inputString)).toBe(false)
    },
  )

  it.fails('a abordagem com array falha para caracteres Unicode que compartilham o mesmo surrogate code unit', () => {
    /**
     * Estes emojis são diferentes, mas '😊'.charCodeAt(0) === '😂'.charCodeAt(0)
     * A função com array irá incorretamente identificar uma duplicata.
     * Este teste é marcado com .fails() para indicar que a falha é esperada.
     */
    const unicodeString = '😊😂'
    expect(hasDuplicateCharsWithArray(unicodeString)).toBe(false)
  })
})
