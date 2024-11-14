export const sum = (arr: number[]) =>
  arr.reduce((a, b) => {
    if (typeof b !== 'number' && typeof a === 'number') return a
    return a + b
  }, 0)
