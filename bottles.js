img=" ";
status=" ";
function setup() {
    canvas=createCanvas(640,420);
    canvas.center();
    objectDetector=ml5.objectDetector('cocoSSD',modelLoaded);
    document.getElementById("status").innerHTML="status: detecting objects";
}
function modelLoaded() {
    console.log("modelLoaded");
    status=true;
    objectDetector.detect(img2,gotResult);
}
function gotResult(error,results) {
    if(error) {
        console.log(error);
    }
    console.log(results);
}
function preload() {
    img2=loadImage('bottles.jpg');
}
function draw() {
    image(img2,0,0,640,420);
}