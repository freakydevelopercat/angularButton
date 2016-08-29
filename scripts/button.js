var app = angular.module('myapp', []);
app.controller('someCtrl', ['$scope', function($scope){

      angular.element(document).ready(function (){
            var elem0 = document.querySelector('.js-switch');
            var switchery = new Switchery(elem0, { color: '#7c8bc7' });

            var elem1 = document.querySelector('.js-switch1');
            var switchery = new Switchery(elem1, {  color : '#64bd63', secondaryColor:'white', jackColor: '#64bd63', size:'small' });

            var elem2 = document.querySelector('.js-switch2');
            var switchery = new Switchery(elem2, {  color : '#f8ac59', secondaryColor:'#f8ac59', jackColor: 'white', size:'large' });

      });
}]);

app.directive('buttonswitch', function() {
  return {
    template: function (elem, attr){
      var a= '<label class="switch '+ attr.color + ' '+ attr.size + '"><input type="checkbox"' + attr.checked+'><i></i></label>';
      return a;    
    } 
  }
}
);