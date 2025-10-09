import { describe, expect, it } from 'vitest'
import { hasEdits } from './04-string-edicao'

describe(`exercicio-04: Determina se uma string tem 0 ou 1 edicao`, () => {
  it.each([
    ['a', 'a'],
    ['ab', 'ab'],
    ['abc', 'abc'],
  ])('retorne 0 quando as duas strings sao iguais: [%s, %s]', (a, b) => {
    expect(hasEdits(a, b)).toBe(0)
  })

  it.each([
    ['a', 'x'],
    ['ab', 'xb'],
    ['ab', 'ax'],
    ['abc', 'xbc'],
    ['abc', 'axc'],
    ['abc', 'abx'],
  ])('retorne 1 quando a segund string tem um caractere substituido: [%s, %s]', (a, b) => {
    expect(hasEdits(a, b)).toBe(1)
  })

  it.each([
    ['a', ''],
    ['ab', 'a'],
    ['ab', 'b'],
    ['abc', 'ab'],
    ['abc', 'ac'],
    ['abc', 'bc'],
  ])('retorne 1 quando a segunda string tem um caractere removido: [%s, %s]', (a, b) => {
    expect(hasEdits(a, b)).toBe(1)
  })

  it.each([
    ['', 'x'],
    ['a', 'ax'],
    ['a', 'xa'],
    ['ab', 'xab'],
    ['ab', 'axb'],
    ['ab', 'abx'],
  ])('retorne 1 quando a segunda string tem um caractere adicionado: [%s, %s]', (a, b) => {
    expect(hasEdits(a, b)).toBe(1)
  })

  it.each([
    ['a', 'xxx'],
    ['a', 'xxa'],
    ['a', 'xx'],
    ['abc', 'x'],
  ])('retorne -1 quando a segunda string tem 2 ou mais edicoes: [%s, %s]', (a, b) => {
    expect(hasEdits(a, b)).toBe(-1)
  })
})
