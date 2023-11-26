const add = (a, b) => {
    return a += b;
}

const subtract = (c, d) => {
    return c -= d;
}

const multiply = (e, f) => {
    return e * f;
}

const divide = (g,h) => {
    return g / h;
}

const calculate = (i, j, operate) => {
    return operate(i, j);
}

const sum = calculate(70, 30, add)
console.log(sum)

const subtractBy = calculate(70, 30, subtract)
console.log(subtractBy)

const multiplyBy = calculate (70, 30, multiply)
console.log(multiplyBy)

const divideBy = calculate (70, 30, divide)
console.log(divideBy)
///////////////////////////////////////////////////////////////////
const bar = () => {
    console.log('bar here');
}
bar();

const foo = () => {
    console.log('foo here');
}
foo();
////////////////////////////////////////////////////////////////////
// foo(); 

// const foo ()=>{
//     console.log('hi');
// }
// So, there a few errors. Firstly, if we don't comment out the first use of foo, it will throw an identifier error stating that it's already been used. Secondly, once we do comment out the first use of foo, it throws a Missing initializer in const declaration which means that the first part ( foo(); ) is being caught as an error because it isn't a declared function.  Thirdly, there is an equals sign missing in between foo and the parenthesis which also throws a Missing Intitializer error.To fix it, we'd need to change the function name, put an equals sign in between the new function name and the parenthesis, and move the call to after the last curly bracket.
//It would look something like this
const boo = ()=>{
      console.log('hi')
}
boo();
////////////////////////////////////////////////////////////////////
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 0]

const panagram = ['The', 'quick', 'brown', 'fox', 'jumps', 'over', 'the', 'lazy', 'dog']


//Every

const greaterThanOrEqualToZero = nums.every(number => number >= 0); //basically an arrow func
console.log(greaterThanOrEqualToZero)

const everyWordShorterThanEightCharacters = panagram.every(length => length < 8);
console.log(everyWordShorterThanEightCharacters)

// Filter

const numsLessThanFour = nums.filter(number => number < 4)
console.log(numsLessThanFour)

const wordsWithEvenLength = panagram.filter(word => word.length % 2 === 0)
console.log(wordsWithEvenLength)

// Find

const firstValueDivisibleByFive = nums.find(num => num % 5 === 0)
console.log(firstValueDivisibleByFive)

const firstLongWord = panagram.find(word => word.length > 5);

if (!firstLongWord) {
  console.log('No words in the panagram are longer than 5 characters');
} else {
  console.log(`The first word longer than 5 characters is: ${firstLongWord}`);
}

// Find Index

const indexOfFirstNumberDivisibleByThree = nums.indexOf(number => number % 3 === 0) //i keep putting an = after number and before %; need to remember that I shouldn't do that b/c the % is what we're looking for
console.log(indexOfFirstNumberDivisibleByThree)

const indexOfFirstWordLessThanTwoCharacters = panagram.findIndex(word => word.length < 2);

if (indexOfFirstWordLessThanTwoCharacters === -1) {
  console.log('No words in the panagram are less than 2 characters long');
} else {
  console.log(`Index of the first word less than 2 characters long: ${indexOfFirstWordLessThanTwoCharacters}`);
}

//For Each

nums.forEach((num)=> console.log(num * 3))

panagram.forEach((word)=> console.log(word + '!'))

// Map

const newNumsArray = nums.map(num => num * 100)
console.log(newNumsArray)

const allUpperCase = panagram.map(words => words.toUpperCase()) //had initially forgotten that .toUpperCase is a function itself and forget its parenthesis *facepalm* but  it logged Function: toUpperCase in the terminal so I figured it out
console.log(allUpperCase)

//Some

const numDivisbleByThree = nums.some(number => number / 3)
console.log(numDivisbleByThree)

const wordsHaveA = panagram.some(word => word.includes('a'))
console.log(wordsHaveA)
