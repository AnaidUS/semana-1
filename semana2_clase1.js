//Hugo, Paco y Luis tienen una cantidad desconocida de monedas cada uno

//Sabemos que Paco tiene el doble de Monedas que Hugo y que Luis tiene 10 monedas más que Paco

//Si los tres juntos tienen un total de 85 monedas

//¿Cuantas monedas tiene cada uno?

let hugo = 0;

let paco = 2 * hugo;
let luis = paco + 10;

let total= hugo + paco + luis;

if (total === 85){
    console.log({hugo, paco, luis});
}

//total = hugo +(2*hugo) + (2*hugo+10)


//objeto humano que me represente

const humano = {
    name:"Anaid",
    lastname: "Urióstegui",
    age: 34,
    blonde:true
};

console.log(humano);