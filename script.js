var div=document.querySelector("#div")
var btn=document.querySelector("#btn")
function randomColor(){
    var str="0123456789abcdef"
    var color="#"
    for(let i=0;i<6;i++){
        color+=str[Math.floor(Math.random()*16)]
    }
    return color
}
btn.addEventListener("click",function(){
    div.style.background=randomColor()
})