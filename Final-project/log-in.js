localStorage.username = "sumit";
localStorage.password = "123";


let ip1 = document.getElementById("ip1");
let ip2 = document.getElementById("ip2");


let sbtn = document.getElementById("btn");

let login = document.getElementById("log-in");

let usernames = JSON.parse(localStorage.getItem("cuser"));
let passwords = JSON.parse(localStorage.getItem("cpass"));
console.log(usernames);
console.log(passwords);




sbtn.addEventListener("click", (event)=>{
    event.preventDefault();
    let user = ip1.value;
    let pass = ip2.value;

    ip1.value = "";
    ip2.value = "";

   
    

    if(usernames.includes(user)){
        if(passwords.includes(pass)){
            alert("Login succesfull")
        }

        localStorage.setItem("rlogin", "true");
       
        window.history.back(); // Equivalent to hitting the back button

    }
    else{
        alert("Invalid credentials")
    }


 
    
    

})


