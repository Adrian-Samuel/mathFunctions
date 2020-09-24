const roundUp = (number, factor) => number % factor === 0 ? ((number / factor) * factor) : ((number / factor) + (1 - ((number % factor) / factor))) * factor

/**
 * Function for rounding whole numbers
 * @param {number} number the number being rounded
 * @param {number} base the base denominator the number is being rounded by
 */
function roundUpWithSteps(number, base) {

    const dividend = number / base
    const mod = number % base

    /* 
    Check if the number to be rounded is perfectly divisible by the base 
    If so, then return the dividend of the number and base multiplied by the base
    */
    if (mod === 0) return dividend * base

    /* 
    
    If the number is a float however, take the original dividend and then take away 1 from the float produced by the modulus and the base to get the remainding amount to the next whole number
    
    Add the dividend from before plus the float from the step above to get the present number rounded up
    */
    const roundedInt = (dividend + (1 - (mod / base)))
   

    // multiply the rounded integer and multiply it by the base to get your answer
    return roundedInt * base

}

console.log(roundUpWithSteps(222, 100))