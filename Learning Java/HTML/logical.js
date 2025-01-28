let age = 19;
let isstudent = true;

if(age >=18 && isstudent){
    console.log('you are eligible for internship');
}else if (age >=18){
    console.log('you have to do a job');
}else{
    console.log('you are either');
}

if (age<22 || isstudent){
    console.log('you are eligible for scholarship');
}