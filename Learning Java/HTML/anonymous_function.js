function greeting(){
    console.log('hello i am here');

}

console.log('before');
setTimeout(greeting,5000);
console.log('after');

console.log('before');
setTimeout(function(){
    console.log('i am anonymous');
},3000);

const multiply = functio(a , b) {
    return a*b;
}

console.log(multiply(4,3));
