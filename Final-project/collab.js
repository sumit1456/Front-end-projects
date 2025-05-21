console.log(localStorage.getItem("trigger"));



let postc = document.getElementById("post-container");


if(localStorage.trigger==="true"){
  
    localStorage.removeItem("trigger");

    const post = document.createElement("div");
    post.className = "post";

  

    post.innerHTML = `
      <div class="p-details">
        <h2>🔋 Project: ${localStorage.getItem("pname")}</h2>
        <p>${localStorage.getItem("pdesc")}</p>

        <ul>
          <strong>🛠️ Current Progress:</strong>
          <li>✅ Concept & initial research completed</li>
          <li>✅ Prototype model in development</li>
          <li>⏳ Testing phase expected in 2 months</li>
        </ul>

        <h4 class="r-more">read more</h4>
      </div>
      <div class="" id="pimg">
        <img src="" alt="">
      </div>
    `;
    postc.appendChild(post);

    let rimg = document.getElementById("pimg")

    rimg.setAttribute("src", "C:\Users\SUMIT\Pictures\Screenshots\Screenshot 2024-12-21 122459.png");


}



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
    

let btn = document.querySelectorAll(".r-more");
console.log(btn);


btn.forEach((btn)=>{
  btn.addEventListener("click", ()=>{

    const post = btn.closest(".post");    
    const details = btn.closest(".e-details")

    if(btn.innerHTML=="read more"){
      btn.innerHTML= "read less";
      Object.assign(post.style, {
        height : "640px",
        overflow : "visible",
      })
      details.style.display = "block";
      details.style.opacity = "1";
    }
    else{
      btn.innerHTML = "read more";
      Object.assign(post.style, {
        height : "340px",
        overflow : "hidden",
        
      })
      details.style.display = "none";
      details.style.opacity = "0";
    }
   

  })
})


window.addEventListener('scroll', ()=>{
  let post = document.querySelectorAll(".post");
  
  let position = post.getBou
  post.forEach((boxes)=>{
    let position = boxes.getBoundingClientRect().top;
    console.log(position);

    if(position<250 && position > -50){
     boxes.classList.add("post-after");
    }
    else{
     boxes.classList.remove("post-after");
    }
    
    
  })

})
