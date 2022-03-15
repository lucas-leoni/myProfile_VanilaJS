let inputNome = document.getElementById("nome");
let inputCelular = document.getElementById("celular");
let inputCpf = document.getElementById("cpf");
let inputFixo = document.getElementById("fixo");
let inputRg = document.getElementById("rg");
let inputEmail = document.getElementById("email");

let buttonSalvar = document.getElementById("salvar");
let buttonLimpar = document.getElementById("limpar");

let exibirNomePessoa = document.getElementById("exibir-nome-pessoa");
let exibirNome = document.getElementById("exibir-nome");
let exibirCpf = document.getElementById("exibir-cpf");
let exibirRg = document.getElementById("exibir-rg");
let exibirCelular = document.getElementById("exibir-celular");
let exibirFixo = document.getElementById("exibir-fixo");
let exibirEmail = document.getElementById("exibir-email");

buttonSalvar.addEventListener("click", function (e) {
  e.preventDefault();
  exibirNomePessoa.textContent = "Olá, " + inputNome.value + "!";
  exibirNome.textContent = inputNome.value;
  exibirCpf.textContent = "CPF: " + inputCpf.value;
  exibirRg.textContent = "RG: " + inputRg.value;
  exibirCelular.textContent = "Cel: " + inputCelular.value;
  exibirFixo.textContent = "Fixo: " + inputFixo.value;
  exibirEmail.textContent = inputEmail.value;
  validacao();
});

buttonLimpar.addEventListener("click", function (e) {
  e.preventDefault();
  exibirNomePessoa.textContent = "Olá, Pessoa!";
  exibirNome.textContent = "__________________";
  exibirCpf.textContent = "CPF: ____________";
  exibirRg.textContent = "RG: ___________";
  exibirCelular.textContent = "Cel: _____________";
  exibirFixo.textContent = "Fixo: ____________";
  exibirEmail.textContent = "";

  inputNome.value = "";
  inputCelular.value = "";
  inputCpf.value = "";
  inputFixo.value = "";
  inputRg.value = "";
  inputEmail.value = "";
  validacao();
});

let labelNome = document.getElementById("labelNome");
let labelCpf = document.getElementById("labelCpf");
let labelEmail = document.getElementById("labelEmail");

let smallNome = document.createElement("small");
let smallCpf = document.createElement("small");
let smallEmail = document.createElement("small");

smallNome.innerText = "Preenchimento obrigatório!";
smallCpf.innerText = "Preenchimento obrigatório!";
smallEmail.innerText = "Preenchimento obrigatório!";

smallNome.style.color = "red";
smallCpf.style.color = "red";
smallEmail.style.color = "red";

function validacaoForm() {
  if (
    inputNome.value === "" ||
    inputCpf.value === "" ||
    inputEmail.value === ""
  ) {
    buttonSalvar.setAttribute("disabled", "disabled");
  }
}

function validacaoButton() {
  if (
    inputNome.value !== "" &&
    inputCpf.value !== "" &&
    inputEmail.value !== ""
  ) {
    buttonSalvar.removeAttribute("disabled");
    smallCpf.remove();
    smallEmail.remove();
  }
}

function mostraAviso() {
  if (inputNome.value === "") {
    labelNome.appendChild(smallNome);
  }
  if (inputCpf.value === "") {
    labelCpf.appendChild(smallCpf);
  }
  if (inputEmail.value === "") {
    labelEmail.appendChild(smallEmail);
  }
}

function removeAviso() {
  if (inputNome.value !== "") {
    smallNome.remove();
  }
  if (inputCpf.value !== "") {
    smallCpf.remove();
  }
  if (inputEmail.value !== "") {
    smallEmail.remove();
  }
}

function validacao() {
  validacaoForm();
  validacaoButton();
  mostraAviso();
  removeAviso();
}
