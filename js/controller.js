var todo = angular.module('todo', []);

todo.filter('startFrom', function(){
  return function(input, start){
    return input.slice(start);
  }
})
todo.controller('todoCtrl', function todoCtrl($scope){
	$scope.filtertag = '';
	$scope.data = [];
	$scope.modal = {};



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
	 	$scope.data.unshift({
	 		"text": $scope.text,
	 		"tag": $scope.tag,
	 		"item_done": false
	 	});
	 	$scope.text = '';
	 	$scope.tag = '';
	}

	$scope.filterItems = function(e) {
	 	$scope.filtertag = e.target.innerText;
	}
	
	$scope.filterClear = function() {
		$scope.filtertag = '';
	}

});


todo.directive('itemtask', function() {
	return {
		restrict: 'E',
		templateUrl: 'template/itemTask.html',
		scope: {
			item: '=',
			modal: '=',
			data: '='
		},
		controller: function ($scope) {
			$scope.edit = function () {
				$scope.modal.open($scope.item)
			}
			$scope.delete = function(data, i) {
				data.splice(i, 1);
			}
		}
	}
})

todo.directive('modal', function() {
	return {
		restrict: 'E',
		templateUrl: 'template/modal.html',
		scope: {
			modal: '='
		},
		controller: function ($scope) {
			$scope.modal.open = function(item) {
				$scope.opened = true;
				$scope.buffer_text = item.text;
				$scope.buffer_tag = item.tag;
				$scope.item = item;
			}
			$scope.cancel = function () {
				$scope.item.text = $scope.buffer_text;
				$scope.item.tag = $scope.buffer_tag;
				$scope.opened = false;
			}
			$scope.confirm = function () {
				$scope.opened = false;
			}
		}
	}
})

todo.directive('todoTable', function() {
	return {
		restrict: 'E',
		templateUrl: 'template/todoTable.html',
		scope: {
			data: '=',
			itemsPerPage: '='
		},
		controller: function ($scope) {
			$scope.currentPage = 0;
		  	$scope.firstPage = function() {
		    	return $scope.currentPage == 0;
		  	}
		  	$scope.lastPage = function() {
		    	var lastPageNum = Math.ceil($scope.data.length / $scope.itemsPerPage - 1);
		    	return $scope.currentPage == lastPageNum;
		  	}
		  	$scope.numberOfPages = function(){
		    	return Math.ceil($scope.data.length / $scope.itemsPerPage);
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
		}
	}
})