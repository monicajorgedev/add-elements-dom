 // Aquí tu código
 const agregar = document.getElementById('agregar');
 const lista = document.getElementById('lista')

 agregar.addEventListener('click', function(){
    const ciudad = prompt('Introduce un nombre de ciudad')
    lista.insertAdjacentHTML('beforeend', ('<li>' + ciudad + '</li>'))
    
 })

 
 

 /*const agregar = document.getElementById('agregar');
 const lista = document.getElementById('lista')

 agregar.addEventListener('click', function(){

    const ciudad = prompt('Introduce un nombre de ciudad')
    const li = document.createElement('li')
    li.textContent = ciudad;
    lista.appendChild(li)
    
 }) */