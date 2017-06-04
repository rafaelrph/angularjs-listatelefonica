angular.module("listaTelefonica").controller("novoContatoCtrl", function($scope, contatosAPI, $location, operadoras){
	$scope.app = "Lista Telefonica";
	$scope.operadoras = operadoras.data;

	$scope.adicionarContato = function(contato){
		contatosAPI.saveContato(contato).then(function(data, success){
			delete $scope.contato;
			$scope.contatoForm.$setPristine();
			$location.path("/contatos");
		}, function(error){
			console.log(error);
		});
	};

});