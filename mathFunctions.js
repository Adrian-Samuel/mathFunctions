const roundUp = (number, factor) => number % factor === 0 ? ((number / factor) * factor) : ((number / factor) + (1 - ((number % factor) / factor))) * factor


