angular.module("listaTelefonica").controller("listaTelefonicaCtrl", function($scope, contatos, operadoras){
	$scope.app = "Lista Telefonica";
	$scope.contatos = contatos.data;
	$scope.operadoras = operadoras.data;

	$scope.adicionarContato = function(contato){
		contatosAPI.saveContato(contato).then(function(data, success){
			delete $scope.contato;
			$scope.contatoForm.$setPristine();
			carregarContatos();
		}, function(error){
			console.log(error);
		});
	};

	$scope.apagarContato = function(contatos) {
		$scope.contatos = contatos.filter(function(contato) {
			if(!contato.selecionado) {
				return contato;
			}
		});
	};
	$scope.isContatoSelecionado = function(contatos) {
		var isContatoSelecionado = contatos.some(function(contato){
			return contato.selecionado;
		});
		return isContatoSelecionado;
	};


	$scope.isPreenchido = function(contato) {
		if(!contato) {
			return true;
		} else if(!contato.nome || !contato.telefone || !contato.operadora) {
			return true;
		} else {
			return false;
		}
	};

	$scope.ordenarPor = function(campo) {
		$scope.criterioOrdenacao = campo;
		$scope.direcaoOrdenacao = !$scope.direcaoOrdenacao;
	};


	var sincronizarContatoOperadoras = function() {
		for(var i=0; i < $scope.contatos.length; i++) {
			var contato = $scope.contatos[i];
			for(var j=0; j < $scope.operadoras.length; j++) {
				var operadora = $scope.operadoras[j];
				if(contato.operadora_id == operadora.id){
					contato.operadora = operadora;
				}
			}
		}	
	}

});