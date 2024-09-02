let myMark = 20;
let friendMark = 30;

if(myMark >= 80){
    if(friendMark >= 80){
        console.log("Go for a lunch");
    }
    else if(friendMark >= 60 && friendMark <= 80){
        console.log("Good luck next time.")
    }
    else if(friendMark >= 40 && friendMark <= 60){
        console.log("Keep your friend's message unseen.")
    }
    else{
        console.log("Block your friend");
    }
}
else{
    console.log("Go to home and sleep and pretend you are sad")
}