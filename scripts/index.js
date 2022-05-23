//store the products array in localstorage as "products"
function NewProduct(type,desc,price,image) {
    this.type = type;
    this.desc = desc;
    this.price = price;
    this.image = image;
}
// Getting the arraay from the local storage
let productArr = JSON.parse(localStorage.getItem("products")) || [];

// Adding products
function addProduct(event) {
    event.preventDefault();

    let form = document.getElementById("products");

    let type = form.type.value;
    let desc = form.desc.value;
    let price = form.price.value;
    let image = form.image.value;
// Creating new objects using form values
    let newProduct =  new NewProduct(type,desc,price,image);

    productArr.push(newProduct);
    // Pushing the object array in local storage
    localStorage.setItem("products",JSON.stringify(productArr));
    
    // Resetting the form input values
    form.reset(); 
}