// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos =[];

function agregarAmigo() {
    let nombreAmigo = document.getElementById('amigo').value;
    if (nombreAmigo === "") {
        alert('Por favor, inserte un nombre');
        return;
    }else{
        amigos.push(nombreAmigo);
        limpiarCaja();
        mostrarLista();
    }
    
}

function limpiarCaja(){
    document.getElementById('amigo').value = '';
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert('No hay amigos en la lista');
        return;
    }else{
        let aleatorio = Math.floor(Math.random()* amigos.length);
        let amigoSeleccionado = amigos[aleatorio];

        document.getElementById('resultado').innerHTML = `El amigo sorteado es: ${amigoSeleccionado}`;
        
    }
}

function mostrarLista() {
    let listaDeAmigos = document.getElementById('listaAmigos');
    listaDeAmigos.innerHTML ='';

    for (let i = 0; i < amigos.length; i++) {
        let li = document.createElement('li');

        li.textContent = amigos[i];
        listaDeAmigos.appendChild(li);
        
    }
    
}


