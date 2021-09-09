/**
 * highestAndLowest - Modify initial string into new one, that start with highest number and and with lowest:
 * @param {string} numbers - the source numbers
 * @returns {string} - returns the new string
 */
 export const highestAndLowest = (numbers) => {
    const stringNumbers = numbers.split(' ')
    const n = stringNumbers.map(x => parseInt(x))

    n.sort((a,b)=>a-b)

    return `${n[0]} ${n[n.length-1]}`
  }
