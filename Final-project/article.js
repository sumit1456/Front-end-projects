let milestones = document.querySelectorAll(".milestone");
console.log(milestones);


// u content
let ucontents = document.querySelectorAll(".u-content");


window.addEventListener("scroll", ()=>{

    // animation for milestones 
    milestones.forEach((milestone)=>{
        let pos = milestone.getBoundingClientRect().top;

        let trigger = 350;
        let trigger2 = 50;

        if(pos<trigger && pos>trigger2){
            Object.assign(milestone.style, {
                scale : "1",
                transform : "translateX(-10px)",
                transition : "scale 1s translateX 1s",
                opacity : "1",
                outline: "2px solid rgb(58, 68, 72)",
                backgroundColor : "rgb(26, 31, 36)",
               
            })
        }
        else{
            Object.assign(milestone.style, {
                scale : "0.99",
                transform : "translateX(30px)",
                transition: "transform 1s ease-out, opacity 1s ease-out",
                opacity : "0.2",
                animationDelay : "4s",
                outline : "none",
            })

        }

        //animation of u-might section

        ucontents.forEach((ucontent)=>{
            
            let pos2 = ucontent.getBoundingClientRect().top;
            let trigger1 = -200;
            let trigger2 = 400;

            if(pos2<trigger2 && pos2>trigger1){
                Object.assign(ucontent.style, {
                    scale : "1",
                    transition : "scale 1s, height 0.8s",
                    opacity : "0.9",
                    translateX : "200px"
                    
                   
                
                  
                })
            }
            else{
                Object.assign(ucontent.style, {
                    scale : "0.98",
                    transition : "scale 1s, height 0.8s",
                    opacity : "0.7",
                    border : "none",
                    outline : "none",
                    translateX : "-200px"
                    

                    
                })
                
            }
            

        })

        let s2cards = document.querySelectorAll(".s2-cards");

        
            
            

        
        
        
    
        
    })



    
if(localStorage.getItem("rlogin")==="true"){
    login.innerHTML = "log out";
    signin.style.display = "none";
    localStorage.removeItem("rlogin");
   }


login.addEventListener("click", ()=>{
   if(login.innerHTML=="log out"){
    login.innerHTML = "log in";
    signin.style.display = "block";
    alert("logging out");
    window.location.href = "page1.html";
    

   }

})

    
   
    
  
        
   
    
      



})





let containers = document.querySelectorAll(".u-content");


let btns = document.querySelectorAll(".btn1");


btns.forEach((btn)=>{
   
    btn.addEventListener("click", ()=>{
        const container = btn.closest(".u-content");


        if(btn.textContent === "read more"){
            btn.textContent = "read less";
            container.classList.add("u-content-after");
        }
        else{
            btn.textContent = "read more";
            container.classList.remove("u-content-after");
        }
    })


})


let btn3 = document.querySelectorAll(".r-more");


let cards = document.querySelectorAll(".s2-cards");







// that s2 cards appear annimation
btn3.forEach((btn)=>{

    btn.addEventListener("click", ()=>{

        const container = btn.closest(".s2-cards");
        const info = container.querySelector(".e-info");
        if(btn.textContent==="read more"){
            btn.textContent = "read less" ;
            Object.assign(container.style, {
                height : "1040px",
                overflow : "visible",
                transition: "height 0.6s ease-in",
                

            })

            info.style.opacity = "1";
            info.style.transition = "opacity 4s";


         }
         else{
             btn.textContent = "read more";
             Object.assign(container.style, {
                height : "700px",
                transition: "height 0.5s ease-in",
        
             })

             info.style.opacity = "0";
             info.style.transition = "opacity 1s";

           
         }
     })

    })



    // community feedback

    let btn = document.getElementById("btn-c");
    let thoughts = document.getElementById("thoughts");
    let comment = document.querySelectorAll(".comment");

    btn.addEventListener("click", (event)=>{
        event.preventDefault();
        let t = thoughts.value;

        comment[0].innerHTML = localStorage.username +": "+t; 
        
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
    






