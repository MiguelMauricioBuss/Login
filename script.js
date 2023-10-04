const campologin = document.getElementById("login")
const camposenha = document.getElementById("password")
const campoNovoLogin = document.getElementById("novologin")
const campoNovaSenha = document.getElementById("novaSenha")
const campoRepSenha = document.getElementById("repSenha")

let usuarios = [];

function cadastra() {
    if (campoNovaSenha.value == campoRepSenha.value) {
        const usuario = {
            login: campoNovoLogin.value,
            senha: campoNovaSenha.value
        };
        let bancoDeDados = JSON.parse(localStorage.getItem("bancoDeDados"));
        if (bancoDeDados == null) {
            bancoDeDados = [];
        }
        bancoDeDados.push(usuario);
        localStorage.setItem("bancoDeDados", JSON.stringify(bancoDeDados));

        alert("Usuário cadastrado com sucesso!")

    } else {
        alert("As senhas são diferentes!");
    }
    window.location.href = "login.html"

}
function login() {
    let login = campologin.value;
    let senha = camposenha.value;
    let mensagem = "Usuário ou senha incorreta!";
    let bancoDeDados = JSON.parse(localStorage.getItem("bancoDeDados"));
    if (bancoDeDados == null) {
        mensagem = "Nenhum usuário cadastrado até o momento";
    } else {
        for (let usuario of bancoDeDados) {
            if (usuario.login == login && usuario.senha == senha) {
                mensagem = "Logado com sucesso!"
                localStorage.setItem("logado", JSON.stringify(usuario))
                window.location.href = "./logado/home.html"
                break;
            }
        }
    }
    alert(mensagem)
}

function cadastro() {
    window.location.href = "registro.html"
}