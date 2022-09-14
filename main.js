function setup(){
video=createCapture(VIDEO);
video.size(550,500);
canvas=createCanvas(550,500);
canvas.position(600,80);
posenet=ml5.poseNet(video,modelLoaded);
posenet.on('pose',gotPoses);
}
function draw(){
background('#00FF00');
}
function modelLoaded(){
console.log("poseNet is Initiulized");
}
function gotPoses(results){
if(results.length>0){
console.log(results);
}
}