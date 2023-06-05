var lButton=document.getElementById("left")
var rButton=document.getElementById("right")
const imagesUrl = ["https://wallpaperaccess.com/full/1940042.jpg"
,"https://wallpaperaccess.com/full/1940043.jpg"
,"https://wallpaperaccess.com/full/1940051.jpg"
,"https://wallpaperaccess.com/full/1940053.jpg"
,"https://wallpaperaccess.com/full/1940058.jpg"
,"https://wallpaperaccess.com/full/1940060.jpg"
,"https://wallpaperaccess.com/full/1940072.jpg"
,"https://wallpaperaccess.com/full/1940091.jpg"
,"https://wallpaperaccess.com/full/1940132.png"
,"https://wallpaperaccess.com/full/1940155.jpg"
,"https://wallpaperaccess.com/full/1940208.jpg"
,"https://www.grenzhof.de/wp-content/uploads/2020/10/grenzhof-restaurant-heidelberg-1200x800px.jpg"
,"https://www.grenzhof.de/wp-content/uploads/2017/07/biergarten-heidelberg-grenzhof-1200x800.jpg"
,"https://cdn.scratchmagazine.co.uk/wp-content/uploads/2021/11/EMMA-Web-featured-image-1200x800px-2021-11-10T094934.925.jpg","https://www.soc-botanical-artists.org/wp-content/uploads/Nicola-Lynch-Morrin-Exhibition-1200x800px.png"
,"https://chalmersventures.com/app/uploads/2020/05/Bottom-left-banner-Stayble-1200x800px.png"
,"https://rustler.eu/wp-content/uploads/2020/05/Smart-Manager-PC-1200x800px.png"]
var list=[]
var minilist =[]
var counter=0
var y = ""
var x ="translateX(-1200px)"


function right(){ 
    if (counter<list.length-1) {
    list[counter].style.transform= x ;
    counter++
    setmins()
}
}

function left(){
    if (0<=counter-1){
    list[counter-1].style.transform= y ;
    counter--
    setmins()}
}

async function checkMiniDirection(num) {
    con = counter
    if (counter>num){
        for (let j= 0 ; j < con-num ;j++){
            left()
            await sleep(0.2)
        }
    }else{
        for (let j= 0 ; j < num-con ;j++){
            right()
            await sleep(0.2)
        } 
    }
}

function setmins(){
    minilist.forEach((element , index)=>{
        element.style.opacity = counter == index ?"10" : "0.7"
        element.style.border =counter== index ? "4px solid white" : "0"
        element.style.transform=`translateX(calc(${window.getComputedStyle(document.querySelector(".section")).width} / 2
         - ${window.getComputedStyle(document.querySelector(".minislider >*")).width} / 2  
         - (  ${window.getComputedStyle(document.querySelector(".minislider >*")).width} * ${counter} ) 
         -  ${window.getComputedStyle(document.querySelector(".minislider >*")).marginRight} * ${counter}))`
        })
}
lButton.addEventListener("click",()=>{
    lButton.style.backgroundColor = "rgba(29, 29, 29, 0.507)";
    setTimeout(() => {
        lButton.style.backgroundColor = "transparent";
    }, 200);
    left()
})
rButton.addEventListener("click",()=>{
    rButton.style.backgroundColor = "rgba(29, 29, 29, 0.507)";
    setTimeout(() => {
        rButton.style.backgroundColor = "transparent";
    }, 200);
    right()
})
for(let i =0 ; i<imagesUrl.length ; i++){
    let e =document.createElement("div")
    e.id =  `d${i}`
    e.style.backgroundImage = `url(${imagesUrl[i]})`
    e.style.zIndex =`${imagesUrl.length -i}` ;
    document.querySelector(".section").appendChild(e)
    list.push(e)
}
for(let i =0 ; i<imagesUrl.length ; i++){
    let e = document.createElement("div")
    e.id = `d${i}mini`
    e.style.width = parseFloat(window.getComputedStyle(document.querySelector(".minislider")).height) +"px"
    document.querySelector(".minislider").appendChild(e)
    minilist.push(e)
}
minilist.forEach((element ,index)=>{
    element.addEventListener("click" ,checkMiniDirection.bind(null ,index));
    element.style.backgroundImage = `url(${imagesUrl[index]})`
})

function sleep(s){
    return new Promise(resolve =>setTimeout(resolve , 1000 * s))
}
setmins()
