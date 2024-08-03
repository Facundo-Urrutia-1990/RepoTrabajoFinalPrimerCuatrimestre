

let lista = document.getElementById("lista");
const productos = ["leche", "bifeDeCerdo", "quesoAzul", "tomateEnRama", "yerba", "azucar", "cafe", "dulceDeLeche",
    "crema", "fideos"];
const precios = [1500, 5000, 4000, 1500, 3800, 1000, 9900, 2300, 2700, 2000];
let stock = [10, 20, 5, 10, 30, 20, 4, 8, 10, 15];



function listaProductos(arrayProductos, arrayPrecios, arrayStock) {
    for (let i = 0; i < arrayProductos.length; i++) {
        let li = document.createElement("li");
        let div = document.createElement("div")
        let input = document.createElement("input")
        let texto = document.createTextNode(`${arrayProductos[i]} -  $${arrayPrecios[i]} -  
            stock:     ${arrayStock[i]}     `);
        let imagen = document.createElement("img")



        li.appendChild(texto)
        li.appendChild(input)
        div.appendChild(li)
        div.appendChild(imagen)
        lista.appendChild(div)
        div.setAttribute("class", arrayProductos[i])
        input.type = "number"
        input.setAttribute("id", "input" + [i])


    }

}


listaProductos(productos, precios, stock);


let totalAPagar = 0;
for (let i = 0; i < stock.length; i++) {
    let input = document.getElementById("input" + [i]);
    input.addEventListener("keyup", (e) => {
        e.preventDefault();

        let cantAComprar = document.querySelector("#input" + [i]).value;
        if (cantAComprar > stock[i]) {
            document.querySelector("#input" + [i]).value = 0;
            document.querySelector("#input" + [i]).classList.add("error")
            alert("Stock insuficiente");
        } else {
            document.querySelector("#input" + [i]).classList.remove("error")

            let sumaParcial = cantAComprar * precios[i]
            totalAPagar += sumaParcial
            document.getElementById("sumTot").innerHTML = "TOTAL A PAGAR $ " + totalAPagar

            if (cantAComprar < 0) {
                document.querySelector("#input" + [i]).value = 0;
            }

        }
    })
}


