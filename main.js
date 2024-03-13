img=""
status="";

function preload(){
img=loadImage("dog_cat.jpg");
}

function setup(){
    canvas = createCanvas(640,420);
    canvas.center();
   ObjectDetector = ml5.ObjectDetector('cocossd', modelLoaded);
   document.getElementById("status").innerHTML = "Status : Detecting objects";
   

}

function modelLoaded(){
    console.log("ModelLoaded!")
    status = true;
    ObjectDetector.detect(img, gotResult);
}

function gotResult(errors, results){
if (error){
    console.log(error);
}
console.log(results);
}


function draw(){
    image( img ,0 ,0 ,640 ,420);
    fill("#FF0000");
    text("Dog", 45 ,75);
    noFill();
    stroke('#FF0000')
    rect(30, 60, 450, 350);

    fill("#");
    text("cat", 320 ,120);
    noFill();
    stroke('#')
    rect(300, 90, 270, 320);


    fill("#0000FF");
    text("bowl", 260 ,320);
    noFill();
    stroke('#0000FF')
    rect(250, 300, 160, 320);

}
