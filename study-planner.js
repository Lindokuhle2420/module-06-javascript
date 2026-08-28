// Create a study

 //subjects in a set
 let j = "JavaScript";
 let m = "Mathematics";
 let p = "Python";
 let d = "Database-System";
 const modules = new Set();
 modules.add(j);
 modules.add(m);
 modules.add(p);
 modules.add(d);

 let text="";
 for (let o of modules.keys()){
    text+= o +("\n");
 }
 
 //Create an Array of objects
 const studySubjects = [
 {
    Name :j,
    Hours:6,
    Difficulty:"medium"
 },
 {
    Name:p,
    Hours:4,
    Difficulty:"easy"
 },
{
    Name:m,
    Hours:6,
    Difficulty:"hard"
},
{
    Name :d,
    Hours :5,
    Difficulty: "medium"
}
];

// Creating a Schedule using Map
const schedule = new Map();
schedule.set("Monday",j);
schedule.set("Tuesday",m);
schedule.set("Wednesday",p);
schedule.set("Thursday",d);
let sche ="";
    for(let x of schedule.entries()){
        sche+= x +("\n");
    }


// Creating a deadline using Map
const deadlines = new Map();
deadlines.set(j,new Date("2026-09-10"));
deadlines.set(p,new Date("2026-09-15"));
deadlines.set(m,new Date("2026-09-20"));
deadlines.set(d,new Date("2026-09-26"));
let l ="";
for (let ds of deadlines.entries()){
    l+= ds+("\n");
}

/* Create a function
const calculateTotalHours(subjects) {
    let total = 0;
    for(let subject of subjects){
        total+=subject.Hours;
    }
    return total;
};
*/

console.log("=====PERSONAL STUDY PLANNER======");
console.log("Today's date - "+new Date());
console.log("                      ");
console.log("Subjects:"+("\n")+text);
console.log("Schedule:"+("\n")+ sche);
console.log("Deadlines: "+("\n")+l);


