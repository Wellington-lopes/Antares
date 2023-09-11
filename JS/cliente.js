var enderecoForm = document.querySelector(".form-body");
var cepInput = document.querySelector("#cep");
var ruaInput = document.querySelector("#rua");
var bairroInput = document.querySelector("#bairro");
var cidadeInput = document.querySelector("#cidade");
var estadoInput = document.querySelector("#estado");
var formInput = document.querySelector("[data-input]"); // é um array, quando vem do site vem como uma lista/ vamos ter que desmembrar

/*cepInput.addEventListener("keypress", (e) =>{
    const onlyNumbers = /[0-9]/;
    const tecla = String.fromCharCode(e.keyCode);
    if (!onlyNumbers.test(tecla)){
        e.preventDefault();
        return;
    }
});*/

cepInput.addEventListener("keyup", (e) =>{
    const inputValue = e.target.value;
    if (inputValue.length === 8){
       getEndereco(inputValue); //chama uma função
    }
});


var getEndereco = async (cep) =>{
    //cepInput.blur();
    const apiUrl = `https://viacep.com.br/ws/${cep}/json/`;
    const response = await fetch(apiUrl);
    const data = await response.json();
    console.log(data);
    console.log(formInput);
    console.log(data.erro);
    ruaInput.value = data.logradouro;
    cidadeInput.value = data.localidade;
    bairroInput.value = data.bairro;
    estadoInput.value = data.uf;

}