function valoresUnicos(array){
    const valoresUnicos = new Set(array);
    return [...valoresUnicos];
}

function main(){
    const quantidade = Number(prompt("Digite a quantidade de elementos do array"));

    if(!quantidade){
        alert("Quantidade inválida!");
        main();
    } else {
        let valores = []
        for (let i = 1; i <= quantidade; i++){
            let elemento = prompt(`Digite o ${i}º elemento do array`);
            valores.push(elemento);
        }

        console.log(valoresUnicos(valores));
    }

}

main();