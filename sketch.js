//variaveis bolinha
let xBolinha = 300;
let yBolinha = 200;
let diametro = 13;
let raio = diametro / 2;

//velocidade da bolinha
let velocidadeXbola = 5;
let velocidadeYbola = 5;

//variaveis da raquete
let xRaquete = 5
let yRaquete = 150
let raqueteLargura = 10
let raqueteComprimento = 90

let colidiu = false;

//variaveis oponente
let xRaqueteOponente = 580;
let yRaqueteOponente = 150

let velocidadeYOponente;

//placar jogo

let meusPontos = 0;
let pontosOponente = 0;

//sons
let raquetada;
let ponto;
let trilha;

// function preload(){
//   trilha = loadSound("trilha.mp3")
//   ponto = loadSound("ponto.mp3")
//   raquetada = loadSound("raquetada.mp3")
  
// }


function setup() {
  createCanvas(600, 400);
  //trilha.loop();
}

function draw() {
  background(0);
  mostraBolinha();  
  movimentaBolinha();
  verificaColisaoBorda(); 
  mostraRaquete(xRaquete, yRaquete);
  movimentoRaqueteJogador();
  colisaoRaquete(xRaquete, yRaquete);
  mostraRaqueteOponente();
  movimentoRaqueteOponente();
  colisaoRaquete(xRaqueteOponente, yRaqueteOponente);
  incluiPlacar();
  marcaponto();
} 

function mostraBolinha(){
  circle(xBolinha, yBolinha, diametro);
}

function movimentaBolinha(){
  xBolinha += velocidadeXbola;
  yBolinha += velocidadeYbola;
}

function verificaColisaoBorda(){
    if (xBolinha + raio > width || xBolinha - raio < 0){
    velocidadeXbola *= -1;
  }
  
  if(yBolinha + raio> height || yBolinha - raio < 0 ){
     velocidadeYbola *= -1
  }  
}

function mostraRaquete(x, y){
    rect(x, y, raqueteLargura, raqueteComprimento);
}

function mostraRaqueteOponente(){
      rect(xRaqueteOponente, yRaqueteOponente, raqueteLargura, raqueteComprimento);
}

function movimentoRaqueteJogador(){
  if (keyIsDown(UP_ARROW)){
    yRaquete -= 10;
  }
  if (keyIsDown(DOWN_ARROW)){
    yRaquete += 10;
  }
}

function colisaoRaquete(x, y){
  colidiu  = collideRectCircle(x, y, raqueteLargura, raqueteComprimento, xBolinha, yBolinha, raio);
  if(colidiu){
    velocidadeXbola *= -1
    //raquetada.play()
  }
}


function movimentoRaqueteOponente(){
   if (keyIsDown(87)){
    yRaqueteOponente -= 10;
  }
  if (keyIsDown(83)){
    yRaqueteOponente += 10;
  }
}

function incluiPlacar(){
  stroke(255);
  textAlign(CENTER)
  textSize(16)
  fill(color(244, 40, 0))
  rect(130, 5, 40, 20)
  fill(255)
  text(meusPontos, 150, 20)
  fill(color(244, 40, 0))
  rect(430, 5, 40, 20)
  fill(255)
  text(pontosOponente, 450, 20)
  
}

function marcaponto(){
  if (xBolinha > 590){
    meusPontos += 1;
   //  ponto.play();
  }
  if(xBolinha < 10){
    pontosOponente +=1;
 //  ponto.play();
  }
}