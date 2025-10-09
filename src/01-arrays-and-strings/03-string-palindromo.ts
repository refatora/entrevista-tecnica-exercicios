/**
 * --- Enunciado do exercicio ---
 *
 * Determinar se uma string é um palíndromo.
 * Um palíndromo é uma palavra, frase, número ou outra sequência de caracteres
 * que se lê da mesma forma para a frente e para trás.
 */

/**
 * Abordagem com Dois Ponteiros (Two Pointers):
 *
 * Esta função utiliza a técnica de dois ponteiros para verificar se a string é um palíndromo
 * de forma eficiente, comparando as extremidades da string e movendo-se em direção ao centro.
 *
 * 1. Ponteiro `left`: Inicia no primeiro caractere (índice 0).
 * 2. Ponteiro `right`: Inicia no último caractere (índice `str.length - 1`).
 *
 * O loop continua enquanto `left` for menor que `right`:
 * - A cada iteração, os caracteres nas posições `left` e `right` são comparados.
 * - Se os caracteres forem diferentes, a string não é um palíndromo, e a função retorna `false`.
 * - Se forem iguais, os ponteiros são movidos para o centro: `left` é incrementado e `right` é decrementado.
 *
 * Se o loop terminar sem encontrar caracteres diferentes, significa que a string é um palíndromo,
 * e a função retorna `true`.
 */
export function isPalindrome(str: string): boolean {
  let left = 0
  let right = str.length - 1
  while (left < right) {
    if (str[left] !== str[right]) {
      return false
    }
    left++
    right--
  }
  return true
}
