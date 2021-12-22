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
    objectDetector.detect(img5,gotResult);
}
function gotResult(error,results) {
    if(error) {
        console.log(error);
    }
    console.log(results);
}
function preload() {
    img5=loadImage('TV.jpeg');
}
function draw() {
    image(img5,0,0,640,420);
}