ask = (question, yes, no) => {if (confirm(question)){
    yes();
}
else{
    no(); 
}

}

ask(
    "do you agree?",
    function() {alert("you agreed");},
    function() {alert("you cancelled the execution");}

);