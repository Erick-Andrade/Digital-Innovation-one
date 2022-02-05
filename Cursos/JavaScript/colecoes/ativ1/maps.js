function getAdmins(usuarios){
    let admins = []
    for ([nomeUsuario, cargoUsuario] of usuarios){
        if (cargoUsuario === "ADMIN"){
            admins.push(nomeUsuario);
        }
    }
    return admins;
}


function main(){
    const usuarios = new Map();


    const quantidade = Number(prompt("Digite a quantidade de usuários"));

    if (!quantidade){
        alert("Quantidade inválida!");
        main();
    }
    
    for (var i = 1; i <= quantidade; i++){
        let usuario;
        do{
            usuario = prompt(`Digite o nome do ${i}º usuario  e o seu cargo (nomeUsuario; cargo)`);
            usuario = usuario.split('; ');
            

        } while(usuario.length != 2);

        let [nomeUsuario, cargoUsuario] = usuario;
        nomeUsuario = nomeUsuario.toUpperCase().trim();
        cargoUsuario = cargoUsuario.toUpperCase().trim();
        usuarios.set(nomeUsuario, cargoUsuario);
    }

    console.log(getAdmins(usuarios));
}


main();