export function rotateMatrixInPlaceHard(m: Array<Array<number>>): Array<Array<number>> {
  const n = m.length
  const layers = Math.floor(n / 2)

  for (let l = 0; l < layers; l++) {
    for (let i = l; i < n - 1 - l; i++) {
      const temp = m[l][i]
      m[l][i] = m[n - 1 - i][l]
      m[n - 1 - i][l] = m[n - 1 - l][n - 1 - i]
      m[n - 1 - l][n - 1 - i] = m[i][n - 1 - l]
      m[i][n - 1 - l] = temp
    }
  }
  return m
}
