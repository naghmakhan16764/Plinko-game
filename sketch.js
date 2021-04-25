var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions =[];
var divisionHeight=300;
var score =0;
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);

  //create division objects
  for (var k = 0; k <=80; k = k + 80) {
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }

  for (var k = 0; k <=150; k = k + 150) {
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }

  for (var k = 0; k <=220; k = k + 220){
    divisions.push(new Divisions(k, height-divisionHeight/2, 10,divisionHeight));

  }

  for (var k = 0; k <=290; k = k + 290){
    divisions.push(new Divisions(k, height-divisionHeight/2, 10,divisionHeight));

  }
  
  for (var k = 0; k <=360; k = k + 360 ){
    divisions.push(new Divisions(k, height-divisionHeight/2, 10,divisionHeight));

  }
  
  for (var k = 0; k <=430; k = k + 430){
    divisions.push(new Divisions(k, height-divisionHeight/2, 10,divisionHeight));

  }

  for (var k = 0; k <=500; k = k + 500){
    divisions.push(new Divisions(k, height-divisionHeight/2, 10,divisionHeight));

  }

  for (var k = 0; k <=570; k = k + 570){
    divisions.push(new Divisions(k, height-divisionHeight/2, 10,divisionHeight));

  }

  for (var k = 0; k <=640; k = k + 640){
    divisions.push(new Divisions(k, height-divisionHeight/2, 10,divisionHeight));

  }

  for (var k = 0; k <=710; k = k + 710){
    divisions.push(new Divisions(k, height-divisionHeight/2, 10,divisionHeight));

  }

  for (var k = 0; k <=780; k = k + 780){
    divisions.push(new Divisions(k, height-divisionHeight/2, 10,divisionHeight));

  }
  



  //create 1st row of plinko objects
  for (var j = 75; j <=width; j=j+50) { 
    plinkos.push(new Plinko(j,75));
  }

  //create 2nd row of plinko objects
  for (var j = 50; j <=width-10; j=j+50) 
  {
    plinkos.push(new Plinko(j,175));
  }

  //create 3rd row of plinko objects
   for (var j = 25; j <=width-10; j=j+50)
   {
     plinkos.push(new Plinko(j,275));
   }
  
  //create 4th row of plinko objects
  for (var j = 25; j <=width-10; j=j+50)
  {
    plinkos.push(new Plinko(j,375));
  }

  //create particle objects
  
    
}
 
var particles=[];
var plinkos=[];
var division=[];

function draw() {
  background("black");
  textSize(20)
 
  Engine.update(engine);
  ground.display();
  
  //display the plinkos 
  for (var i = 0; i < plinkos.length; i++) {
    plinkos[i].display();   
  }

  for (var i = 0; i < plinkos.length; i++){
    plinkos[i].display();
  }   
  //display the divisions
  for (var k = 0; k < divisions.length; k++) {
    divisions[k].display();
  }

  
  for (var k = 0; k < divisions.length; k++){
    division[k].diaplay();
  }

  for (var k = 0; k < divisions.length; k++){
    division[k].diaplay();
  }

  for (var k = 0; k < divisions.length; k++){
    division[k].diaplay();
  }

  for (var k = 0; k < divisions.length; k++){
    division[k].diaplay();
  }

  for (var k = 0; k < divisions.length; k++){
    division[k].diaplay();
  }

  for (var k = 0; k < divisions.length; k++){
    division[k].diaplay();
  }

  for (var k = 0; k < divisions.length; k++){
    division[k].diaplay();
  }

  for (var k = 0; k < divisions.length; k++){
    division[k].diaplay();
  }

  for (var k = 0; k < divisions.length; k++){
    division[k].diaplay();
  }

  for (var k = 0; k < divisions.length; k++){
    division[k].diaplay();
  }
  if (frameCount %60 === 0) {
    particles.push(new Particle(random(100,70),10,10))
  }

  for (var h = 0; h<particles.lenght; h++){
    particles[h].display();
  }
   

  //display the paricles 
   
  
}