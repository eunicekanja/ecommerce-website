'use strict'
const menuItems=document.querySelector('#menuItems');
menuItems.style.maxHeight='0px';

function menuToggle(){
    if(menuItems.style.maxHeight=='0px'){
        menuItems.style.maxHeight='200px'
    }
    else{
        menuItems.style.maxHeight='0px'
    }
}
const price=document.querySelector('.rating')
console.log(price)

const mainImage=document.querySelector('#mainImage')
const image4=document.querySelector('.image1')
const image1=document.querySelector('.image2')
const image2=document.querySelector('.image3')
const image3=document.querySelector('.image4')

image1.addEventListener('click',()=>{
    mainImage.src=image1.src
})
image2.addEventListener('click',()=>{
    mainImage.src=image2.src
})
image3.addEventListener('click',()=>{
    mainImage.src=image3.src
})
image4.addEventListener('click',()=>{
    mainImage.src=image4.src
})  
const qty=document.querySelector('#value')
console.log(qty)

//accounts toggle
const loginForm=document.querySelector('#LogIn')
const registerForm=document.querySelector('#Register')
const indicator=document.querySelector('#indicator')

function register(){
    const loginForm=document.querySelector('#LogIn')
    const registerForm=document.querySelector('#Register')
    const indicator=document.querySelector('#indicator')
    registerForm.style.transform='translateX(0px)'
    loginForm.style.transform='translateX(0px)';
    indicator.style.transform='translateX(80px)'
    indicator.style.width='80px'
}
function login(){
    const registerForm=document.querySelector('#Register')
    const loginForm=document.querySelector('#LogIn')
    const indicator=document.querySelector('#indicator')
    registerForm.style.transform='translateX(300px)'
    loginForm.style.transform='translateX(300px)'
    indicator.style.transform='translateX(0px)'
    indicator.style.width='60px'
}


const product={
    title:'Red polo shirt',
    price:'$100'
}

const cartPage=document.querySelector('.logo')
const addProduct=function(arr){
    const html=`
    <div class="col-4">
                <img src="images/product-1.jpg" alt="">
                <h4>${arr.title}</h4>
                <div class="rating">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="far fa-star"></i>
                </div>
                <p class='price'>${arr.price}</p>

            </div>
    `;
    
}
addProduct(product)
cartPage.insertAdjacentHTML('afterend','<p>hello you</p>')