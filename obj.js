const car = {
    engine : true,
    steering: true,
    speed : "slow"
}

const sportsCar = Object.create(car);
sportsCar.speed = "fast";
console.log("The sportsCar object : ",sportsCar);

console.log("------ For-in is unrealible -----");
for(prop in sportsCar){
    console.log(prop);
}
console.log("iterating over object and its prototype!");

console.log("------ for-of is realible ------")

for(prop of Object.keys(sportsCar)){
    console.log(prop+": "+ sportsCar[prop]);
}

console.log("Iterating over objects own properties only!")