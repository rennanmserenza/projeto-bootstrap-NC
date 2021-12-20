function envia_email(){
    var mail, name, job, message;

    name = document.getElementById("name-form").value;
    mail = document.getElementById("mail-form").value;
    job = document.getElementById("job-form").value;
    message = document.getElementById("experience").value;
    
    if (name != "" && mail != "" && job != "" && message != "" && mail.includes(".com")) {
        document.getElementById("envio").action = "https://api.staticforms.xyz/submit"
        alert('Email enviado com sucesso');                  
    }
    else {
        if (name == "" && mail == "" && job == "" && message == "") {
            alert('Todos os campos devem ser preenchidos.');
            document.location.reload(false);
        }
        else if (name == null || name == '') {
            alert('O campo de nome não foi preenchido.');
            document.location.reload(false);
        }
        else if (mail == null || mail == '') {
            alert('O campo de email não foi preenchido');
            document.location.reload(false);
        }
        else if (!mail.includes(".com")) {
            alert("Digite um e-mail válido.");
            document.location.reload(false);
        }
        else if (job == null || job == '') {
            alert('O campo área de experiencia não foi preenchido.');
            document.location.reload(false);
        }
        else if (message == null || message == '') {
            alert('O campo sobre sua experiência não foi preenchido.');
            document.location.reload(false);
        }
    }
}

