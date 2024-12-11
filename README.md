#Projeto-Atila
# Projeto de Gerenciamento de Receitas

Este é um projeto de gerenciamento de receitas que permite criar, editar, visualizar e excluir receitas. A aplicação inclui uma interface web interativa e uma API REST para gerenciamento das receitas no backend.

## Tecnologias Utilizadas

### Backend

- **Java**: Linguagem principal utilizada.
- **Spring Boot**: Framework para criação de APIs REST e gerenciamento de dependências.
- **JPA/Hibernate**: Para interação com o banco de dados.
- **My SqlWorkbench**: Banco de dados embutido para testes.

### Frontend

- **HTML5** e **CSS3**: Criação da interface do usuário.
- **JavaScript**: Interatividade da aplicação.
- **Fetch API**: Consumo da API REST do backend.

### Outras Ferramentas

- **Lombok**: Redução de código boilerplate.
- **Github**: Controle de armazenamento dos repositórios

## Funcionalidades

1. **Frontend**:

   - Exibir a lista de receitas.
   - Adicionar uma nova receita.
   - Editar receitas existentes.
   - Excluir receitas.
   - Interface responsiva.

2. **Backend**:

   - API REST para manipulação de receitas:
     - `GET /recipes`: Retorna todas as receitas.
     - `POST /recipes`: Cria uma nova receita.
     - `GET /recipes/{id}`: Retorna uma receita pelo ID.
     - `PUT /recipes/{id}`: Atualiza uma receita existente.
     - `DELETE /recipes/{id}`: Exclui uma receita pelo ID.
   - Validação dos dados recebidos.
   - Persistência em banco de dados.

## Estrutura do Projeto

```
ProjetoReceitas/
├── src/
│   ├── main/
│   │   ├── java/com/Projeto/Receitas/
│   │   │   ├── controller/
│   │   │   ├── dto/
│   │   │   ├── model/
│   │   │   ├── repository/
│   │   └── resources/
│   ├── Static/
│       ├── index.html
│       ├── styles.css
│       └── script.js
├── pom.xml
└── README.md
```

## Como Executar o Projeto

### Backend

1. Acesse a API em pj-atila-c4c3gkhadygheghs.brazilsouth-01.azurewebsites.net

### Frontend

1. Abra o arquivo `index.html` em um navegador.
2. A interface consumirá os dados da API automaticamente.

## API Endpoints

| Método HTTP | Endpoint        | Descrição                       |
| ----------- | --------------- | ------------------------------- |
| GET         | `/recipes`      | Retorna todas as receitas.      |
| GET         | `/recipes/{id}` | Retorna uma receita pelo ID.    |
| POST        | `/recipes`      | Adiciona uma nova receita.      |
| PUT         | `/recipes/{id}` | Atualiza uma receita existente. |
| DELETE      | `/recipes/{id}` | Exclui uma receita pelo ID.     |



## Autor

Desenvolvido por Lucas (Back-end) e Ricardo (Front-end)


