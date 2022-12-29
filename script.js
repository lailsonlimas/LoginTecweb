
const formulario = document.querySelector("#inicial");
//criando a const formulario 
formulario.onsubmit = evento => {
    //recebr o valor do campo 
    var nome = document.querySelector("#nome1").value; //declaro a variavel nome, 
    // recebendo o value da id #nome1
    console.log(nome);

    //verificar se o campo esta vazio 
    if (nome === "") {
        evento.preventDefault();//evento para não recarregar a pagina
        
        document.getElementById("msgAlerta").innerHTML = "<p style='color: #f00;font-size: 15px;'>Necessário preencher o campo nome!</p>";
        // document.get vai pegar a id "#msgAlerta" no html e botar um spam de erro com innerhtml
        return;
        //return vai retornar o processo 

    }

         //recebr o valor do campo 
    var senha = document.querySelector("#senha1").value; //declaro a variavel email1, 

    //verificar se o campo esta vazio 
    if (senha === "") {
        evento.preventDefault();//evento para não recarregar a pagina
        document.getElementById("msgAlerta").innerHTML = "<p style='color: #f00;font-size: 15px;'>Necessário preencher o campo senha!</p>";
        // document.get vai pegar a id "#msgAlerta" no html e botar um spam de erro com innerhtml
        return;
        //return vai retornar o processo 


        
    }

    

    
}

