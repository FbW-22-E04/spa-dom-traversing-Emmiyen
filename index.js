const headingH1 = document.querySelector('.heading')
const headerParent = headingH1.closest('header')

headerParent.style.border= '5px solid black'

console.log(headerParent);


const info = document.querySelector('.info')
const infoPackage = document.querySelector('.info-package')
const packageTitle = document.querySelectorAll('.package-title')

if (info.contains(infoPackage)) {
    packageTitle.forEach((item) =>{
        item.previousElementSibling.style.border ='2px slid red'
    })
}

const label = document.querySelectorAll('label')

label.forEach((item) =>{
    if(item.matches('.mild')){
        item.style.border= '2px solid yellow'
    }else if(item.matches('.intense')){
        item.style.border ='2px solid orange'
    }else{
        item.style.border = '2px solid red'
    }
})




// // console.log(label);
// const navList =document.querySelector('.nav-list')
// const sideMap = document.querySelector('.side-map')

// Array.from(navList.children).forEach((item)=>{
//     sideMap.clo(item)
// })

//clone Method 

const navList =document.querySelector('.nav-list')
const navListClone = navList.cloneNode(true)
const sideMap = document.querySelector('.side-map')


Array.from(navListClone.children).forEach(((item)=>{
    sideMap.appendChild(item)
}))