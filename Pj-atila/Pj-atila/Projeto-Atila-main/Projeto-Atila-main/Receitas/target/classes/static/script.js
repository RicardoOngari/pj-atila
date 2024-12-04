// Variáveis globais
let recipes = []; // Array global com as receitas
let editingIndex = null; // Para rastrear qual receita está sendo editada
const API_BASE_URL = 'https://pj-atila-c4c3gkhadygheghs.brazilsouth-01.azurewebsites.net'; // Base URL para a API

// Função para mostrar ou esconder o formulário
function toggleForm() {
    const formContainer = document.getElementById('form-container');
    formContainer.style.display = formContainer.style.display === 'none' ? 'block' : 'none';
}

// Função para mostrar mensagens de feedback
function showFeedbackMessage(message) {
    const feedbackMessageDiv = document.getElementById('feedback-message');
    feedbackMessageDiv.innerText = message;
    feedbackMessageDiv.style.display = 'block';
    setTimeout(() => {
        feedbackMessageDiv.style.display = 'none';
    }, 3000);
}

// Função para buscar todas as receitas
async function getAllRecipes() {
    try {
        console.log('Buscando receitas...');
        const response = await fetch(`https://pj-atila-c4c3gkhadygheghs.brazilsouth-01.azurewebsites.net/recipes`, {
            method: 'GET',
        });

        if (!response.ok) {
            const errorText = await response.text();
            throw new Error(`Erro ao buscar receitas: ${response.status} ${errorText}`);
        }

        recipes = await response.json(); // Armazena as receitas aqui
        console.log('Lista de receitas:', recipes);
        return recipes;
    } catch (error) {
        console.error('Erro ao buscar receitas:', error);
        throw error;
    }
}

// Função para adicionar uma nova receita
async function addRecipe(recipeTitle, description, url) {
    try {
        const response = await fetch(`${API_BASE_URL}/recipes`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ title: recipeTitle, description, url }), // Corrigido para recipeTitle
        });

        if (!response.ok) {
            const errorText = await response.text();
            throw new Error(`Erro ao adicionar receita: ${response.status} ${errorText}`);
        }

        const newRecipe = await response.json();
        console.log('Receita adicionada:', newRecipe);
        recipes.push(newRecipe); // Adiciona a nova receita no array local
        renderRecipes(); // Renderiza a lista de receitas após adicionar
        return newRecipe;
    } catch (error) {
        console.error('Erro ao adicionar receita:', error);
        throw error;
    }
}

// Função para editar uma receita
function editRecipe(index) {
    const recipe = recipes[index];
    document.getElementById('title').value = recipe.title;
    document.getElementById('description').value = recipe.description;
    document.getElementById('url').value = recipe.url;
    editingIndex = index;
    toggleForm();
}

// Função para atualizar a receita
async function updateRecipe(recipeId, recipeTitle, description, url) {
    try {
        const response = await fetch(`${API_BASE_URL}/recipes/${recipeId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ title: recipeTitle, description, url }),
        });

        if (!response.ok) {
            const errorText = await response.text();
            throw new Error(`Erro ao atualizar receita: ${response.status} ${errorText}`);
        }

        recipes[editingIndex] = await response.json();
        renderRecipes();
        showFeedbackMessage('Receita atualizada com sucesso!');
        editingIndex = null;
    } catch (error) {
        console.error('Erro ao atualizar receita:', error);
        showFeedbackMessage('Erro ao atualizar receita. Tente novamente.');
    }
}

// Função para excluir uma receita
async function deleteRecipe(recipeId, index) {
    try {
        const response = await fetch(`${API_BASE_URL}/recipes/${recipeId}`, {
            method: 'DELETE',
        });

        if (!response.ok) {
            const errorText = await response.text();
            throw new Error(`Erro ao excluir receita: ${response.status} ${errorText}`);
        }

        recipes.splice(index, 1);
        renderRecipes();
        showFeedbackMessage('Receita excluída com sucesso!');
    } catch (error) {
        console.error('Erro ao excluir receita:', error);
        showFeedbackMessage('Erro ao excluir receita. Tente novamente.');
    }
}

// Função para renderizar a lista de receitas
function renderRecipes() {
    const recipeList = document.getElement
}
// Função para renderizar a lista de receitas
function renderRecipes() {
    const recipeList = document.getElementById('recipe-list');
    recipeList.innerHTML = ''; // Limpa a lista antes de renderizar

    recipes.forEach((recipe, index) => {
        const recipeItem = document.createElement('div');
        recipeItem.className = 'recipe-item';
        recipeItem.innerHTML = `
            <h3>${recipe.title}</h3>
            <p>${recipe.description}</p>
            <a href="${recipe.url}" target="_blank">Ver Receita</a>
            <br>
            <button onclick="editRecipe(${index})">Editar</button>
            <button class="btn-excluir" onclick="deleteRecipe('${recipe.id}', ${index})">Excluir</button>
        `;
        recipeList.appendChild(recipeItem);
    });
}

// Função para lidar com o envio do formulário
document.getElementById('recipe-form').addEventListener('submit', async (event) => {
    event.preventDefault(); // Previne o comportamento padrão do formulário

    const recipeTitle = document.getElementById('title').value;
    const description = document.getElementById('description').value;
    const url = document.getElementById('url').value;

    if (editingIndex !== null) {
        // Se estamos editando, chamamos a função de atualizar
        await updateRecipe(recipes[editingIndex].id, recipeTitle, description, url);
    } else {
        // Caso contrário, chamamos a função de adicionar
        await addRecipe(recipeTitle, description, url);
    }

    // Limpa o formulário após adicionar ou editar
    document.getElementById('recipe-form').reset();
});

// Função para inicializar o aplicativo
async function init() {
    try {
        await getAllRecipes(); // Busca todas as receitas ao iniciar
        renderRecipes(); // Renderiza a lista de receitas
    } catch (error) {
        console.error('Erro ao inicializar o aplicativo:', error);
        showFeedbackMessage('Erro ao carregar receitas. Tente novamente.');
    }
}

// Chama a função de inicialização ao carregar a página
window.onload = init;