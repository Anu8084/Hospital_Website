let doctors = document.querySelectorAll(".team");
let card = document.querySelectorAll(".serviceCard");

let count = 0;

doctors.forEach(function(card, index){
    card.style.left=`${index*100}%`
})

function myFun(){
    doctors.forEach(function(curValue){
        curValue.style.transform=`translateX(-${count * 100}%)`
    })
}

setInterval(function(){
    count++;
    if(count == doctors.length){
        count=0;
    }
    myFun()
}, 3000)


// service Card

card.forEach(function(curCard){
    curCard.addEventListener("click", function(){
        console.log(curCard);
        let div = document.createElement("div");
        div.classList.add("detailCard");
        div.innerHTML=`
        <i id="icon" class="fa-solid fa-xmark"></i>
        <img src=${curCard.firstElementChild.src} alt="">
        <h2>${curCard.lastElementChild.innerHTML}</h2>
        <p>With the help of advanced instruments and equipments we do all type of medical test with taking utmost safety priority</p>   
        `
        document.querySelector("body").appendChild(div);
        document.querySelector("#icon").addEventListener("click", function(){
            div.remove()
        })
    })
})