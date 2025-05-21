let icons = document.querySelectorAll(".icons");
let cards = document.querySelectorAll(".cards");



document.addEventListener("click", (e) => {
    if (e.target.classList.contains("icons")) {

        let p = e.target.closest(".details");
        let card = e.target.closest(".cards");
        let data = p.textContent;
        console.log(data);
        p.style.display = "none";

        let ip = document.createElement("input");
        Object.assign(ip.style, {
            with : "150px",
            backgroundColor : " rgb(15, 19, 24)"
        })
        card.appendChild(ip);
        ip.focus();

        ip.addEventListener("keypress", (event)=>{

            if(event.key === "Enter" || event.focus()===false){
                let newdata = ip.value;

                ip.style.display = "none";
                p.style.display = "block";
                p.innerHTML = `<i class="fa-solid icons fa-pen-to-square" style="color:  #0dbfcf;"></i> ${newdata}`;

            }
           
            
        })




       


        
        
       
        
    }
});




