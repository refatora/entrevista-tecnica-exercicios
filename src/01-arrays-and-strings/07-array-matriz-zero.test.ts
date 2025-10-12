import { describe, expect, it } from 'vitest'
import { zeroMatrix } from './07-array-matriz-zero'

describe('exercicio-07: Preencha a coluna e linha de uma matrix onde um element é zero', () => {
  it.each([
    [
      'matriz sem zeros',
      [
        [1, 1],
        [1, 1],
        [1, 1],
      ],
      [
        [1, 1],
        [1, 1],
        [1, 1],
      ],
    ],
    [
      'matriz com um zero no centro',
      [
        [1, 1, 1],
        [1, 0, 1],
        [1, 1, 1],
      ],
      [
        [1, 0, 1],
        [0, 0, 0],
        [1, 0, 1],
      ],
    ],
    [
      'matriz com zeros na diagonal',
      [
        [0, 1, 1],
        [1, 0, 1],
        [1, 1, 0],
      ],
      [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
      ],
    ],
    [
      'matriz não quadrada',
      [
        [1, 1, 1, 1],
        [1, 0, 1, 1],
        [1, 1, 1, 1],
      ],
      [
        [1, 0, 1, 1],
        [0, 0, 0, 0],
        [1, 0, 1, 1],
      ],
    ],
    [
      'matriz com zero na borda',
      [
        [1, 1, 0],
        [1, 1, 1],
        [1, 1, 1],
      ],
      [
        [0, 0, 0],
        [1, 1, 0],
        [1, 1, 0],
      ],
    ],
    ['matriz vazia', [], []],
    ['matriz com linha vazia', [[]], [[]]],
  ])('deve zerar a linha e coluna da matrix %s: %j -> %j', (_, given, expected) => {
    expect(zeroMatrix(given)).toStrictEqual(expected)
  })
})
