function modulate(input, inputRange, outputRange, limit = true) {
  const inputRangeInicial = inputRange[0],
        inputRangeFinal = inputRange[1],
        outputRangeInicial = outputRange[0],
        outputRangeFinal = outputRange[1],
        result = outputRangeInicial + (((input - inputRangeInicial) / (inputRangeFinal - inputRangeInicial)) * (outputRangeFinal - outputRangeInicial))
  return limit === true && result > outputRangeFinal ? outputRangeFinal : result
}
