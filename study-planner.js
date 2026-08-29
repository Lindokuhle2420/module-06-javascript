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

 // study hours
 const studytime = new Map();
 studytime.set(j,"6 hours");
 studytime.set(p,"4 hours");
 studytime.set(m,"8 hours");
 studytime.set(d,"5 hours");
 let st="";
 studytime.forEach(function(value,key){
    st+=key+": "+value+("\n");
})

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
let t ="";
schedule.forEach(function(value,key){
    t+=key+" -> "+value+("\n");
})



// Creating a deadline using Map
const deadlines = new Map();
deadlines.set(j,new Date("10,September,2026"));
deadlines.set(p,new Date("15,September,2026"));
deadlines.set(m,new Date("20,September,2026"));
deadlines.set(d,new Date("26,September,2026"));
let l ="";
deadlines.forEach(function(value,key){
    l+=key+" -> "+value+("\n");
})

// Create a Function
function checkStudyStatus(hours){
    for( const hour of hours){
        if(hour.Hours > 6){
            return "Good study progress for"+" "+ hour.Name;
        } else{
            return"Needs more study time for"+" "+ hour.Name;
        }
    }
}

 //Create a function
function calculateTotalHours(subjects){
    let total = 0;
    for(let subject of subjects){
        total+=subject.Hours;
    }
    return total;
};



console.log("============PERSONAL STUDY PLANNER===========");
console.log("                      ");
console.log("Today's date - "+ new Date("08/29/2026"));
console.log("                      ");
console.log("Subjects:"+("\n")+text);
console.log("Study Hours:"+("\n"+st));
console.log("Schedule:"+("\n")+t);
console.log("Deadlines: "+("\n")+l);
console.log(checkStudyStatus(studySubjects));
console.log("                            ");
console.log ("Total study hours: "+ calculateTotalHours(studySubjects));

