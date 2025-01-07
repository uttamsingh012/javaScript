// const arr = []
// %DebugPrint(arr)

//continious, Holey

//SMI (small integer)
//Packed element
//Double (float, string, function)

const arrTwo = [1,2,3,4,5,6] 
// Packed SMI_ELEMENTS (number allowed)

arrTwo.push(7.0)
// Packed_DOUBLED_ELEMENTS

arrTwo.push('8')
// PACKED_ELEMENTS

arrTwo[10] = 11
// HOLEY_ELEMENTS (integer, float, string, gap)

console.log(arrTwo)
console.log(arrTwo.length)
console.log(arrTwo[9]) // whenever we access the empty space array o/p show undefined

// bound check
// hasOwnProperty(arrTwo, 9)
// hasOwnProperty(arrTwo.prototype, 10)
// hasOwnProperty(Object.prototype, 10)


// holes are very expensive in js

const arrThree = [1,2,3,4,5]
console.log(arrThree[2])

// SMI > DOUBLE > PACKED
// H_SMI > H_DOUBLE > H_PACKED

const arrFour = new Array(3)
// just 3 Holes. HOLEY_SMI_ELEMENTS
arrFour[0] = '1' // HOLEY_ELEMENTS
arrFour[0] = '2' // HOLEY_ELEMENTS
arrFour[0] = '3' // HOLEY_ELEMENTS

const arrFive = []
arrFive.push('1')  // PACKED_ELEMENTS
arrFive.push('2')  // PACKED_ELEMENTS
arrFive.push('3')  // PACKED_ELEMENTS


const arrSix = [1,2,3,4]
arrSix.push(Infinity)  // DOUBLE


// for, for-of, forEach
