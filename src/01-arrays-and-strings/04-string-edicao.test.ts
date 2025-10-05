import { describe, expect, it } from 'vitest'
import { hasEdits } from './04-string-edicao'

describe(`exercicio-04: Determina se uma string tem 0 ou 1 edicao`, () => {
  it.skip.each([
    [' ', ' '],
    ['1', '1'],
    ['11', '11'],
    ['111', '111'],
    ['123', '123'],
    ['abc', 'abc'],
  ])('retorne 0 quando as duas strings sao iguais: [%s, %s]', (a, b) => {
    expect(hasEdits(a, b)).toBe(0)
  })

  it.skip.each([
    [' ', '0'],
    ['1', '0'],
    ['11', '01'],
    ['11', '10'],
    ['111', '011'],
    ['111', '101'],
    ['111', '110'],
  ])('retorne 1 quando a segund string tem um caractere substituido: [%s, %s]', (a, b) => {
    expect(hasEdits(a, b)).toBe(1)
  })

  it.skip.each([
    [' ', ''],
    ['1', ''],
    ['11', '1'],
    ['111', '11'],
    ['123', '23'],
    ['123', '13'],
    ['123', '12'],
  ])('retorne 1 quando a segunda string tem um caractere removido: [%s, %s]', (a, b) => {
    expect(hasEdits(a, b)).toBe(1)
  })

  it.skip.each([
    ['', ' '],
    ['', '1'],
    ['1', '11'],
    ['11', '111'],
    ['23', '123'],
    ['13', '123'],
    ['12', '123'],
  ])('retorne 1 quando a segunda string tem um caractere adicionado: [%s, %s]', (a, b) => {
    expect(hasEdits(a, b)).toBe(1)
  })

  it.each([
    // [' ', '12'],
    // ['1', '00'],
    // ['11', '00'],
    // ['111', '1'],
    // ['123', '03'],
    ['1', '01'],
  ])('retorne -1 quando a segunda string tem 2 ou mais edicoes: [%s, %s]', (a, b) => {
    expect(hasEdits(a, b)).toBe(-1)
  })
})
