function modulate(input, [inputRangeInitial, inputRangeFinal], [outputRangeInitial, outputRangeFinal], limit) {
    const constrain = (result, low, high) => Math.max(Math.min(result, high), low)
    const result = (input - inputRangeInitial) / (inputRangeFinal - inputRangeInitial) * (outputRangeFinal - outputRangeInitial) + outputRangeInitial

    if (!limit) return result
  
    return outputRangeInitial < outputRangeFinal
      ? constrain(result, outputRangeInitial, outputRangeFinal)
      : constrain(result, outputRangeFinal, outputRangeInitial)
}