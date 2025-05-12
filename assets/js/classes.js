export class Cliente {
    constructor(nome, email) {
        this.nome = nome;
        this.email = email;
    }
}

export class API {
    constructor(baseUrl) {
        this.baseUrl = baseUrl;
    }

    async fetchClientes() {
        const response = await fetch(this.baseUrl);
        if (!response.ok) throw new Error("Erro ao buscar clientes");
        return response.json();
    }

    async cadastrarCliente(cliente) {
        const response = await fetch(this.baseUrl, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(cliente),
        });
        if (!response.ok) throw new Error("Erro ao cadastrar cliente");
    }

    async removerCliente(id) {
        const response = await fetch(`${this.baseUrl}/${id}`, { method: "DELETE" });
        if (!response.ok) throw new Error("Erro ao remover cliente");
    }
}