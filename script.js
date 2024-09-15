

let reset = document.getElementById("rest-button")
let square = document.getElementById("container")
let width_input = document.getElementById("width-input")
let height_input = document.getElementById("height-input")
let submit_dems = document.getElementById("submit")

let r = document.getElementById("color-r")
let g = document.getElementById("color-g")
let b = document.getElementById("color-b")
let tilt = document.getElementById("transform")


square.style.width="40%"
square.style.height="30%"
square.style.backgroundColor="blue"

reset.addEventListener("click", (e)=>{
    e.preventDefault()
    square.style.width="40%"
    square.style.height="30%"
 
    square.style.backgroundColor="blue"
    square.style.transform=`rotate(0deg)`
   
  
})


submit_dems.addEventListener("click", (e)=>{
    e.preventDefault()

square.style.width=width_input.value + "%"
square.style.height=height_input.value + "%"


square.style.backgroundColor=`rgb(${r.value},${g.value},${b.value})`
square.style.transform=`rotate(${tilt.value}deg)`
   
  
})