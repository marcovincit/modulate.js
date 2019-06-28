function modulate(input, inputRange, outputRange, limit = true) {
  const inputRangeInitial = inputRange[0],
        inputRangeFinal = inputRange[1],
        outputRangeInitial = outputRange[0],
        outputRangeFinal = outputRange[1],
        result = outputRangeInitial + (((input - inputRangeInitial) / (inputRangeFinal - inputRangeInitial)) * (outputRangeFinal - outputRangeInitial))
  return limit === true && result > outputRangeFinal ? outputRangeFinal : result
}
