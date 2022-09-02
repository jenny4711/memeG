// call url form and btn
const formBtn =document.querySelector('.memeBtn')
// call output
const bigDiv =document.querySelector('.big-Div')
// tools
const colorsTextS =document.querySelector('.textCl')
const colorsBackG =document.querySelector('.backgroundCl')

formBtn.addEventListener('click',memeBtn)


function memeBtn(e){
e.preventDefault()
const inputText =document.querySelector('.topT')
const inputTextB = document.querySelector('.btmT')
const putUrl = document.querySelector('.img')

const makeTtext =document.createElement('div'); 
const makeBtext =document.createElement('div')
const makeImg =document.createElement('img')
const makebigDiv =document.createElement('li')


makebigDiv.classList.add('makeDiv')
makeTtext.classList.add('top','text')
makeBtext.classList.add('bottom','text')


// Top Text
makeTtext.innerText=inputText.value
inputText.value =''

// Url Img
makeImg.src =putUrl.value
putUrl.value =''

// Bottom Text
makeBtext.innerText=inputTextB.value
inputTextB.value =''
    
makebigDiv.append(makeImg)
makebigDiv.append(makeTtext)
makebigDiv.append(makeBtext)
bigDiv.append(makebigDiv)


// function
function textColor(e){
  console.log(e.target.dataset.hex)
  console.log(e.target)

  const makebigDivA1 = document.querySelectorAll('.makeDiv')
  for(let i = 0 ; i< makebigDivA1.length; i++){
    makebigDivA1[i].style.color=e.target.dataset.hex
   
    console.log(makebigDivA1[i])
}
}

function backColor(e){
  const makeTextB = document.querySelectorAll('.text')
  console.log(makeTextB)
for(let i= 0; i<makeTextB.length;i++){
  console.log(makeTextB[i])
    makeTextB[i].style.backgroundColor =e.target.dataset.hex
    
}
}

makebigDiv.addEventListener('click',removeBtn) 
colorsTextS.addEventListener('click',textColor)
colorsBackG.addEventListener('click',backColor)
}

function removeBtn(e){
e.preventDefault()
if(e.target.tagName ==='IMG'){
e.target.parentElement.remove()
}
}














  
  
 


  
  





