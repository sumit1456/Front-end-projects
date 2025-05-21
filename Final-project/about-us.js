let box1 = document.getElementById("v-container");
console.log(box1);
let vlines = document.getElementById("vlines");

let lines = document.querySelectorAll(".sec3-lines");











window.addEventListener('scroll', ()=>{

    let pos = box1.getBoundingClientRect().top;
    
    let trigger = 515;
    lines.forEach((line)=>{
       let pos2 = line.getBoundingClientRect().top;
       console.log(pos2);
       

       if(pos2< trigger && pos2>280){

        Object.assign(line.style, {
            // border : "1px solid white",
            transition : "0.9s ease",
            opacity : "1",
            scale : "0.9",
            traslateX : "-100px",
            scale : "1",
           

           
        })

       }
       else{
        Object.assign(line.style, {
            transition : "1s ease-in",
            opacity : "0.9",
    
            traslateX: "220px",
            right : "-20px",
            scale : "0.96"

        })

       }

       let containers = document.querySelectorAll(".container");

       containers.forEach((container)=>{
        let cpos = container.getBoundingClientRect().top;
         
        if(cpos<500){
            container.classList.add("container-animations");
        }
       

       })

       


       
      
       
        
    })

    
    


  
    if(pos<=600){
        Object.assign(vlines.style, {
            // traslateX : "-400px",
            opacity : "1",
            scale : "1",
            // translate : "-10px"
           
           


        })
    }
    else if(pos>600 || pos<10){
        Object.assign(vlines.style, {
            // traslateX : "400px",
            transition : "1s ease",
            opacity : "0.5",
            scale : "0.8",
            // translate : "200px"
           
             
        })

    }
    

})



// changing the login button after succesfully log in
let login = document.getElementById("log-in");
let signin = document.getElementById("sign-in");
let logbtncontainer = document.getElementById("log-btns");   
    
if(localStorage.getItem("rlogin")==="true"){
    login.innerHTML = "log out";
    signin.style.display = "none";
   
}


login.addEventListener("click", ()=>{
   if(login.innerHTML=="log out"){
    login.innerHTML = "log in";
    signin.style.display = "block";
    alert("logging out");
    localStorage.removeItem("rlogin");
    

    

   }

})
    