// Função para filtrar filmes/séries no catálogo
function filtrarCatalogo() {
    const genero = document.getElementById('genre').value;
    const avaliacao = document.getElementById('rating').value;

    const itensCatalogo = document.querySelectorAll('.catalog-item');

    itensCatalogo.forEach(item => {
        let itemGenero = item.dataset.genero;
        let itemAvaliacao = parseFloat(item.dataset.avaliacao);

        let generoMatch = genero === 'todos' || itemGenero === genero;
        let avaliacaoMatch = avaliacao === 'todos' || itemAvaliacao >= parseFloat(avaliacao);

        if (generoMatch && avaliacaoMatch) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}

// Sistema de login básico (simulado)
function login(event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;

    // Validação básica
    if (email === 'usuario@exemplo.com' && senha === '12345') {
        alert('Login bem-sucedido!');
        window.location.href = 'profile.html'; // Redireciona para a página de perfil
    } else {
        alert('Email ou senha inválidos.');
    }
}

// Sistema de comentários e avaliações
function adicionarComentario(event) {
    event.preventDefault();

    const comentario = document.getElementById('comment').value;
    const listaComentarios = document.querySelector('.review-list');

    if (comentario) {
        const novoComentario = document.createElement('div');
        novoComentario.classList.add('review');
        novoComentario.innerHTML = `<p><strong>Usuário Anônimo:</strong> ${comentario}</p>`;

        listaComentarios.appendChild(novoComentario);
        document.getElementById('comment').value = ''; // Limpa o campo de texto
    } else {
        alert('Por favor, insira um comentário.');
    }
}

// Funções para carregar após o DOM estar pronto
document.addEventListener('DOMContentLoaded', () => {
    // Aplicar filtros no catálogo
    const formFiltros = document.querySelector('form');
    if (formFiltros) {
        formFiltros.addEventListener('submit', (event) => {
            event.preventDefault();
            filtrarCatalogo();
        });
    }

    // Formulário de login
    const formLogin = document.querySelector('.login-form');
    if (formLogin) {
        formLogin.addEventListener('submit', login);
    }

    // Adicionar comentários
    const formComentario = document.querySelector('.review-form');
    if (formComentario) {
        formComentario.addEventListener('submit', adicionarComentario);
    }
});
