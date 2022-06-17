video="";
statuss="";
objects=[];

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

    function gotResult(error,results){
        if(error){
            console.log(error);
        }
        console.log(results);
        objects=results;
    }


function draw(){
    image(video,0,0,480,320);

    if( statuss != ""){
    
        objectDetector.detect(video,gotResult);

       for(i=0;i<objects.length;i++){
           document.getElementById("status").innerHTML= "Status: Objects Detected";
           document.getElementById("number_of_objects").innerHTML= "# of objects detected: "+objects.length;
        
        fill("green");
        percent= floor(objects[i].confidence*100);
        text(objects[i].label+" "+percent+"%",objects[i].x+15,objects[i].y+15);
        noFill();
        stroke("blue");
        rect(objects[i].x,objects[i].y,objects[i].width,objects[i].height);   
        }
    }
}