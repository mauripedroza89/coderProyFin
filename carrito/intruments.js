let carts = document.querySelectorAll('.add-cart');

let productos = [
    {
        name:"Guitarra Fender",
        tag: "guitarrafender",
        price: 8000,
        inCart: 0
    },
    {
        name:"Guitarra Gibson",
        tag: "guitarragibson",
        price: 10000,
        inCart: 0
    },
    {
        name:"Guitarra Ibanez",
        tag: "guitarraibanez",
        price: 6000,
        inCart: 0
    },
    {
        name:"Bateria Pearl",
        tag: "bateriapearl",
        price: 18000,
        inCart: 0
    }
]

for (let index = 0; index < carts.length; index++) {
        carts[index].addEventListener('click', () => {
            carroNumeros(productos[index]);
            costoTotal(productos[index])
        })
}

function onLoadCartNumbers(){
    let prodsNumeros = localStorage.getItem('carroNumeros');

    if(prodsNumeros){
        document.querySelector('.cart span').textContent = prodsNumeros;

    }
}

function carroNumeros(productos){
    let prodsNumeros = localStorage.getItem('carroNumeros');
    
    prodsNumeros = parseInt(prodsNumeros);

    if( prodsNumeros){
        localStorage.setItem('carroNumeros', prodsNumeros + 1);
        document.querySelector('.cart span').textContent = prodsNumeros + 1;


    }else {
        localStorage.setItem('carroNumeros', 1);
        document.querySelector('.cart span').textContent = 1;

    }

    setItems(productos);
}

function setItems(productos){
    let cartItems = localStorage.getItem("productosEnCarro");
    cartItems = JSON.parse(cartItems);

  if(cartItems != null){

    if( cartItems[productos.tag] == undefined){
        cartItems = {
            ...cartItems,
            [productos.tag]: productos
        }
    }
      cartItems[productos.tag].inCart += 1;
  }else{
        productos.inCart = 1;

        cartItems = {
            [productos.tag]: productos
        }  
  }
    

    productos.inCart = 1;
    localStorage.setItem("productosEnCarro", JSON.stringify(cartItems))
}

//calcular costo total
function costoTotal(productos){
    //console.log("El precio de los productos es", productos.price);
    let cartCost = localStorage.getItem("costoTotal");
        console.log("Mi cartCost es",cartCost);

        if(cartCost != null){
            cartCost = parseInt(cartCost);
            localStorage.setItem("costoTotal", cartCost + productos.price);
        }else{
            localStorage.setItem("costoTotal",productos.price);
        }

   
}

//imprimiendo localstorage en el carrito
function displayCart(){
    let cartItems = localStorage.getItem("productosEnCarro");
    cartItems = JSON.parse(cartItems);
    let productContainer = document.querySelector(".products");
    let cartCost = localStorage.getItem("costoTotal");


    
    if(cartItems && productContainer){
            productContainer.innerHTML = '';
            Object.values(cartItems).map(item => {
                productContainer.innerHTML += `
                <div class="product" >
                    <ion-icon name="close-circle-outline"></ion-icon>
                    <h5 class="product-title">${item.name}</h5>
                
                <h5 class="price">$${item.price}</h5>
                <h5 class="quantity">
                ${item.inCart}
                </h5>
                <h5 class="total">$${item.inCart * item.price}</h5>
                </div>

                
                `
            });

            productContainer.innerHTML += `
                    <div class="basketTotalContainer">
                    <h4 class="basketTotalTitle">
                        Total a comprar
                    </h4>
                    <h4 class="basketTotal">
                        $${cartCost}
                    </h4>

            `
    }
}



onLoadCartNumbers()
displayCart();

const btn = document.querySelectorAll('.add-cart');

btn.addEventListener('click', () => {
    Swal.fire({
        title: 'Agregado al carrito!',
        text: 'Gracias por tu compra',
        imageUrl: 'https://w7.pngwing.com/pngs/404/687/png-transparent-musical-instruments-mandolin-electronic-keyboard-cello-musical-instruments-logo-violin-drum.png',
        imageWidth: 400,
        imageHeight: 300,
        imageAlt: 'Custom image',
      })
}) 

const btn2 = document.getElementById('suscribirse')
btn2.addEventListener('click', () => {
    Swal.fire ({
        title: 'Gracias por suscribirte',
        text: 'Recibiras ofertas de instrumentos semanalmente',
        icon:'success',
        confirmButtonText: 'Continuar'
    })
}) 
