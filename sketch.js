const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var maxDrops = 100;
var drop = [];
var umbrella;
var thunder;
var thunder1, thunder2, thunder3, thunder4;
var rand;
var frameInThunder;

function preload(){
    thunder1 = loadImage("1.png");
    thunder2 = loadImage("2.png");
    thunder3 = loadImage("3.png");
    thunder4 = loadImage("4.png");
}

function setup(){
    var canvas = createCanvas(600, 800);

    engine = Engine.create();
    world = engine.world;

    if (frameCount % 150 === 0){                                    //If frameCount not used, all drops drop down together
        for (var i = 0; i < maxDrops; i++){          //for loop = Basically an if condition in disguise. If (i), statement executed
            drop.push(new Drop(random(10, 590), random(-50, 300), PI/2));  //Pushes x and y pos values in array push (2-D)
        } 
    }
    umbrella = new Umbrella(295, 680, 10);
}

function draw(){
    background(0);
    Engine.update(engine);

    rand = Math.round(random(1, 4));
    if (frameCount % 100 === 0){
        if(thunder){
            console.log("Thunder made");
            if (thunder.destroy){
                console.log("Thunder destroyed");
            }
        }
        frameInThunder = frameCount;
        thunder = createSprite(random(20, 580), random(5, 20), 10, 10);
        switch(rand){
            case 1 : thunder.addImage(thunder1);
                break;
            case 2 : thunder.addImage(thunder2);
                break;
            case 3 : thunder.addImage(thunder3);
                break;
            case 4 : thunder.addImage(thunder4);
                break;        
            default : break;    
        }
        thunder.scale = 10;
        if (frameInThunder + 13 === frameCount && thunder){    //if (--- thunder) not written, thunder destroyed every time fIT+13 = fC, even when thunder not present
            thunder.destroy();
        }
    }

    for (var i = 0; i < maxDrops; i++){
        drop[i].display();                   //drop [i] consists of both x and y pos, and value of i keeps increasing by 1
        drop[i].updateY();
    }
    umbrella.display();
}   