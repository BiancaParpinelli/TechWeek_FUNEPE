const botao = document.getElementById("tema");
botao.addEventListener("click", function() {
    document.body.classList.toggle("escuro");
    if (document.body.classList.contains("escuro")) {
        botao.innerHTML = '<i class="bi bi-brightness-high-fill"></i> Modo Claro';
    } else {
        botao.innerHTML = '<i class="bi bi-moon-fill"></i> Modo Escuro';
    }
});