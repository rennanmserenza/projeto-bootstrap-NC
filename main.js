function envia_email(i) {
    var mail, name;

    name = document.getElementsByName("name").value;
    mail = document.getElementByName("email").value;

    if (name == null || name == '') {
        alert('O campo de nome não foi preenchido.');
    }
    else if (mail == null || mail == '') {
        alert('O campo de email não foi preenchido');
    }
    else if (!mail.includes(".com")) {
        alert("Digite um e-mail válido.");
    }

    if (i == 1) {
        var job, message;
        
        job = document.getElementById("job-form").value;
        message = document.getElementById("experience").value;
        
        if (name != "" && mail != "" && job != "" && message != "" && mail.includes(".com")) {
            document.getElementById("envio").action = "https://api.staticforms.xyz/submit"
            alert('Email enviado com sucesso');                  
        }
        else {
            if (name == "" && mail == "" && job == "" && message == "") {
                alert('Todos os campos devem ser preenchidos.');
            }
            else if (job == null || job == '') {
                alert('O campo área de experiencia não foi preenchido.');
            }
            else if (message == null || message == '') {
                alert('O campo sobre sua experiência não foi preenchido.');
            }
        }
    }
    else if (i == 2) {
        var fone, cpf, cep, logradouro, numero, bairro, cidade, estado;
        
        fone = document.getElementById("fone-form").value;
        cpf = document.getElementById("cpf-form").value;

        cep = document.getElementById("cep").value;
        logradouro = document.getElementById("endereco").value;
        numero = document.getElementById("numero-form").value;
        bairro = document.getElementById("bairro").value;
        cidade = document.getElementById("cidade").value;
        estado = document.getElementById("uf").value;

        if (name != "" && mail != "" && job != "" && message != "" && mail.includes(".com")
         && fone.length() >= 10 && cpf.length() >= 11 && cep.length >= 8 && logradouro != ""
         && numero != "" && bairro != "" && cidade != "" && estado != "") {
            document.getElementById("envio").action = "https://api.staticforms.xyz/submit"
            alert('Email enviado com sucesso');                  
        }
        else if (name == "" || mail == "" || job == "" || message == "" || fone == "" 
        || cpf == "" || cep == "" || logradouro == "" || numero == "" || bairro == "" 
        || cidade == "" || estado == "") {
            alert('Todos os campos devem ser preenchidos.');    
        }
    }
}

mascaraCep = function() {
    var cep = document.getElementById("cep");
    
    if (cep.value.length == 5)
    cep.value = cep.value + "-"
}