angular.module("listaTelefonica").directive("uiAlert", function(){
	return {
		templateUrl: "alert.html",
		replace: true,
		scope: {
			title: "@",
			message: "="
		},
		transclude: true
	};
});