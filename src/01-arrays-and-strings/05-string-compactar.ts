/**
 * --- Enunciado do exercicio ---
 *
 * Implemente um método para compactar uma string, baseando-se na contagem de caracteres repetidos em sequência.
 * Por exemplo, a string 'aabbcccdddde' se tornaria 'a2b2c3d4e1'.
 */

/**
 * Abordagem de Iteração e Contagem:
 *
 * Esta função itera pela string para contar caracteres consecutivos.
 * Ela mantém um `prev` (caractere anterior) e um `count` (contador).
 * Quando a sequencia muda, o `prev` e seu `count` são adicionados a um array `result`.
 * A string compactada é formada pela junção dos elementos do array `result`.
 */
export function compact(str: string) {
  let result: Array<string | number> = []
  let prev: string = str[0]
  let count: number = 1

  for (let i = 1; i <= str.length; i++) {
    const current = str[i]
    if (prev === current) {
      count++
    } else {
      result.push(prev)
      result.push(count)
      prev = current
      count = 1
    }
  }

  return result.join('')
}
