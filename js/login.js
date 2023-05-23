
//GERANDO DOIS OBJETOS NO LOCALSTORAGE
const usuario1 = {
    nomeUsuario:"predo",
    senhaUsuario:"12345"
}

const usuario2 = {
    nomeUsuario:"anzina",
    senhaUsuario:"12345"
}

let listaDeUsuarios = [];
listaDeUsuarios.push(usuario1);
listaDeUsuarios.push(usuario2);

localStorage.setItem("listaUser",  JSON.stringify(listaDeUsuarios));


//VAMOS CRIAR UM OBJETO PARA ARMAZENAR O NOSSO USUÁRIO
// const usuario = {
//     nomeUsuario:"",
//     senhaUsuario:""
// }



addEventListener("click",(evento)=>{

    evento.preventDefault();

    if(evento.target.id == "btnSubmit"){
        // let usuario = document.querySelector("#idUser").value;
        // let senha = document.querySelector("#idPass").value;
       
        // RECUPERANDO DOS IMPUTS
        let inputUserValue = document.querySelector("#idUser").value;
        let inputPassValue = document.querySelector("#idPass").value;
        
        const h1Titulo = document.querySelector("#titulo");

        let lista = JSON.parse(localStorage.getItem("listaUser"));


        let userValidado = {
   
        };
       
        try{
            lista.forEach((usuario)=> {
                //VALIDAÇÃO
                if(inputUserValue == usuario.nomeUsuario && inputPassValue == usuario.senhaUsuario){
                    userValidado = usuario;
                    throw "VALIDADO";
                }
            });

            //Caso não ocorra validação o throw é lançado para o catch com a string referente.
            throw "NÃO VALIDADO";

        }catch(msg){
            if(msg == "VALIDADO"){

                //Criando o objeto userValidado no LocalStorage
                localStorage.setItem("user-validado",  JSON.stringify(userValidado));
                
                h1Titulo.innerHTML = "<span><strong>Login validado com sucesso!</strong></span>";
                h1Titulo.setAttribute("style","color:#00ff00;");

                //Adicionando uma propriedade ao nosso objeto userValidado
                let token = Math.random().toString(16).substring(2)+Math.random().toString(16).substring(2);

                //Atualizando o token no LocalStorage
                localStorage.setItem("user-token",  JSON.stringify(token));

                //Direcionando o usuário para a página de sucesso!
                window.location.href = "../sucesso.html";

            }else{
                h1Titulo.innerHTML = "<span><strong>Login ou senha inválidos!</strong></span>";
                h1Titulo.setAttribute("style","color:#ff0000;");
                window.location.href = "../erro.html";
            }
        }       
    }
});

// try{
    
//     if(JSON.parse(localStorage.getItem("user-token")) != null){
//         const userBemVindo = document.querySelector("#userWelcome");
//         let usuario = JSON.parse(localStorage.getItem("user-validado"));
        
//         userBemVindo.innerHTML = usuario.nomeUsuario;
//         const botaoLogout = document.querySelector("#btnLogout");
        
//         botaoLogout.addEventListener("click", ()=>{
//             localStorage.removeItem("user-validado");
//             window.location.href = "../login.html";
//         });
//     }else{
//         throw null;
//     }

// }catch(erro){

//     if(userBemVindo != null){
//         userBemVindo.innerHTML = JSON.parse(localStorage.getItem("user-validado")).nomeUsuario;
//     }else{
//         window.location.href = "../login.html";
//     }
// }




