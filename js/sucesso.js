
    
    if(JSON.parse(localStorage.getItem("user-token")) != null){
        const userBemVindo = document.querySelector("#userWelcome");
        let usuario = JSON.parse(localStorage.getItem("user-validado"));
        
        userBemVindo.innerHTML = usuario.nomeUsuario;
        const botaoLogout = document.querySelector("#btnLogout");
        
        botaoLogout.addEventListener("click", ()=>{
            localStorage.removeItem("user-token");
            window.location.href = "../login.html";
        });
    }else{
        window.location.href = "../login.html";
    }
