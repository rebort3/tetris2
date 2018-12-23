    var canvahtml = document.getElementById("tetris");
    var canva = canvahtml.getContext("2d");

    //https://www.w3schools.com/tags/canvas_strokerect.asp
    //https://desarrolloweb.com/articulos/color-relleno-trazado-canvas.html


    var lliure = "grey"; 

    var tauler = [];
    for( f = 0; f <25; f++){
         tauler[f] = [];
        for(c = 0; c < 8; c++){
            tauler[f][c] = lliure;
        }
    }

    crearTauler();
    caure();

    function casella(x,y,color){
        canva.fillStyle = color;
        canva.strokeStyle = "negro";

        canva.fillRect(x*15,y*15,15,15);
        canva.strokeRect(x*15,y*15,15,15);
    }

    function crearTauler(){
        for( f = 0; f <25; f++){
            for(c = 0; c < 8; c++){
                casella(c,f,tauler[f][c]);
    }}}

    const I = [
        [
            [0, 0, 0, 0],
            [1, 1, 1, 1],
            [0, 0, 0, 0],
            [0, 0, 0, 0]
        ]
    ];


    const peces = [    
        [I,"red"]
    ];

    function escollirPeca(){
        var f = Math.floor(Math.random() * 0) 
        return new peza(peces[f][0],peces[f][1]);
    }

    var p = escollirPeca();


    function peza(I,color){
        this.pesa = I;
        this.color = color;
        
        this.PesaPos = 0;
        this.pecaJoc = this.pesa[this.PesaPos];
        
        this.x = 3;
        this.y = -2;
    }

    peza.prototype.pintar = function(color){
        for( f = 0; f < this.pecaJoc.length; f++){
            for(c = 0; c < this.pecaJoc.length; c++){
                
                if( this.pecaJoc[f][c]){
                    casella(this.x + c,this.y + f, color);
    }}}}

    peza.prototype.baixa = function(){
        if(!this.contacte(0,1,this.pecaJoc)){
            this.pintar(lliure);
            this.y++;
            this.pintar(this.color);

        }else{

            for( f = 0; f < this.pecaJoc.length; f++){
            for(c = 0; c < this.pecaJoc.length; c++){

                if( !this.pecaJoc[f][c]){
                    continue;
                }

                if(this.y + f < 0){
                    

                    final = true;
                    break;
                }

                tauler[this.y+f][this.x+c] = this.color;
        }
    }

        for(f = 0; f < 25; f++){
            var esborrarFila = true;
            for( c = 0; c < 8; c++){
                esborrarFila = esborrarFila && (tauler[f][c] != lliure);
            }
            if(esborrarFila){

                for( y = f; y > 1; y--){
                    for( c = 0; c < 8; c++){
                        tauler[y][c] = tauler[y-1][c];
                    }
                }

                for( c = 0; c < 8; c++){
                    tauler[0][c] = lliure;
                }

            }
        }

        crearTauler();
        p = escollirPeca();
        }   
    }

    peza.prototype.moudreta = function(){
        if(!this.contacte(1,0,this.pecaJoc)){
            this.pintar(lliure);
            this.x++;
            this.pintar(this.color);
        }
    }

    peza.prototype.mouresquerra = function(){
        if(!this.contacte(-1,0,this.pecaJoc)){
            this.pintar(lliure);
            this.x--;
            this.pintar(this.color);
        }
    }

    peza.prototype.contacte = function(x,y,pesa){
        for( f = 0; f < pesa.length; f++){
            for(c = 0; c < pesa.length; c++){

                var x2 = this.x + c + x;
                var y2 = this.y + f + y;

                if(y2 < 0 || !pesa[f][c]){
                    continue;
                }
                if(x2 < 0 || x2 >= 8 || y2 >= 25 || tauler[y2][x2] != lliure){
                    return true;
                }
            }
        }
        return false;
    }


    document.addEventListener("keydown",tecles);

    function tecles(accio){
        if(accio.keyCode == 37){
            p.mouresquerra();
            var dataCaiguda = Date.now();
        }if(accio.keyCode == 39){
            p.moudreta();
           var dataCaiguda = Date.now();
        }
        if(accio.keyCode == 40){
            p.baixa();
            var dataCaiguda = Date.now();
        }
    }


    var dataCaiguda = Date.now();
    var final = false;
    
    function caure(){            
            var data = Date.now();
            var dataCaure = data - dataCaiguda;
    if(dataCaure > 500){
        p.baixa();
        dataCaiguda = Date.now();
    }
        if( !final){
            requestAnimationFrame(caure);
        }
    }
