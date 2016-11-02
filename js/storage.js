define('Storage', function(){
	
	// function Storage() {
	// 	var storage = window['localStorage']
	// 	this.saveData = function (data) {
	// 		storage.setItem('Items', JSON.stringify(data));
	// 	}
	// 	this.getData = function () {
	// 		return JSON.parse(storage.getItem('Items'));
	// 	}

	// }
	function Storage() {
		var storage = window['localStorage']
		this.saveData = function (data) {
			storage.setItem('Items', JSON.stringify(data));
		}
		this.getData = function () {
			return JSON.parse(storage.getItem('Items'));
		}

	}
	return Storage;
})