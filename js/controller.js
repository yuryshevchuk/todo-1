var todo = angular.module('todo', []);

todo.filter('startFrom', function(){
  return function(input, start){
    start = +start;
    // console.log('start='+start);
    return input.slice(start);
  }
})


todo.controller('todoCtrl', function todoCtrl($scope){
	
	$scope.currentPage = 0;
	$scope.itemsPerPage = 5;
	$scope.filtertag = '';
	$scope.data = [];
	$scope.editShow = false;
	var lenghtItem = 0;

	

  	$scope.firstPage = function() {
    	return $scope.currentPage == 0;
  	}
  	$scope.lastPage = function() {
    	var lastPageNum = Math.ceil(lenghtItem / $scope.itemsPerPage - 1);
    	return $scope.currentPage == lastPageNum;
  	}
  	$scope.numberOfPages = function(){
    	return Math.ceil(lenghtItem / $scope.itemsPerPage);
  	}
  	$scope.startingItem = function() {
    	return $scope.currentPage * $scope.itemsPerPage;
  	}
  	$scope.pageBack = function() {
    	$scope.currentPage = $scope.currentPage - 1;
  	}
  	$scope.pageForward = function() {
    	$scope.currentPage = $scope.currentPage + 1;
  	}


	$scope.uniqueTag = function() {
		var tagScope = [];
			for (var i = 0; i < $scope.data.length; i++) {	
				if (tagScope.indexOf($scope.data[i].tag) == -1){
					tagScope.push($scope.data[i].tag);
				}
			}
		return tagScope;
	}



	$scope.chengeDone = function(i){
		var tempobject;
		if ($scope.data[i].item_done==true){
			tempobject = $scope.data[i];
			$scope.data.splice(i, 1);
			$scope.data.push(tempobject);	
		}
		else {
			tempobject = $scope.data[i];
			$scope.data.splice(i, 1);
			$scope.data.unshift(tempobject);
			console.log($scope.data);
		}
	}


	$scope.addItems = function(text, tag) {
	 	console.log(text, tag);
	 	// e.preventDefault();
	 	$scope.data.unshift({
	 		"text": $scope.text,
	 		"tag": $scope.tag,
	 		"item_done": false
	 	});
	 	lenghtItem = $scope.data.length;
	 	$scope.text = '';
	 	$scope.tag = '';
	}
	$scope.delItems = function( i ) {
	 	// e.preventDefault();
	 	$scope.data.splice(i,1);
	}
	$scope.editItems = function( i ) {
	 	// e.preventDefault();
	 	$scope.editShow = true;
	 	$scope.edittext = $scope.data[i].text;
	 	$scope.edittag = $scope.data[i].tag;
	 	$scope.editid = i;
	}
	$scope.editOk = function() {
	 	// e.preventDefault();
	 	$scope.editShow = false;
		i = $scope.editid;
	 	$scope.data[i].text = $scope.edittext;
	 	$scope.data[i].tag = $scope.edittag;
	}
	$scope.editCansel = function() {
	 	// e.preventDefault();
	 	$scope.editShow = false;
	}



	$scope.filterItems = function(e) {
	 	// e.preventDefault();
	 	$scope.filtertag = e.target.innerText;
		lenghtItem = 0;
	 		for (var i = 0; i < $scope.data.length; i++) {	
				if ($scope.data[i].tag == $scope.filtertag){
					lenghtItem++;
				}
			}
	}
	
	$scope.filterClear = function() {
		$scope.filtertag = '';
		lenghtItem = $scope.data.length;
	}

});


todo.directive('itemtask', function() {
	return {
		restrict: 'E',
		templateUrl: 'template/itemTask.html',
		scope: {
			item: '='
		},
		controller: function ($scope) {
			console.log($scope.item)
			$scope.edit = function () {

			}
		}
	}
})

todo.directive('modal', function() {
	return {
		restrict: 'E',
		templateUrl: 'template/modal.html',
		scope: {
		},
		controller: function ($scope) {

		}
	}
})