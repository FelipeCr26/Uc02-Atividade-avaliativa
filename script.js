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

function criarCartas() {
    let itemsDuplicados = [...items, ...items];
    let memes = itemsDuplicados.sort(() => Math.random() - 0.5);

    memes.map((meme) => {
        container.innerHTML += `
    <div class="carta" data-carta=${meme.nome}>
    <div class="atras"></div>
    <div class="frente">
      <img src=${meme.imagem} width="180px" height="180px" />
    </div>`;
    });
}
criarCartas();

function virarCarta() {
    cartas = document.querySelectorAll(".carta");

    cartas.forEach((carta) => {
        carta.addEventListener("click", () => {
            if (primeiraCarta == "") {
                carta.classList.add("carta-virada");
                primeiraCarta = carta;
            } else if (segundaCarta == "") {
                carta.classList.add("carta-virada");
                segundaCarta = carta;
                checarCartas(carta);
            }
        });
    });
}
virarCarta();

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