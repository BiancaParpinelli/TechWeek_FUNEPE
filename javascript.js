const botao = document.getElementById("tema");
botao.addEventListener("click", function() {
    document.body.classList.toggle("escuro");
    if (document.body.classList.contains("escuro")) {
        botao.innerHTML = '<i class="bi bi-brightness-high-fill"></i> Modo Claro';
    } else {
        botao.innerHTML = '<i class="bi bi-moon-fill"></i> Modo Escuro';
    }
});
/* daltonismo */
document.addEventListener("DOMContentLoaded", function () {
    const botao = document.getElementById("btnAcessibilidade");
    const menu = document.getElementById("menuDaltonismo");
    botao.addEventListener("click", function () {
        if (menu.style.display === "none") {
            menu.style.display = "block";
        } else {
            menu.style.display = "none";
        }
    });
    const modoSalvo = localStorage.getItem("modoDaltonismo");
    if (modoSalvo) {
        alterarModo(modoSalvo);
    }
});
function alterarModo(modo) {
    document.body.classList.remove(
        "protanopia",
        "deuteranopia",
        "tritanopia"
    );
    if (modo !== "normal") {
        document.body.classList.add(modo);
    }
    localStorage.setItem("modoDaltonismo", modo);
    document.getElementById("menuDaltonismo").style.display = "none";
}