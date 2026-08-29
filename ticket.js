// Crreating a Movie ticket Calculator
let ticket1= "General Ticket";
let ticket2= "Premium Ticket";
let ticket3= "Vip Ticket";

let generalT = 70;
let premiumT = 90;
let vipT = 130;

let total = generalT + premiumT + vipT ;
let discount = 5;
let discountAmount = (discount/100) * total ;
let finalTotal = total - discountAmount;

 //Output receipt
 console.log("====Ticket Purchase Receipt====");
 console.log("ticket1:"+ ticket1 +"-R"+ generalT);
 console.log("ticket2:"+ ticket2 + "-R"+ premiumT);
 console.log("ticket3:" + ticket2 + "-R"+ vipT);
 //console.log("================");
 //onsole.log("Total:R"+ total);
 //console.log("Discount:"+ discount+"%");
 //console.log("FinalTotal:R"+ finalTotal); 