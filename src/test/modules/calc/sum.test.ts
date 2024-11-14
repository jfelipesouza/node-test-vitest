import { sum } from '../../../modules/calc/sum'
import { describe, expect, it } from 'vitest'

describe('Testa a função de soma', () => {
  it('Deve somar os numeros dentro de um array', () => {
    const result = sum([1, 2, 3])
    expect(result).toBe(6)
  })

  it('Deve somar só os numeros no array', () => {
    const result = sum(['1', 2, '3', 8] as number[])
    expect(result).toBe(10)
  })
})
