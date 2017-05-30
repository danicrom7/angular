

class MainController{


    $onInit(){
        this.incremento = 10;
        
        this.total = this.incremento;
    }

    botonMas() {
        this.total += parseInt(this.incremento)
        
     //
    }
    botonMenos(){
       this.total -= parseInt(this.incremento)
       
    }
    //ajustarColor(){
        //this.oClaseTotal
    //}
}

angular.module("miApp",[]).controller("MainController", MainController);