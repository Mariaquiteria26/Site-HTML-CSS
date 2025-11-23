 const imagens = [
        "imagens/look1.png",
        "imagens/look2.png",
        "imagens/look3.png",
        "imagens/look4.png",
        "imagens/look5.png"
    ];

let indice = 0;

function atualizarImagem() {
    documento.getElementById("img").src = imagens[indice];
}

function proximo() {
    indice = (indice + 1) % imagens.length;
    atualizarImagem();
}

function anterior() {
    indice = (indice - 1 + imagens.length) % imagens.length;
    atualizarImagem();
}
