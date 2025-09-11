function wait(){
    const ms = new Date().getTime()+2000;
    while(new Date().getTime() < ms);
}
function register(){
    wait();
    console.log("register");
}
function sendEmail(){
    wait();
    console.log("email");
}
function login(){
    wait();
    console.log("login");
}
function getDate(){
    wait();
    console.log("currdate");
}
function displayData(){
    wait();
    console.log("display");
}

register();
sendEmail();
login();
getDate();
displayData();

console.log("everything is good");
