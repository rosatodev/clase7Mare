class Hamburguer{
    constructor(nombre, stock, combo, id){
        this.nombre = nombre;
        this.stock = stock;
        this.combo = combo;
        this.id = id;
    }
}





function mostrarHamburguesas(){
    
    const target = document.getElementById('target');

    for (let i = 0; i < hamburguers.length; i++){
        
        let hamburguesas = document.createElement('p');

        let strHamburguesa = +
        "<hr>Hamburguesa: " + hamburguers[i].nombre + 
        "<br>Stock: " + hamburguers[i].stock + 
        "<br>Combo: " + hamburguers[i].combo + 
        "<br>ID: " + hamburguers[i].id + "<hr>";

        hamburguesas.innerHTML = strHamburguesa;
        newDiv.appendChild(hamburguesas);

        target.appendChild(newDiv);
    }
}














let hamburguers = [];

hamburguers.push(new Hamburguer('Triple Bacon','10','Carne, Queso, Pan','1'));
hamburguers.push(new Hamburguer('Doble Bacon','15','Carne, Queso, Pan, Bacon','2'));
hamburguers.push(new Hamburguer('Simple','5','Carne, Queso, Pan','3'));
hamburguers.push(new Hamburguer('Doble Queso','10','Carne, Queso, Pan','4'));
hamburguers.push(new Hamburguer('Doble Carne','10','Carne, Queso, Pan','5'));

let inventario = localStorage.setItem('hambuguers', JSON.stringify(hamburguers));

if (inventario !== null){
    mostrarHamburguesas();

    let salida = prompt("Ingrese el combo de una hamburguesa");

    for (let index = 0; index < hamburguers.length; index++){
        if(salida === hamburguers[index].id){
            alert(hamburguers[index].nombre + ": " + hamburguers[index].stock)
        }
    }

}else{
    alert("INVENTARIO VACIO BEBE");
}

