export function rotateMatrixCloning(matrix: Array<Array<number>>): Array<Array<number>> {
  const length = matrix.length
  const result: Array<Array<number>> = matrix.map((m) => m.map((n) => n + 0))

  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length; j++) {
      result[j][length - 1 - i] = matrix[i][j]
    }
  }
  return result
}

export function rotateMatrixInPlace(matrix: Array<Array<number>>): Array<Array<number>> {
  const length = matrix.length

  for (let i = 0; i < length; i++) {
    for (let j = i; j < length; j++) {
      const temp = matrix[i][j]
      matrix[i][j] = matrix[j][i]
      matrix[j][i] = temp
    }
  }

  for (let i = 0; i < length; i++) {
    matrix[i].reverse()
  }

  return matrix
}
