let marks =[78,45,90,60,30];
let total = 0;
console.log('=======Student Results======');
for (let index = 0; index < marks.length; index++) {
    let currentMark = marks[index];

total += currentMark;

if (currentMark>50) {
    console.log("Student"+":Pass-"+ currentMark);
} else{
    console.log("Student"+":Fail-"+ currentMark);
}
}

let average = total/ marks.length;
console.log("______________");
console.log('Average in class:'+ average);