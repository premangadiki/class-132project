status ="";

function preload(){
        img = loadImage('http://images.traditionalhome.mdpcdn.com/sites/traditionalhome.com/files/styles/facebook_og_image/public/slide/p_100541130.jpg?itok=uLt7Bia3');
}

function setup(){
    canvas = createCanvas(640 , 420);
    canvas.center();
    objectDetecter = ml5.objectDetecter('cocossd' , modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Object";

}

function modelLoaded(){
    console.log("COCOSD is initialized");
    status = true;
    objectDetecter.detect(img , gotresults);
}

function gotresults(){
    
}
