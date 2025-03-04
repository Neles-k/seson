const warm=document.getElementById("warm")
const snow=document.getElementById("snow")
const bird=document.getElementById("bird")
const water=document.getElementById("water")
const priznaki=document.getElementById("priznaki")

warm.addEventListener("click", function(){
    setTimeout(function(){
        priznaki.style.background="radial-gradient(pink,rgb(211, 170, 208))"
    },1000)
})
snow.addEventListener("click", function(){
    setTimeout(function(){
        priznaki.style.background="radial-gradient(blue,rgb(211, 170, 208))"
    },1000)
})
bird.addEventListener("click", function(){
    setTimeout(function(){
        priznaki.style.background="radial-gradient(red,rgb(211, 170, 208))"
    },1000)
})
water.addEventListener("click", function(){
    setTimeout(function(){
        priznaki.style.background="radial-gradient(green,rgb(211, 170, 208))"
    },1000)
})
