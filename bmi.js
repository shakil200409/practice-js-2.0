let weight = 100;
let height = 1.7;
let bmi

bmi = (weight / (height * height))

if(bmi < 18.5){
    console.log("You are underweight");
}
else if(bmi >= 18.5 && bmi <= 24.9){
    console.log("You are normal");
}
else if(bmi >= 25 && bmi <= 29.9){
    console.log("You are overweight");
}
else{
    console.log("Obese");
}

