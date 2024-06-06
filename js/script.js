 // Aquí tu código
 const agregar = document.getElementById('agregar');
 const lista = document.getElementById('lista')

 agregar.addEventListener('click', function(){
    let ciudad = prompt('Introduce un nombre de ciudad')
    lista.insertAdjacentHTML('afterbegin', ('<li>' + ciudad + '</li>'))

 })

 