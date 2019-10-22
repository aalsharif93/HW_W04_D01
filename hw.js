​// ------ FOR ALL THE EXCERCISES ONLY USE ARROW FUNCTIONS  ----- //
​


// PART 1:  USE MAP IN THE FOLLOWING EXCERCISES //

// A) write a function called swapCase that takes a string of words and uses .map and your newly written capitalize()
// function to return a string where every other word is in all caps.
// Hint: look up Array.prototype.map on MDN and see what arguments the .map callback can take.
// ex: swapCase('hello stranger , what do we have today? ') // => " HELLO stranger , WHAT do WE have TODAY ?"
var swapCase = (string) =>

{

  var mapArr = string.split(' ')
  console.log(mapArr);

  var mapArr = mapArr.map((itemCode, i)=>{
    if(i % 2 == 0) {
      itemCode = itemCode.toUpperCase();
    }
     return itemCode
  })
  let answer = ''
  for(elm of mapArr){
    answer += ' '+ elm
  }

console.log(answer);

};
swapCase('Hello stranger , what do we have today?')


// B) Write a function shiftLetters that takes a string and uses .map to return an encoded string with each letter shifted down the
// alphabet by one. Hint: Use Look up the JS functions String.fromCharCode() and String.charCodeAt() .
// see if you can use Ascii code to acomplish this
// ex. shiftLetters('hello') // => 'ifmmp'
// ex. (shiftLetters('abcxyz') // => "bcdyz{"


var shiftLetters = string => {
  string = string.split('')
    var asciiCode =0
    var letter = ''
  string = string.map(item => {
      asciiCode = item.charCodeAt()
      asciiCode ++
      letter = String.fromCharCode(asciiCode)
      return letter

  })
  let shift  = ''
  for(char of string){
    shift  += char
  }
console.log(shift );

};

shiftLetters('juic')



// PART 2: USE FOREACH IN THE FOLLOWING EXCERCISES

// A) Build a Deck
// Use a forEach() loop within another forEach() loop to build an array representing a deck of cards. A deck consists of 52 cards - 13 ranks in each of 4 suits.
// Then, display a list of every card in the deck. (Hint: Each element of the array should read something like "ace of spades" or "4 of hearts").
// The start of your output should look something like this:
// - ace of clubs
// - 2 of clubs 
// - 3 of clubs 
// - 4 of clubs 
// - 5 of clubs 
// - 6 of clubs 
// - 7 of clubs 
// - 8 of clubs 
// - 9 of clubs 
// - 10 of clubs 
// - jack of clubs 
// - queen of clubs 
// - king of clubs 
// - ace of diamonds
// - 2 of diamonds
// - 3 of diamonds 


let cards = ['diamonds', 'hearts', 'spades', 'clubs']
   let nums = ['Ace', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King']

   cards.forEach(card => {
     nums.forEach(num =>{
         console.log(num + ' of '+ card);

     })  

   });



// B) Word Play
// Create a form where users may enter a sentence.
// Turn that sentence into an array using the split method.
// Then, loop through this array to build a new array out of every word in the sentence that is 3 or more characters in length.
// Finally, reverse the order of the new array, join it back together into a string, and display it to the user.




