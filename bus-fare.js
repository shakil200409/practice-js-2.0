const age = 20;
const student = false;
let ticket = 800;

if(age < 10){
    console.log("Free");
}
else if(age >= 60){
    let discount = ticket * 15/100;
    ticket = ticket - discount;
    console.log(ticket);
}
else{
    if(student == true){
        let discount = ticket * 50/100;
        ticket = ticket - discount;
        console.log(ticket);
    }
    else{
        console.log(ticket);
    }
}


