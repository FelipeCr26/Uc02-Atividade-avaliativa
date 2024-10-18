const container = document.querySelector(".container");
const botoaReiniciar = document.querySelector("button");
let cartas;
let primeiraCarta = "";
let segundaCarta = "";

botoaReiniciar.addEventListener("click", () => location.reload());

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
    const divCarta = event.target
    console.log(event.target)
    const imgCarta = document.createElement("img")
    const carta = items.find((meme) => meme.nome === divCarta.getAttribute("data-carta"))

    console.log(carta)
    imgCarta.setAttribute("src", carta.imagem)
    imgCarta.classList.add("imgCarta")

    divCarta.classList.add("carta-virada");
    divCarta.appendChild(imgCarta)
    if (!primeiraCarta) {
        primeiraCarta = divCarta;
    } else if (!segundaCarta) {
        segundaCarta = divCarta;
    }
}

function criarCartas() {
    let itemsDuplicados = [...items, ...items];
    let memes = itemsDuplicados.sort(() => Math.random() - 0.5);

    memes.forEach((meme) => {
        const divCarta = document.createElement("div")
        divCarta.classList.add("carta")
        divCarta.setAttribute("data-carta", meme.nome)
        divCarta.addEventListener("click", virarCarta)
        container.appendChild(divCarta)
    })
}
criarCartas();


function checarCartas() {
    const primeiroMeme = primeiraCarta.getAttribute("data-carta");
    const segundoMeme = segundaCarta.getAttribute("data-carta");

    if (primeiroMeme == segundoMeme) {
        primeiraCarta = "";
        segundaCarta = "";
    } else {
        setTimeout(() => {
            primeiraCarta.classList.remove("carta-virada");
            segundaCarta.classList.remove("carta-virada");

            primeiraCarta = "";
            segundaCarta = "";
        }, 600);
    }
}
checarCartas()