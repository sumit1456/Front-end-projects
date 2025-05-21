//Second section animation 
let container = document.getElementById("sec2-child");

// Featured article boxes
let boxes = document.querySelectorAll(".boxes");


// section 5 trending technologies
let s5boxes = document.querySelectorAll(".sec5-boxes");
console.log(s5boxes);


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


window.addEventListener("scroll", ()=>{

    // Second section animaton
    let pos = container.getBoundingClientRect().top;
    if(pos<650){
        Object.assign(container.style, {
            transition : "0.8s ease-out",
            scale : "1",
    
        })
    }
    else{
        Object.assign(container.style, {
            transition : "0.8s ease-out",
            scale : "0.8",
        })
    }


    //featured artricles animation
    boxes.forEach((box)=>{

        let pos = box.getBoundingClientRect().top;
        if(pos<500){
            Object.assign(box.style, {
                scale : "1",
                opacity : "1",
                transition : "scale 0.8s, opacity 0.1s",
            })
        }
        else{
            Object.assign(box.style, {
                scale : "0.95",
                opacity : "0.9",
                transition : "scale 0.8s, opacity 0.8s",
            })
        }
        

    })


    //sec5 trending articles
    s5boxes.forEach((box)=>{
        let pos = box.getBoundingClientRect().top;
        let height = box.getBoundingClientRect().height;
        console.log(pos);

        if(pos < window.innerHeight && pos + height > 0){
            Object.assign(box.style, {
                scale : "1",
                transition : "scale 0.8s, opacity 0.8s",
            })
        }
        else{
            Object.assign(box.style, {
                scale : "0.95",
                transition : "scale 0.8s, opacity 0.8s",
                transform : "translate 200px",
            })
        }
        
    })
   
  
})
