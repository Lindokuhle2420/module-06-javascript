
console.log("======STEP COUNT RESULTS======");
 let stepCount = [1000,2100,4200,5400,6000];
 let total = 0;

 for (let i = 0; i < stepCount.length; i++) {
            let currentstep= stepCount[i];
            total += currentstep;
            if (currentstep >= 5000){
                console.log("Daily steps reached:"+ currentstep)
            } else{
                console.log("Not Enough steps:"+currentstep);
            }
 }
 let  averagesteps= total/stepCount.length
  console.log("=======================");
 console.log("average steps:"+averagesteps);
