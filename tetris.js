
var canvahtml = document.getElementById("tetris");

var canva = canvahtml.getContext("2d");
//https://www.w3schools.com/tags/canvas_strokerect.asp

const lliure = "grey"; 

var tauler= [];
for( f = 0; f <20; f++){

    tauler[f] = [];

    for(c = 0; c < 10; c++){

        tauler[f][c] = lliure;
        
    }

}

crearTauler();

function crearTauler(){
    for( f = 0; f <20; f++){

        for(c = 0; c < 10; c++){

            casella(c,f,tauler[f][c]);
        }

    }

}

 function GeneraPecaAleatoria()
         { var peces = [
                 [[[0,0,0,0],[0,1,1,0],[0,1,1,0],[0,0,0,0]],"groc"],
                 [[[0,1,0,0],[0,1,0,0],[0,1,0,0],[0,1,0,0]],"lila"],
                 [[[0,0,0,0],[0,1,1,0],[1,1,0,0],[0,0,0,0]],"verd"],
                 [[[0,0,0,0],[0,1,1,0],[0,0,1,1],[0,0,0,0]],"roig"],
                 [[[0,1,0,0],[0,1,0,0],[0,1,1,0],[0,0,0,0]],"blau"],
                 [[[0,1,1,0],[0,1,0,0],[0,1,0,0],[0,0,0,0]],"taronga"],
                 [[[0,0,0,0],[1,1,1,0],[0,1,0,0],[0,0,0,0]],"morat"] ]
           var numeroAleatori = Math.round(Math.random()*6);                      
           return peces[numeroAleatori];     
       }
       
       var pa = GeneraPecaAleatoria();
         var p = new Peça(pa[0],pa[1]);
         
         
function peca("arrayPosicio",color){
    this.peca = "arrayPosicio";
    this.color = color;
    
    this.pecaPos = 0; //Les 4 posicions de cada peça seran un array i es sabra en quina posicio estant presionant un boto i substituint dins de x i y les posicions de la peça
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
            
            if( x2 < 0 || x2 >= 10 || y2 >= 20 || tauler[y2][x2]!=lliure){
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

        for( c = 0; c < 10; c++){

            filaplena = filaplena && (tauler[f][c] != lliure);
        }

        if(!filaplena){

            for( c = 0; c < 10; c++){

                tauler[0][c] = lliure;
            }

            for( y = f; y > 1; y--){

                for( c = 0; c < 10; c++){

                    tauler[y][c] = tauler[y-1][c];
                    
                }
            }
           
            
            
        }}

     crearTauler();  
    
}
    
