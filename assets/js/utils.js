export function criarCardCliente(cliente, removerCallback) {
    const card = document.createElement("div");
    card.classList.add("card-cliente");

    card.innerHTML = `
        <h3>👤 Cliente</h3>
        <p>${cliente.nome}</p>
        <h3>✉️ Email</h3>
        <p>${cliente.email}</p>
        <button class="btn-remove" data-id="${cliente._id}">Remover Cliente</button>
    `;

    card.querySelector(".btn-remove").addEventListener("click", () => {
        removerCallback(cliente._id);
    });

    return card;
}

export function limparCampos(...campos) {
    campos.forEach(campo => (campo.value = ""));
}

export function validarCampos(...campos) {
    return campos.every(campo => campo.value.trim() !== "");
}