function setup(){
    video=createCapture(VIDEO);
    
    
    "<canvas><h1>Naman</h1></canvas>"=createCanvas(750,500);
    canvas.position(650,80);
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}

function draw(){
    image(video,0,150,400,400);
    background('#FFA500');
}

function modelLoaded(){
    console.log('posenet is initialized');
}

function gotPoses(results){
    if(results.length>0){
        console.log(results);
    }

}