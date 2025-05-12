import { Cliente, API } from "./classes.js";
import { criarCardCliente, limparCampos, validarCampos } from "./utils.js";

// URL da API
const API_URL = "https://crudcrud.com/api/98c8539ad88f4be78794dfae1db42528/cadastro-clientes";
const api = new API(API_URL);

// Elementos do DOM
const listaClientes = document.querySelector(".lista-clientes");
const nomeInput = document.getElementById("nome");
const emailInput = document.getElementById("email");
const botaoCadastrar = document.querySelector("button[type='button']");

// Função para carregar e exibir os clientes
async function carregarClientes() {
    try {
        const clientes = await api.fetchClientes();
        listaClientes.innerHTML = ""; // Limpa a lista
        clientes.forEach(cliente => {
            const card = criarCardCliente(cliente, removerCliente);
            listaClientes.appendChild(card);
        });
    } catch (error) {
        console.error(error.message);
    }
}

// Função para cadastrar um novo cliente
async function cadastrarCliente() {
    if (!validarCampos(nomeInput, emailInput)) {
        alert("Por favor, preencha todos os campos.");
        return;
    }

    const novoCliente = new Cliente(nomeInput.value, emailInput.value);

    try {
        await api.cadastrarCliente(novoCliente);
        limparCampos(nomeInput, emailInput);
        await carregarClientes(); // Atualiza a lista
    } catch (error) {
        console.error(error.message);
    }
}

// Função para remover um cliente
async function removerCliente(id) {
    try {
        await api.removerCliente(id);
        await carregarClientes(); // Atualiza a lista
    } catch (error) {
        console.error(error.message);
    }
}

// Adiciona evento ao botão de cadastro
botaoCadastrar.addEventListener("click", cadastrarCliente);

// Carrega os clientes ao iniciar
document.addEventListener("DOMContentLoaded", carregarClientes);