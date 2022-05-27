
/* element.addEventListener("click", subs);
function subs() {
   document.getElementById("suscribirse").innerHTML =  alert("gracias por suscribirte");
} */

const btn = document.getElementById('suscribirse')
btn.addEventListener('click', () => {
    Swal.fire ({
        title: 'Gracias por suscribirte',
        text: 'Recibiras ofertas de instrumentos semanalmente',
        icon:'success',
        confirmButtonText: 'Continuar'
    })
}) 

//buscador
function myFunction() {
    // Declare variables
    let input, filter, tr, td, a, i, txtValue;
    input = document.getElementById('buscador');
    filter = input.value.toUpperCase();
    tr = document.getElementById("mytr");
    td = tr.getElementsByTagName('td');

    for (i = 0; i < td.length; i++) {
        a = td[i].getElementsByTagName("td")[0];
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          td[i].style.display = "";
        } else {
          td[i].style.display = "none";
        }
      }
    }



//Lista mostrada en html
const lista = document.querySelector("#lista");

const printLista = async () => {
    const resp = await fetch('./instrumentos.json');
    const data = await resp.json();

    data.forEach(post =>{
        let li = document.createElement("tr");

        li.innerHTML = `  <tr>
                <th scope="row">${post.id}</th>
                <td>${post.instrumento}</td>
                <td>${post.marca}</td>
                <td>$${post.precio}</td>
                <td><img class="image" src="${post.img}"></td>
                
`;

            lista.appendChild(li);
    })
}

printLista()




//Sino agregamos instrumentos nuevos, procedemos a hacer una compra con el inventario existente
//let nombre = prompt("Ingrese su nombre para el pedido.");



