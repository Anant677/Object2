img = "";
state = "";
function preload(){
img = loadImage("666c191c19bea8d1a375662a70cbfe53.jpg");
}
function setup(){
canvas = createCanvas(400,400);
canvas.center();
objectDetector = ml5.objectDetector("cocossd",modelLoaded);
}
function draw(){
image(img,0,0,400,400);
fill("red");
text("tv",90,185);
noFill();
stroke("#001eff");
rect(80, 170, 200, 100, 20);

text("ac",190,60);
noFill();
stroke("#001eff");
rect(130, 45, 150, 100, 20);
}
//rect(x,y,width,height);
function modelLoaded(){
    console.log("model is initialized");
    state = true;
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
    objectDetector.detect(img,gotResult);
    }
    function gotResult(error,results){
    if(error){
        console.log(error);
    }else{
        console.log(results);
    }
    }