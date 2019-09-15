let blackTheme = "https://lassie-coder.000webhostapp.com/my_image/watch2.jpg"
let peachTheme = "https://lassie-coder.000webhostapp.com/my_image/watch3.jpg"
let blueTheme = "https://lassie-coder.000webhostapp.com/my_image/watch1.jpg"
let purpleTheme = "https://lassie-coder.000webhostapp.com/my_image/watch4.jpg"

let watch = document.getElementById('imagewatch')

let black = document.getElementById('black')
let peach = document.getElementById('peach')
let blue = document.getElementById('blue')
let purlpe = document.getElementById('purlpe')


let heartBeatBtn = document.getElementById('showHeartBeat')
let heartBeatRate = document.getElementById('heartRate')




let showTimeBtn = document.getElementById('showTime')
let showCurrrentTime = document.getElementById('currentTime')


if(watch != null)
{
  black.onclick = function() 
  {
    watch.src = blackTheme;
  }
}
if(watch != null)
{
  peach.onclick = function() 
  {
    watch.src = peachTheme;
  }
}
if(watch != null)
{
  blue.onclick = function() 
  {
    watch.src = blueTheme;
  }
}
if(watch != null)
{
  purple.onclick = function() 
  {
    watch.src = purpleTheme;
  }
}




if(watch != null)
{
  black.onclick = function() 
  {
    watch.src = blackTheme;
  }
}
if(watch != null)
{
  peach.onclick = function() 
  {
    watch.src = peachTheme;
  }
}
if(watch != null)
{
  blue.onclick = function() 
  {
    watch.src = blueTheme;
  }
}
if(watch != null)
{
  purple.onclick = function() 
  {
    watch.src = purpleTheme;
  }
}




function settime () 
{
  var today = new Date()
  document.getElementById('currentTime').innerHTML = today.getHours() +":"+ today.getMinutes() +":"+ today.getSeconds()
  setTimeout(function(){settime()}, 1000)
}
settime();



let randomNum = document.getElementById('hbNumber')

function randomNumber () 
{
  randomNum.innerHTML = Math.floor(Math.random() * 45) + 70
  console.log(randomNum.innerHTML)
}
randomNumber();


heartBeatBtn.onclick = function()
{
  heartBeatRate.style.display = 'block'
  showCurrrentTime.style.display = 'none'
}

showTimeBtn.onclick = function()
{
  heartBeatRate.style.display = 'none'
  showCurrrentTime.style.display = 'block'
}
