function greeting(name){
    console.log (`hello${name}`);

}

function getUserInput(callback){
    var name = prompt(' please enter your name ');
    callback(name);

}

getUserInput(greeting);