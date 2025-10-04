import { describe, expect, it } from 'vitest'
import { hasUniqueCharsWithArray, hasUniqueCharsWithSet } from './01-string-com-caracteres-unicos'

describe('exercicio-01: Determina se uma string contém apenas caracteres únicos', () => {
  it.each(['', ' ', 'a', 'abc', '123', 'aAbB'])(
    'retorne true quando a string contém apenas caracteres únicos: [%s]',
    (inputString) => {
      expect(hasUniqueCharsWithSet(inputString)).toBe(true)
      expect(hasUniqueCharsWithArray(inputString)).toBe(true)
    },
  )

  it.each(['  ', 'aa', 'abab', '1213', 'abba', '😊😊'])(
    'retorne false quando a string contém caracteres duplicados: [%s]',
    (inputString) => {
      expect(hasUniqueCharsWithSet(inputString)).toBe(false)
      expect(hasUniqueCharsWithArray(inputString)).toBe(false)
    },
  )

  it.fails(
    'a abordagem com array falha para caracteres Unicode que compartilham o mesmo surrogate code unit',
    () => {
      /**
       * Estes emojis são diferentes, mas '😊'.charCodeAt(0) === '😂'.charCodeAt(0)
       * A função com array irá incorretamente identificar uma duplicata.
       * Este teste é marcado com .fails() para indicar que a falha é esperada.
       */
      const unicodeString = '😊😂'
      expect(hasUniqueCharsWithArray(unicodeString)).toBe(true)
    },
  )
})
