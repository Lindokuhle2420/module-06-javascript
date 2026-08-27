
let car = {
    make: "Mercedes",
    model: "W204",
    year: 1993,
    color: "Black",
    getId: function() {
        return this.model+this.year;
    }
};

let number = car.getId();
let veh= car;


//console.log("My favourite car is"+" "+car.make);
//console.log("A good color on a vehicle is always"+ car["color"]);
console.log(number);
console.log(veh);
