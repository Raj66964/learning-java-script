function greeting(){
    console.log('welcome to our app');
    console.log('thanks for using our app');
}

greeting();


function getprimenumber(){
    return 7;
    console.log('after return');//will never execute
}
let prime = getprimenumber();
console.log(prime);


//Parameters
function sum(first,second){
    let add = first+second;
    return add;
}

let result = sum(21,9);
console,log(result);
