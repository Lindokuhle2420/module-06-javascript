function song(name,age) {
    console.log("Happy birthday");
    console.log("Happy birthday"+ "to you"+' '+ name);
    console.log("Happy birthday"+ 'you are '+age);
    console.log("Happy birthday");
}
song();
song("Lindokuhle",22);
song ("Patrick",34)


function calculateTax(amount) {
    let  result = amount * 0.27;
    return result;
}
let tax = calculateTax(100);
console.log(tax);
