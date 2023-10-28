// [1- Decleration Function or Statement Function] --------------------------------------------

// Function without parameter ------------------------------------------------------------------
// Ex1:
// function summmm (){ //decrelation function
//     // Code
//     let m= 10;
//     let s = 5;
//     let result = m+s;

//     console.log(result);
// }
// summmm(); //Call or invoke



// Function parameter ------------------------------------------------------------------------------
// Ex1:
// function sum (x,y){ //decleration function
//     // Code
//     let num1= x;
//     let num2= y;
//     console.log(num1 + num2);
// }
// sum(20,20); //Call or invoke

// Ex2:
// function sayHello(userName){
//     console.log(`Hello ${userName}`);
// }
// sayHello(`MaHer`);

// Ex3:
// function getPrice(price , ads , taxs){
//     let price1 = price + ads;
//     let price2 = price1 * taxs;
//     console.log(price2);
// }
// getPrice(1000,200,4);
// getPrice(3000,250,5)


// function return statement ---------------------------------------------------------------------
// Ex1:
// function sum(x , y){
//     let result = x + y;
//     return result
// }
// let m = sum(10,20)
// let result2 = m*10;
// console.log(result2);


// [2- Expression Function] -----------------------------------------------------------------------

// let sum = function(x,y){ 
//     // Code
//     let num1= x;
//     let num2= y;
//     console.log(num1 + num2);
// }
// sum(20,20); //Call or invoke


// [3- Self Invoked Function] --------------------------------------------------------------------


// (function(){
//     console.log(`Hello`);
// })();


// Scope -------------------------------------------------------------------------------------------

// [1- Global Scope ]--------------------------

// let userName = `MaHer`

// function sayHello(){
//     console.log(userName);
// }
// sayHello();

// [2- Function Scope ] -----------------------------------------------------------------------------

// function sayHello(){
//     let myName = `Maher`; //Local Scope
//     console.log(myName);
// }
// sayHello();

//[3- Block Scope ] --------------------------------------------------------------------------------

 //el var global f ay mkan ma3da el function let w const L2

// let x = 5;
// if( x > 2 ){
//     let userName = `MaHer`;
// }
// console.log(userName);

// Ex1: Function --------------------------------------------------------------------------------

                                 // Home \\
// let cartona1 = ``;
// for (let index = 0; index < 20 ; index++){
//     cartona1 +=`
//     <h3>Hello Home</h3>`
// }
// document.getElementById(`home`).innerHTML = cartona1;

                                 // About \\
// let cartona2 = ``;
// for (let index = 0; index < 20 ; index++){
//     cartona2 +=`
//     <h3>Hello About</h3>`
// }
// document.getElementById(`about`).innerHTML = cartona2;

                                 // Contact \\
// let cartona3 = ``;
// for (let index = 0; index < 20 ; index++){
//     cartona3 +=`
//     <h3>Hello Contact</h3>`
// }
// document.getElementById(`contact`).innerHTML = cartona3;


// function addData(elementName,number,tagElement){
//     let cartona = ``;
//     for (let index = 0; index < number ; index++){
//     cartona += tagElement;
// }
// document.getElementById(elementName).innerHTML = cartona;
// }
// addData(`home`,50,`<h3>Hello Home</h3>`);
// addData(`about`,20,`<h3>Hello About</h3>`);
// addData(`contact`,10,`<h3>Hello Contact</h3>`);

// Project1 CRUDS --------------------------------------------------------------------------------

let productNameInput = document.getElementById(`productName`);
let productPriceInput = document.getElementById(`productPrice`);
let productCatInput = document.getElementById(`productCategory`);
let productDescInput = document.getElementById(`productDescription`);
let searchInput = document.getElementById(`search`);
let addBtn = document.getElementById(`addBtn`);
let updateBtn = document.getElementById(`updateBtn`);
let indexUpdate = 0;

let productContainer = [];


if(localStorage.getItem(`Products`) != null){
    productContainer =JSON.parse(localStorage.getItem(`Products`));
    displayData();
}



// Create
function addProducts(){
    let product = {
        productName : productNameInput.value,
        productPrice : productPriceInput.value,
        productCat : productCatInput.value,
        productDesc : productDescInput.value
    }
    productContainer.push(product);  
    localStorage.setItem(`Products`,JSON.stringify(productContainer));
    displayData(); 
    remove();
}

// Display
function displayData(){
    let cartoona = '';
    for (let i = 0; i < productContainer.length; i++) {
        cartoona += `
        <tr>
        <td>${productContainer[i].productName}</td>
        <td>${productContainer[i].productPrice}</td>
        <td>${productContainer[i].productCat}</td>
        <td>${productContainer[i].productDesc}</td>
        <td>
            <button class="btn btn-outline-warning btn-sm" onclick = "setData(${i})">Update</button>
            <button class="btn btn-outline-danger btn-sm" onclick ="deleteProduct(${i})">Delete</button>
        </td>
    </tr>`   
    }
    document.getElementById(`tableBody`).innerHTML = cartoona;
}


// Delete
function deleteProduct(i){
    productContainer.splice(i,1);
    localStorage.setItem(`Products`,JSON.stringify(productContainer));
    displayData()
}


// Search >> display m3molo filter
function searchProduct(){
    let term = searchInput.value;
    let cartoona = '';
    for (let i = 0; i < productContainer.length; i++) {

        if(productContainer[i].productName.toLowerCase().includes(term.toLowerCase())){
        cartoona += `
        <tr>
        <td>${productContainer[i].productName}</td>
        <td>${productContainer[i].productPrice}</td>
        <td>${productContainer[i].productCat}</td>
        <td>${productContainer[i].productDesc}</td>
        <td>
            <button class="btn btn-outline-warning btn-sm">Update</button>
            <button class="btn btn-outline-danger btn-sm" onclick ="deleteProduct(${i})">Delete</button>
        </td>
    </tr>` 
        }  
    }
    document.getElementById(`tableBody`).innerHTML = cartoona;
}

// Update
function setData(i){
    indexUpdate = i;  

    // Set Data
    let currentProduct = productContainer[i];
    productNameInput.value = currentProduct.productName;
    productPriceInput.value = currentProduct.productPrice;
    productCatInput.value = currentProduct.productCat;
    productDescInput.value = currentProduct.productDesc;

    updateBtn.classList.remove(`d-none`);
    addBtn.classList.add(`d-none`);
}

function updateProduct(){
    let product = {
        productName : productNameInput.value,
        productPrice : productPriceInput.value,
        productCat : productCatInput.value,
        productDesc : productDescInput.value
    }
    productContainer.splice(indexUpdate,1,product)
    localStorage.setItem(`Products`,JSON.stringify(productContainer));
    displayData()
    updateBtn.classList.add(`d-none`);
    addBtn.classList.remove(`d-none`);
    remove()
}

// Remove data after update
function remove(){
    productCatInput.value = ``;
    productDescInput.value = ``;
    productNameInput.value = ``;
    productPriceInput.value = ``;
}



















