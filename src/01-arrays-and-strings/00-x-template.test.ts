import { describe, expect, it } from 'vitest'
import { zeroMatrix } from './07-array-matriz-zero'
import { template } from './00-x-template'

describe('exercicio-x: Template', () => {
  it.each([1])('return true: [%s]', (t) => {
    expect(template(t)).toBe(true)
  })
})
