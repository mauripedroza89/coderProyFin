function signup(e){
    event.preventDefault();



let username = document.getElementById('username').value;
let password = document.getElementById('password').value;

let user = {
    username:username,
    password:password
};

if(!(username === '' && password === '')){
    let json = JSON.stringify(user);
localStorage.setItem(user, json);
console.log("user logged");
}else{
    alert("Ingrese usuario y password")
}


}

function loginFunc(e){
    event.preventDefault();

let username = document.getElementById('username').value;
let password = document.getElementById('password').value;
let result = document.getElementById('result');

let user = localStorage.getItem(username);
let data = JSON.parse(user);
console.log(data)



}

const btn = document.querySelector('#button')
btn.addEventListener('click', () => {
    Swal.fire ({
        title: 'Bienvenido',
        text: 'Haz iniciado sesion',
        icon:'success',
        confirmButtonText: 'Continuar'
    })
}) 

document.getElementById("button").onclick = function(){
  onclick = setTimeout(function(){location.href = '/store/index.html'}, 3000) 
}

