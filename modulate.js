function modulate(input, [inputRangeInitial, inputRangeFinal], [outputRangeInitial, outputRangeFinal], limit){
    let result = (input - inputRangeInitial) / (inputRangeFinal - inputRangeInitial) * (outputRangeFinal - outputRangeInitial) + outputRangeInitial;
    function constrain(input, inputRangeInitial, inputRangeFinal) { return Math.max(Math.min(input, inputRangeFinal), inputRangeInitial) }
    return limit ? outputRangeInitial < outputRangeFinal ? constrain(result, outputRangeInitial, outputRangeFinal) : constrain(result, outputRangeFinal, outputRangeInitial) : result
}