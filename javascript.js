const botao = document.getElementById("tema");
botao.addEventListener("click", function() {
    document.body.classList.toggle("escuro");
    if (document.body.classList.contains("escuro")) {
        botao.innerHTML = '<i class="bi bi-brightness-high-fill"></i> Modo Claro';
    } else {
        botao.innerHTML = '<i class="bi bi-moon-fill"></i> Modo Escuro';
    }
});

const imagens = document.querySelectorAll('.logo-parceiro img, .foto-futura img');
const modal = document.getElementById('modal-imagem');
const imagemAmpliada = document.getElementById('imagem-ampliada');
const fecharModal = document.querySelector('.fechar-modal');

imagens.forEach(imagem => {
    imagem.addEventListener('click', function() {
        modal.style.display = 'flex';
        imagemAmpliada.src = this.src;
        imagemAmpliada.alt = this.alt;
        document.body.style.overflow = 'hidden';
    });
});
fecharModal.addEventListener('click', fecharImagem);
modal.addEventListener('click', function(event) {
    if (event.target === modal) {
        fecharImagem();
    }
});
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        fecharImagem();
    }
});
function fecharImagem() {
    modal.style.display = 'none';
    imagemAmpliada.src = '';
    document.body.style.overflow = 'auto';
}