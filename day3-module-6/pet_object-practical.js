let Pet = {
    name: "bulldog",
    age: 2,
    type: "Mix-breed",
    color: "Black",
    price: 1000
};
//let number = Pet;
//console.log(number);
function displayPet(Pet) {
    let foodBonus= 500;
    console.log("-------Pet Information------");
    console.log("Name:"+Pet.name);
    console.log("Age:"+Pet.age);
    console.log("Type of dog:"+Pet.type);
    console.log("Price of Dog:R"+Pet.price);
    console.log("=============================")
    console.log("Total Price Tag plus bonus:R"+(Pet.price+foodBonus));
};

displayPet(Pet);