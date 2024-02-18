//Crea la aplicacion
var aplicacion = angular.module('Inicial',[]).controller('controlador', function ($scope, $interval)
{
   $scope.name = "",
   $scope.ap_pat = "",
   $scope.ap_mat = "",
   $scope.telefono = "",
   $scope.email = "",
   $scope.clave = ""
   $scope.sexo = "",
   $scope.fecha_nacimiento = "",
   $scope.facultad = "",
   $scope.campus = "",
   $scope.semestre = "",
   $scope.direccion = "",
   $scope.expectativas = "",
   $scope.campus1 = false,
   $scope.campus2 = false,
   $scope.campus3 = false,

   //Se la pasa actualizando el objeto dinámico
   $interval(function (){
      Objeto_dinamico()
   },1000);

});