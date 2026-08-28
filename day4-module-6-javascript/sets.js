// values()
/*
const letters = new Set(["a","b","c"]);
let text=" ";
for (const x of letters.values()) {
    text+= x ;
}
console.log(text);
*/


// entries() method;
/*const vowels = new Set(["a","e","i","o","u"]);
const iterator = vowels.entries();
let text =" ";
for (const x of iterator) {
    text+= x;

};
 console.log(text);
 */

 //Maps
  const cars = new Map();
  cars.set("mercedes",2501);
  cars.set("bugatti",6542);
  cars.set("mazda",6987);

  let numb = cars.get("mazda")
  console.log("Number of mazda cars sold were "+numb+ "  units in 2026.");

  //Map entries
let text = "";
for(const x of cars.entries()) {
    text += x;
};
console.log(text);