// Read this article on programming principles, focus on the following nine:

// DRY
    //Its the idea that you want to write succinct code so as to keep it easily readable and it stands for Don't Repeat Yourself.
// KISS
    //It stands for Keep It Stupid and Simple, basically getting to the idea that less complicated code tends to be easier to read/fix and has fewer bugs
// Avoid creating a YAGNI
    //Stands for You Aren't Going To Need It and represents the idea that you shouldn't be writing code until you need it b/c you may not end up needing it if you write it in prematurely.
// Do the simplest thing that could possibly work
    //This is basically combining the ideas of DRY and KISS; it doesn't have to be fancy to work.
// Don't make me think
    //Goes back to the KISS idea. The simpler the code, the more usability it has.
// Write code for the maintainer
    //Given that maintaining code tends to be the most expensive part of any project, the code that you write should be memorable and easy to maintain.
// Single responsibility principle
    //This principle states that any module or class should do one thing which makes the code more modular, more readable, and less likely to have errors.
// Avoid premature optimization
    //Optimization should be done after the code is working.
// Separation of concerns
    //This is a similar principle to SRP in that it states that specific tasks should have their own modules or units of code and that there is minimal to no overlap in functionality.

// Answer

// Write a ~1 sentence summary for each one-written under each heading

// Which ones surprise you (if any)?
    //None of what is listed is really surprising. I hadn't heard of half of those principles until reading about them, but they all make sense.
// Which one is currently giving you the most struggle?
    //I think right now, given that I'm still learning coding itself, that I'm struggling with most of the principles. I for sure have issues keeping the code DRY and implenting KISS has not been consistent given that I tend to overthink things a lot. I do think, however, that I've been doing well in avoiding YAGNI just by way of how I'm being taught to code.

//     Commenting Code
// Comment each line of this code and describe what it is doing. Feel free to run this code and add console.logs to help you figure it out:

const f = l => { // this is the start of an arrow function called f which has a parameter of 1
  let es = 0, p = 0, c = 1, n = 0 // this determines what each variable (es,p,c,n) are equal to at the start of the function
  while (c <= l) { //this starts a while loop which dictates that c is less than or equal to 1
    n = c + p; //while c is less than or equal to one, n will be equal to c and p added together
    [c, p] = [n, c] //this line is using array destructuring to switch the c and p variables instead of using indexing
    es += (c % 2 === 0) ? c : 0 //this line checks if c is an even number and if is, that value is added to the es variable.; ? is being used as an if-else statement making it so that nothing is done if c does not have a value of an equal number
  }
  return es //returns the value of es which is the sum of all equal numbers starting at one and ending with a given parameter
}

console.log(f(55)) //this calls the function with 55 as the argument which gives 44 as the result in the terminal

const f2 = (limit) => {
    let evenSum = 0;
    let previous = 0;
    let current = 1;
    while (current <= limit) {
      let next = current + previous;
      previous = current;
      current = next;
      if (current % 2 === 0) {
        evenSum += current;
      }
    }
    return evenSum;
  }
  
  
  console.log(f2(55))



//In keeping with one of our programming principals (write code for the maintainer): What would have been a more semantic name for this function (hint: this is a problem we had for either lab or hw and is considered a classic ) - are there any other variable names or things that would make this code easier to read and understand? 
    //The name could be changed to addedEvens or some such to make it more semantic. If anything, I would just add Num or Number to the variables (i.e., previousNum or currentNumber).

// If you started a new job and your project was to expand the functionality of this function by allowing a second argument and then based on that second argument, returning the sum of even or odd numbers, which code would you rather start working with f or f2?
    // I'd want to start with the second code. There is more room to make adjustments than in f. It would be much easier to make any necessary edits.

// Finally, the 'shorter' code style doesn't use semi-colons, except for the fourth line. Remove this semi-colon! Run the code, is this semi-colon necessary?
    //The semi-colon was necessary as its absence threw this error SyntaxError: Invalid left-hand side in assignment. 

    