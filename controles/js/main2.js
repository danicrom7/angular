// Ejemplo del controller NO utilizando inyecciÃ³n del $scope,
// sino la forma controller ... as en la directiva
// tal como recomienta la guÃ­a de estilo de AngularJS de John Papa

angular.module("miApp", [])
.controller("MainController", MainController ); // fin de Maincontroller


 function MainController () {
    this.nombre = 'Pepe'; 
    this.nuevoPensamiento = ''; // declaracion innecesaria pero recomendable
    this.aPensamientos = [];

    this.botonAdd =  () => {
        this.aPensamientos.push(this.nuevoPensamiento); 
        this.nuevoPensamiento = '';
    }   
 }

