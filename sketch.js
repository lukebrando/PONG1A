var imagem1;


//criar variáveis da bolinha
let xBolinha = 300;
let yBolinha = 200;
let diametro = 20;
let velocidadeXBolinha = 5;
let velocidadeYBolinha = 5;
let raio = diametro/2;

//criar variáveis raquete
let xRaq = 5;
let yRaq = 160;
let largura = 10;
let altura = 80;
let xRaq2 = 585;
let yRaq2 = 160;

//variáveis placar
let meusPontos = 0;
let pontosDoOponente = 0;

function setup() {
  createCanvas(600, 400);
  imagem1 = loadImage('1.jpg')
}

function draw() {
  background(imagem1,70)
  circle(xBolinha, yBolinha, diametro);
  xBolinha += velocidadeXBolinha;
  yBolinha += velocidadeYBolinha;
  if(xBolinha + raio>width || xBolinha - raio< 0)
    velocidadeXBolinha *= -1
  if(yBolinha + raio > height || yBolinha - raio< 0)
    velocidadeYBolinha *= -1
  rect(xRaq,yRaq,largura,altura)
  if(keyIsDown('87'))
    yRaq -= 5;
  if(keyIsDown('83'))
    yRaq += 5;
  rect(xRaq2,yRaq2,largura,altura)
  if(keyIsDown(UP_ARROW))
    yRaq2 -= 5;
  if(keyIsDown(DOWN_ARROW))
    yRaq2 += 5;
 
  //colisão bolinha raquete
  if(xBolinha - raio < xRaq + largura && yBolinha - raio < yRaq + altura && yBolinha + raio > yRaq)
    velocidadeXBolinha *= -1
  if(xBolinha + raio > xRaq2 && yBolinha - raio < yRaq2 + altura && yBolinha + raio > yRaq2)
    velocidadeXBolinha *= -1
 
  if(xBolinha + raio > 600)
    meusPontos ++;
  if(xBolinha - raio < 0)
    pontosDoOponente ++;
  fill('BLACK');
  textSize(30);
  text(meusPontos,100,30)
  text(pontosDoOponente, 500,30)
 
}