img = "";
state = "";
function preload(){
img = loadImage("pop-waterbottles-index-1594404970.jpg");
}
function setup(){
canvas = createCanvas(400,400);
canvas.center();
objectDetector = ml5.objectDetector("cocossd",modelLoaded);
}
function draw(){
image(img,0,0,400,400);
fill("red");
text("Bottle",10,60);
noFill();
stroke("#001eff");
rect(5, 30, 100, 370, 20);

text("Bottle",110,40);
noFill();
stroke("#001eff");
rect(105, 15, 70, 380, 20);

text("Bottle",190,60);
noFill();
stroke("#001eff");
rect(180, 45, 70, 350, 20);

text("Bottle",270,60);
noFill();
stroke("#001eff");
rect(250, 25, 70, 370, 20);

text("Bottle",340,60);
noFill();
stroke("#001eff");
rect(320, 25, 70, 370, 20);
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