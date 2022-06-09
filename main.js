video="";
statuss="";


function preload(){
    video=createVideo("video.mp4");
}

function setup(){
    canvas=createCanvas(480,320);
    canvas.center();
    video.hide()
    }

    function start(){
     objectDetector= ml5.objectDetector("cocossd",modelLoaded);
     document.getElementById("status").innerHTML ="Status : Detecting Objects";
    }

    function modelLoaded(){
        console.log("Model is Loaded");
        statuss=true;
        video.speed(1);
        video.volume(0);
        video.loop();
    }


function draw(){
    image(video,0,0,480,320);
}