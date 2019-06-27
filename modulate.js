function modulate({value, rangeA, rangeB, limit = true}) {
    const rangeAInicial = rangeA[0],
          rangeAFinal = rangeA[1],
          rangeBInicial = rangeB[0],
          rangeBFinal = rangeB[1],
          result = rangeBInicial + (((value - rangeAInicial) / (rangeAFinal - rangeAInicial)) * (rangeBFinal - rangeBInicial))
    return limit === true && result > rangeBFinal ? rangeBFinal : result
}
