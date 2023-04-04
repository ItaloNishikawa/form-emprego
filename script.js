function validarFormulario() {
    var nome = document.getElementById("nome").value;
    var dataNascimento = document.getElementById("data-nascimento").value;
    var genero = document.getElementById("genero").value;
    var nacionalidade = document.getElementById("nacionalidade").value;
    var endereco = document.getElementById("endereco").value;
    var cidade = document.getElementById("cidade").value;
    var estado = document.getElementById("estado").value;
    var cep = document.getElementById("cep").value;
    var telefone = document.getElementById("telefone").value;
    var formacao = document.getElementById("formacao").value;
    var experiencia = document.getElementById("experiencia").value;
    var habilidade1 = document.getElementById("habilidades-comportamentais-1").value;
    var habilidade2 = document.getElementById("habilidades-comportamentais-2").value;
    var habilidade3 = document.getElementById("habilidades-comportamentais-3").value;

    if (nome == "" || dataNascimento == "" || genero == "" || nacionalidade == "" || endereco == "" || cidade == "" || estado == "" || cep == "" || telefone == "" || formacao == "" || experiencia == "" || habilidade1 == "" || habilidade2 == "" || habilidade3 == "") {
        alert("Por favor, preencha todos os campos obrigatórios.");
        return false;
    }

    if (!validarEmail()) {
        alert("Por favor, informe um e-mail válido.");
        return false;
    }

    if (!validarData()) {alert("Por favor, informe uma data de nascimento válida.");
        return false;
    }

    if (!validarTelefone()) {
        alert("Por favor, informe um telefone válido.");
        return false;
    }

    return true;
}

function validarEmail() {
    var email = document.getElementById("email").value;
    var regex = /^\S+@\S+\.\S+$/;
    return regex.test(email);
}

function validarData() {
    var data = document.getElementById("data-nascimento").value;
    var regex = /^\d{4}-\d{2}-\d{2}$/;
    if (!regex.test(data)) {
        return false;
    }
    var partes = data.split("-");
    var ano = parseInt(partes[0]);
    var mes = parseInt(partes[1]);
    var dia = parseInt(partes[2]);
    var dataAtual = new Date();
    var anoAtual = dataAtual.getFullYear();
    var mesAtual = dataAtual.getMonth() + 1;
    var diaAtual = dataAtual.getDate();
    if (ano > anoAtual || (ano == anoAtual && mes > mesAtual) || (ano == anoAtual && mes == mesAtual && dia > diaAtual)) {
        return false;
    }
    return true;
}

function validarTelefone() {
    var telefone = document.getElementById("telefone").value;
    var regex = /^\(\d{2}\)\s\d{4,5}-\d{4}$/;
    return regex.test(telefone);
}