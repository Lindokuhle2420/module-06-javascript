// sets
const letters = new Set(['a','b','c']);
console.log(letters);
console.log("The set has "+ letters.size +" values")
// creating a set and add variables
const alphas = new Set();
let a = 'a';
let b = 'b';
let c = 'c';

alphas.add(a);
alphas.add(b);
alphas.add(c);
console.log(alphas);


//Listing elements
const letter = new Set(['a','b','c']);
let text="";
for(let x of letter){
    text +=x;
}
console.log(text);

answer = letter.has("g");
