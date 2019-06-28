function modulate(input, [inputRangeInitial, inputRangeFinal], [outputRangeInitial, outputRangeFinal], limit) {
    let result = (input - inputRangeInitial) / (inputRangeFinal - inputRangeInitial) * (outputRangeFinal - outputRangeInitial) + outputRangeInitial
    if (!limit) return result
    return outputRangeInitial < outputRangeFinal ? constrain(result, outputRangeInitial, outputRangeFinal) : constrain(result, outputRangeFinal, outputRangeInitial)
}
function constrain(result, low, high) {
    return Math.max(Math.min(result, high), low)
}
