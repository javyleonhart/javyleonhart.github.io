
function spoiler1(){
    let x = document.getElementById("lista1")
    if (x.style.display === "block") {
        x.style.display = "none"
      } else {
        x.style.display = "block"
      }
    }


function spoiler2(){
let x = document.getElementById("pabout")
if (x.style.display === "block") {
    x.style.display = "none"
  } else {
    x.style.display = "block"
  }
}



document.getElementById("dtema").addEventListener("click",function() {
   document.body.style.color = "white"
   document.body.style.backgroundImage = "url(https://img.freepik.com/free-vector/dark-low-poly-background_1048-7971.jpg?w=2000)"
   document.getElementById("dtema").style.display = "none"
   document.getElementById("ltema").style.display = "block"
   console.log("Cambiaste a modo oscuro!")
});

document.getElementById("ltema").addEventListener("click",function() {
  document.body.style.color = "black"
  document.body.style.backgroundImage = "url(https://i.pinimg.com/originals/47/70/cf/4770cf05fe96befcdcd74204ba533198.jpg)"
  document.getElementById("dtema").style.display = "block"
  document.getElementById("ltema").style.display = "none"
  console.log("Cambiaste a modo claro!")
});