const container = document.querySelector(".container");
const botaoReiniciar = document.querySelector("button");
let primeiraCarta = "";
let segundaCarta = "";
let cartasBloqueadas = false;

botaoReiniciar.addEventListener("click", () => location.reload());

let items = [
    { nome: "faustao", imagem: "/Assets/faustao.jpg" },
    { nome: "bluepen", imagem: "/Assets/bluepen.jpg" },
    { nome: "cafe", imagem: "/Assets/cafe.jpg" },
    { nome: "galocego", imagem: "/Assets/galocego.jpg" },
    { nome: "gordinho", imagem: "/Assets/gordinho.jpg" },
    { nome: "jailson", imagem: "/Assets/jailson.jpg" },
    { nome: "naosei", imagem: "/Assets/naosei.jpg" },
    { nome: "serjao", imagem: "/Assets/serjao.jpg" },
];

const virarCarta = (event) => {
    if (cartasBloqueadas) return;

    const divCarta = event.target;

    if (divCarta.classList.contains("carta-virada")) return;

    const imgCarta = document.createElement("img");
    const carta = items.find((meme) => meme.nome === divCarta.getAttribute("data-carta"));

    imgCarta.setAttribute("src", carta.imagem);
    imgCarta.classList.add("imgCarta");

    divCarta.classList.add("carta-virada");
    divCarta.appendChild(imgCarta);

    if (!primeiraCarta) {
        primeiraCarta = divCarta;
    } else if (!segundaCarta) {
        segundaCarta = divCarta;

        cartasBloqueadas = true;


        if (primeiraCarta.getAttribute("data-carta") === segundaCarta.getAttribute("data-carta")) {
            primeiraCarta = "";
            segundaCarta = "";
            cartasBloqueadas = false;
        } else {
            setTimeout(() => {
                primeiraCarta.classList.remove("carta-virada");
                segundaCarta.classList.remove("carta-virada");
                primeiraCarta.innerHTML = "";
                segundaCarta.innerHTML = "";
                primeiraCarta = "";
                segundaCarta = "";
                cartasBloqueadas = false;
            }, 600);
        }
    }
};

function criarCartas() {
    let itemsDuplicados = [...items, ...items];
    let memes = itemsDuplicados.sort(() => Math.random() - 0.5);

    memes.forEach((meme) => {
        const divCarta = document.createElement("div");
        divCarta.classList.add("carta");
        divCarta.setAttribute("data-carta", meme.nome);
        divCarta.addEventListener("click", virarCarta);
        container.appendChild(divCarta);
    });
}

criarCartas();