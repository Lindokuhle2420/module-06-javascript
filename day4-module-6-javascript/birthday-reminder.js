// Birthday Reminder System
// create set
let m = "Margaret ";
let j = "James ";
let mm = "Mmatema "
let p = "Portia ";
let z = "Zanele ";

const names = new Set();
names.add(m);
names.add(j);
names.add(mm)
names.add(p);
names.add(z);

let text = "";
for (const x of names.values()) {
    text+= x;
};
console.log(text);

// Create Maps
const oct = new Date("October 17,2026");
const jan = new Date("January 25,2026");
const mar = new Date("March 22,2026");
const nov = new Date("November 01,2026");
const sep = new Date("September 24,2026");

const birthday = new Map();
birthday.set(m,oct);
birthday.set(j,jan);
birthday.set(mm,mar);
birthday.set(p,nov);
birthday.set(z,sep);

console.log("==========Birthday Reminders========");
console.log("My Friends' respective birthdays:");
let bir="";
for(let x of birthday.values()) {
    bir+=x+("\n");
};
console.log(bir);