function validateForm() {
    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const alert = document.getElementById("alert");

    if (nome.length < 3) {
        alert.innerHTML = `<div class="alert alert-danger">Nome inválido</div>`;
        return false;
    }
    if (!email.includes("@")) {
        alert.innerHTML = `<div class="alert alert-danger">Email inválido</div>`;
        return false;
    }

    alert.innerHTML = `<div class="alert">Enviado com sucesso!</div>`;
    return true;
}
