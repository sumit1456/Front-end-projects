let form = document.querySelector("#c-form");
let btn = document.getElementById("sbtn");
let pname = document.getElementById("pname");
let pdesc = document.getElementById("pdesc");
let pimg = document.getElementById("pimg");







let ptech = document.getElementById("ptech");


form.addEventListener("submit", (e)=>{
    e.preventDefault();
    localStorage.setItem("trigger", "true")

  localStorage.setItem("pname", pname.value);
  localStorage.setItem("pdesc", pdesc.value);

  const file = pimg.files;
  
  

 
  
 


  console.log(localStorage.getItem("pname"));
  console.log(localStorage.getItem("pdesc"));
  console.log(localStorage.getItem("trigger"));
  
  
})

