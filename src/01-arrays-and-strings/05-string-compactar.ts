/**
 * --- Enunciado do exercicio ---
 *
 * Implemente um método para compactar uma string, baseando-se na contagem de caracteres repetidos em sequência.
 * Por exemplo, a string 'aabbcccdddde' se tornaria 'a2b2c3d4e1'.
 * Se a string "compactada" não for menor que a string original, seu método deve retornar a string original.
 */

/**
 * Abordagem de Iteração e Contagem:
 *
 * Esta função itera pela string para contar caracteres consecutivos.
 * Ela mantém um `current` (caractere atual) e um `count` (contador).
 * Quando o caractere muda, o `current` e seu `count` são adicionados a um array `result`.
 * Ao final do loop, o último grupo de caracteres também é adicionado.
 * A string compactada é formada pela junção dos elementos do array `result`.
 * Por fim, a função compara o comprimento da string original com a compactada e retorna a menor delas.
 */
export function compact(str: string) {
  let result: Array<string | number> = []
  let current: string = str[0]
  let count: number = 0

  for (let i = 0; i <= str.length; i++) {
    const char = str[i]
    if (current === char) {
      count++
    } else {
      result.push(current)
      result.push(count)
      current = char
      count = 1
    }
  }

  const resultStr = result.join('')
  return str.length <= resultStr.length ? str : resultStr
}
