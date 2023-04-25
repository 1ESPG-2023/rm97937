// for (let index = 0; index < liElement.length; index++) {
//     console.log(liElement[index].textContent)
    
// }

// console.log(liElement.length);

// console.log(liElement);

// 
//Declaração de Array:
// let num1 = [1, 2, 3, 4, 5];
// let num2 = [6, 7, 8, 9, 10];
// let num3 = [...num1, ...num2];

// console.log(`Array 1: ${num1}`);
// console.log(`Array 2: ${num2}`);
// console.log(`Array 3: ${num3}`);

// //Listando o Array com técnica especial (forEach):
// num3.forEach((itemDoArray)=>{
//     console.log(`Array 3 sendo listado: ${itemDoArray}`)
// })
// console.log(`Array 3 sendo listado: ${num3}`);

// //Listando o Array com MAP:
// num3.map((numero, key)=>{
//     console.log(`${(key+1)} - Itens do Array - ${numero}`);
//     numero.forEach((digitos)=>{
//         console.log(digitos);
//     })
// })

// //Convertendo HTMLCollection em Array e forma indireta:
// const liElementHTML = document.getElementsByTagName("li");
// const liElementArray = [...liElementHTML];

// liElementArray.map((item, key)=>{
//     if (item.textContent == "Item - 39"){
//         console.log(`${key+1} - ${item.textContent = "Localizado"}`);
//     }
// })

//////////////////////////////////////////////////////////////////////////////////

// function soma(p1, p2, p3) {
//     num1 = p1;
//     num2 = p2;
    
//     return parseInt(num1) + parseInt(num2) + parseInt(p3);

//     // console.log(`Resultado: ${parseInt(num1) + parseInt(num2) + parseInt(parametro)}`);

//     // console.log(`Este é o parâmetro que foi passado para a função: ${parseInt(parametro)}`);
// }

// //Arrow Function:
// const mudaCor = ()=>{
//     //Função Set-Time-Out:
//     setTimeout(soma(), 5000);
// }

// mudaCor();

let tmp = ""

function mudaCor() {
    let r = "";
    let g = "";
    let b = "";

    //random = Gera números aleatórios entre 0 e 1
    //ceil, floor e round que arredondam o número para cima, para baixo ou aleatoriamente

    //Determinando para a variável r um valor entre 0 e 255:
    r = Math.round(Math.random() * 255);
    console.log(r);
    g = Math.round(Math.random() * 255);
    console.log(r);
    b = Math.round(Math.random() * 255);
    console.log(r);

    const cabecalho = document.querySelector(".cabecalho");
    
    cabecalho.setAttribute("style", `background-color: rgb(${r}, ${g}, ${b})`);

    tmp = setTimeout(mudaCor, 1000);
}

mudaCor();