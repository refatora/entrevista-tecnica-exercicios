export function isPalindromeTwoPointers(str: string): boolean {
  let left = 0
  let right = str.length - 1
  do {
    if (str[left] !== str[right]) {
      return false
    }
    left++
    right--
  } while (left < right)
  return true
}
