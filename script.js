// 1. Animação de Carregamento (Carregamento Inicial)
document.addEventListener('DOMContentLoaded', function() {
    const body = document.querySelector('body');
    body.classList.add('carregando');
    
    // Remover a animação de carregamento após 1 segundo
    setTimeout(function() {
        body.classList.remove('carregando');
    }, 1000);
});

// 2. Mensagens de Apoio Aleatórias
const mensagens = [
    "A luta pela igualdade racial é a luta de todos!",
    "A resistência está na nossa história. Não podemos esquecer.",
    "Juntos, somos mais fortes na luta contra o racismo!",
    "Vamos celebrar a cultura negra e nossa ancestralidade!",
    "A igualdade é um direito de todos. Não podemos recuar!"
];

// Função para exibir uma mensagem aleatória no banner
function mostrarMensagemAleatoria() {
    const mensagemAleatoria = mensagens[Math.floor(Math.random() * mensagens.length)];
    const bannerText = document.querySelector('.banner-text p');
    bannerText.textContent = mensagemAleatoria;
}

// Alterar mensagem a cada 5 segundos
setInterval(mostrarMensagemAleatoria, 5000);

// 3. Alterar Tema (Exemplo de Alternância de Cores)
const botaoTema = document.createElement('button');
botaoTema.textContent = 'Alterar Tema';
document.body.appendChild(botaoTema);

botaoTema.addEventListener('click', function() {
    document.body.classList.toggle('tema-escuro');
});

// 4. Validação de Formulário (Página Como Ajudar?)
const form = document.querySelector('.formulario-acao');
if (form) {
    form.addEventListener('submit', function(event) {
        const nome = document.getElementById('nome').value;
        const email = document.getElementById('email').value;
        const mensagem = document.getElementById('mensagem').value;

        // Verificar se todos os campos foram preenchidos
        if (!nome || !email || !mensagem) {
            event.preventDefault(); // Impede o envio do formulário
            alert("Todos os campos são obrigatórios!");
        } else {
            alert("Obrigado pelo seu apoio!");
        }
    });
}

