
let form = document.getElementById("sform");
let btn = document.getElementById("btn");

//ysername
let ip1 = document.getElementById("ip1");
//Email
let ip2 = document.getElementById("ip2");

//password
let ip3 = document.getElementById("ip3");


let usernames = ["sumit"];
let pass = [123];

console.log(usernames);


btn.addEventListener("click", ()=>{
   
    alert("Welcome to inoovex");
    // window.location.href = "log-in.html";
    window.history.back();
})

form.addEventListener("submit", (e)=>{
    e.preventDefault();
    usernames.push(ip1.value);
    pass.push(ip3.value);
    localStorage.setItem("cuser", JSON.stringify(usernames));
    localStorage.setItem("cpass", JSON.stringify(pass));
})

