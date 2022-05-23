
let products = JSON.parse(localStorage.getItem("products")) || [];

// console.log(products)
display(products);

function display(products) {
    products.map(function(elem,idx) {
        // Box
        let box = document.createElement("div");
        box.setAttribute("class","box");

        // Images
        let img = document.createElement("img");
        img.src = elem.image;

        // Type
        let type = document.createElement("h2");
        type.textContent = elem.type;

        // Desc
        let desc = document.createElement("h2");
        desc.textContent = elem.desc;

        // Price
        let price = document.createElement("h2");
        price.textContent = elem.price;


        // Remove button
        let btn = document.createElement("button");
        btn.setAttribute("id","remove_product");

        btn.textContent = "Remove";
        
        btn.addEventListener("click", function() {
            console.log(idx)
            remove(idx);
        });

        // Appending in box
        box.append(img,type,desc,price,btn);

        // Appending in body

        let mainBody = document.getElementById("all_products");
        mainBody.append(box);
    })
}

   // Remove function

   function remove(index) {
    products.splice(index,1);
    localStorage.setItem("products",JSON.stringify(products));
    window.location.reload();   
}