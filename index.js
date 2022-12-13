let body=document.querySelector('.body');
let btn=document.querySelector('.btn');
let colorName=document.querySelector('.color-name');
let colors=['Red','Green','Blue','Yellow','Purple','#964B00','#808080','Pink','Olive','Violet','Magenta','#FFFDD0','#FFD700','#000080','Mauve','Lavender','Cyan','Turquoise','#FFBF00','Mint'];

btn.addEventListener('click',function(){
    const randomNumber=Math.floor(Math.random()*colors.length);
    body.style.backgroundColor=colors[randomNumber];
    colorName.textContent=colors[randomNumber];
})
