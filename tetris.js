
var canvahtml = document.getElementById("tetris");

var canva = canvahtml.getContext("2d");
//https://www.w3schools.com/tags/canvas_strokerect.asp

const lliure = "grey"; 

var tauler= [];
for( f = 0; f <20; f++){

    tauler[f] = [];

    for(c = 0; c < 8; c++){

        tauler[f][c] = lliure;
        
    }

}



function casella(x,y,color){

    canva.fillStyle = color;
    canva.fillRect(x*15,y*15,15,15);

    canva.strokeStyle = "negro";
    canva.strokeRect(x*15,y*15,15,15);
}



function crearTauler(){
    for( f = 0; f <20; f++){

        for(c = 0; c < 8; c++){

            casella(c,f,tauler[f][c]);
        }

    }

}
const I = [
    [
        [0, 0, 0, 0],
        [1, 1, 1, 1],
        [0, 0, 0, 0],
        [0, 0, 0, 0]
    ]
];


const ColorPeces= [    
    [I,"red"],  
];

function escollirPeca(){

    var f = Math.floor(Math.random() * 1) 

    return new peca( ColorPeces[f][0] , ColorPeces[f][1]);
    
}

var p = escollirPeca();
       
         
         
function peca(I,color){
    this.peca = I;
    this.color = color;
    
    this.pecaPos = 0; //Les 4 posicions de cada peça seran un array i es sabra en quina posicio estant presionant un boto i substituint dins de x i y les posicions de la peç
    this.pecaJoc = this.peca[this.PecaPos];
    
    this.x = 3;
    this.y = -2;
}

peca.prototype.pintar = function(color){
    for( f = 0; f < this.peca.length; f++){
        for(c = 0; c < this.peca.length; c++){
           
            if( this.pecaJoc[f][c]){
                casella(this.x + c,this.y + f, color);
            }
        }
    }
}




peca.prototype.moureDreta = function(){
    if(!this.contacte(this.pecaJoc,1,0)){
        this.pintar(lliure);
        this.x++;
        this.pintar(this.color);
    }
}

peca.prototype.moureEsquerra = function(){
    if(!this.contacte(this.pecaJoc,-1,0)){
        this.pintar(lliure);
        this.x--;
        this.pintar(this.color);
    }
}

peca.prototype.contacte = function(peca,x,y,){

    for( f = 0; f < peca.length; f++){

        for(c = 0; c < peca.length; c++){
            
            var x2 = this.x + c + x;
            var y2 = this.y + f + y;


            if(y2 < 0 || !peca[f][c]){
                continue;
            }
            
            if( x2 < 0 || x2 >= 8 || y2 >= 20 || tauler[y2][x2]!=lliure){
                return true;
            }
        }
    }
    return false;
}

document.addEventListener("keydown",moviment);

function moviment(event){
    
    if(event.keyCode == 39){
        p.moureDreta();
        iniciJoc= Date.now();
    }
    
    if(event.keyCode == 39){
        p.moureDreta();
        dropStart = Date.now();  
    }
    
}
peca.prototype.tope = function(){

    for( f = 0; f < this.pecaJoc.length; f++){

        for(c = 0; c < this.pecaJoc.length; c++){

            tauler[this.y+f][this.x+c] = this.color;
        }
        
    }
    for(f = 0; f < 25; f++){

        var filaplena = false;

        for( c = 0; c < 8; c++){

            filaplena = filaplena && (tauler[f][c] != lliure);
        }
    
            
        }}

     crearTauler();  
    
}

var iniciJoc = Date.now();
var fiJoc = false;
function baixada(){
        p.baixar();
        iniciJoc = Date.now();
    
    if( !fiJoc){
        requestAnimationFrame(baixada);
    }
}

crearTauler(); //Inici Joc
baixada();
