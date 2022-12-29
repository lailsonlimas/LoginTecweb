const criarConta = document.querySelector("#CriarConta");
criarConta.onsubmit = evento => {
         //recebr o valor do campo 
         var nomeC = document.querySelector("#nomeC").value; //declaro a variavel email1,
         console.log(nomeC); 

         //verificar se o campo esta vazio 
         if (nomeC === "") {
             evento.preventDefault();//evento para não recarregar a pagina
             document.getElementById("senhaalerta").innerHTML = "<p style='color: #f00;font-size: 15px;'>Necessário preencer o campo nome!</p>";
             // document.get vai pegar a id "#msgAlerta" no html e botar um spam de erro com innerhtml
             return;
             //return vai retornar o processo 

         }

         var email2 = document.querySelector("#email2").value; //declaro a variavel email1,
         console.log(email2); 

         //verificar se o campo esta vazio 
         if (email2 === "") {
             evento.preventDefault();//evento para não recarregar a pagina
             document.getElementById("senhaalerta").innerHTML = "<p style='color: #f00;font-size: 15px;'>Necessário preencer o campo email!</p>";
             // document.get vai pegar a id "#msgAlerta" no html e botar um spam de erro com innerhtml
             return;
             //return vai retornar o processo 

         }var senha2 = document.querySelector("#senha2").value; //declaro a variavel email1,
         console.log(senha2); 

         //verificar se o campo esta vazio 
         if (senha2 === "") {
             evento.preventDefault();//evento para não recarregar a pagina
             document.getElementById("senhaalerta").innerHTML = "<p style='color: #f00;font-size: 15px;'>Necessário preencer o campo senha!</p>";
             // document.get vai pegar a id "#msgAlerta" no html e botar um spam de erro com innerhtml
             return;
             //return vai retornar o processo 

         }
}