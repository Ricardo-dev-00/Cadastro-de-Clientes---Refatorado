# Cadastro de Clientes - Refatorado

Veja este projeto online: [Clique aqui para acessar](https://ricardo-dev-00.github.io/Cadastro-de-Clientes---Refatorado/)

Este projeto é uma aplicação de **Cadastro de Clientes**, desenvolvida como parte do curso de **Desenvolvimento Front-End** da **EBAC**. O objetivo principal foi refatorar o código original para torná-lo mais modular, reutilizável e organizado, utilizando boas práticas de programação.

## 🛠️ Tecnologias Utilizadas

- **HTML**: Estrutura da página.
- **CSS**: Estilização da interface.
- **JavaScript (ES6+)**: Lógica para interação com a API e manipulação do DOM.
- **API CrudCrud**: Persistência dos dados de clientes.

## 🎯 Funcionalidades

- **Cadastro de Clientes**: Permite inserir nome e email de novos clientes.
- **Exibição de Clientes**: Lista todos os clientes cadastrados em cards.
- **Remoção de Clientes**: Possibilidade de excluir clientes da lista.
- **Refatoramento**: Código modularizado com classes e funções utilitárias.

## 📂 Estrutura do Projeto

O projeto foi reorganizado para melhorar a legibilidade e a manutenção do código. A estrutura é a seguinte:

```
Exercício módulo 10/
├── assets/
│   ├── css/
│   │   └── style.css       # Estilos da aplicação
│   ├── js/
│   │   ├── app.js          # Arquivo principal da aplicação
│   │   ├── classes.js      # Classes para abstração de Cliente e API
│   │   └── utils.js        # Funções utilitárias para manipulação do DOM
├── index.html              # Estrutura principal da aplicação
```

## 🚀 Como Usar

1. Clone este repositório para o seu computador:
   ```bash
   git clone https://github.com/Ricardo-dev-00/Cadastro-de-Clientes---Refatorado.git
   ```
2. Navegue até o diretório do projeto:
   ```bash
   cd cadastro-clientes-refatorado
   ```
3. Abra o arquivo `index.html` em um navegador.

## 🖼️ Exemplo de Interface

A interface do sistema é composta por:

- Um formulário para cadastro de clientes.
- Uma lista dinâmica de clientes cadastrados, exibidos em cards.
- Botões para remover clientes da lista.

## 📋 Melhorias Realizadas no Refatoramento

1. **Modularização**:
   - O código foi dividido em arquivos menores e mais específicos:
     - `classes.js`: Contém a classe `Cliente` e a classe `API` para abstração de funcionalidades.
     - `utils.js`: Contém funções utilitárias para manipulação do DOM, como criação de cards e validação de campos.
     - `app.js`: Arquivo principal que orquestra as funcionalidades.

2. **Boas Práticas**:
   - Uso de **classes** para encapsular lógica e facilitar a reutilização.
   - Uso de **funções utilitárias** para evitar repetição de código.
   - Uso de **async/await** para lidar com requisições assíncronas de forma mais legível.

3. **Estilização**:
   - O CSS foi ajustado para melhorar a responsividade e a experiência do usuário.
   - Adição de variáveis CSS para facilitar a manutenção de cores e estilos.

4. **Melhorias na UX**:
   - Feedback visual ao cadastrar ou remover clientes.
   - Validação de campos antes de enviar os dados.

## 📋 Regras do Sistema

1. Todos os campos do formulário são obrigatórios.
2. O sistema utiliza a API CrudCrud para persistir os dados.
3. A lista de clientes é atualizada automaticamente após cada operação (cadastro ou remoção).

## 🤝 Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou enviar pull requests com melhorias ou novas funcionalidades.

## 📜 Licença

Este projeto está licenciado sob a Licença MIT. Consulte o arquivo `LICENSE` para mais detalhes.

---

Desenvolvido com ❤️ por **Ricardo Vieira** como parte do curso de **Desenvolvimento Front-End** da **EBAC**.
