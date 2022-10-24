/*Creo las variables hora, minutos y segundos, 
con valores en cero ya que la hora sera 00:00 y asi inicializo*/

let H = 0
let M = 0
let S = 0

function clock(){
    console.log(H+':'+M+':'+S); //Asi se mostrara en pantalla
    S = S + 1
    if (S > 59){
        S = 0
        M = M + 1
    }
    if (M > 59){
        M = 0
        H = H + 1
    }
    if (H > 23){
        H = 0
        M = 0
        S = 0
    }
    setTimeout(()=>{
        clock()
    }, 1000)
}
clock();
