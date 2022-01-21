img = "";
state = "";
function preload(){
img = loadImage("wooden-double-bed-500x500.png");
}
function setup(){
canvas = createCanvas(400,400);
canvas.center();
objectDetector = ml5.objectDetector("cocossd",modelLoaded);
}
function draw(){
image(img,0,0,400,400);
fill("red");
text("Bed",10,170);
noFill();
stroke("#001eff");
rect(0, 150, 250, 200, 20);

text("Almirah",225,60);
noFill();
stroke("#001eff");
rect(220, 45, 190, 270, 20);
}
//rect(x,y,width,height,radius);
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