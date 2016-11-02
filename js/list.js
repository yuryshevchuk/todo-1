define('list', function(){

	var list = {
		addItem: function(data, newTask, newTag){
			data.items.unshift({
				"id": getHashId(),
				"text": newTask,
				"tag": newTag,
				"item_done": false
			})
			return data;
		},

		delItem: function(data, id){
			var target_element;
			for (var i = data.items.length - 1; i >= 0; i--) {
				if (data.items[i].id == id) {target_element = i;}
			}
			data.items.splice(target_element, 1);
			return data;
		},
		doneItem: function(data, id){
			var target_element;
			
			for (var i = data.items.length - 1; i >= 0; i--) {
				if (data.items[i].id == id) {
					if (data.items[i].item_done){
						data.items[i].item_done = false;
						data.items.unshift(data.items[i])
						data.items.splice(i+1, 1);
						break;
					}
					else {
						data.items[i].item_done = true;
						data.items.push(data.items[i]);	
						data.items.splice(i, 1);
						break;
					}
				}
				}
			return data;
		},
	
		editItem: function(data, id) {
			var target_element;
			for (var i = data.items.length - 1; i >= 0; i--) {
				if (data.items[i].id == id) {target_element = i;}
			}
			return target_element;
		},
		filterItem: function(data, text){
			var result = {items: []};
			for (var i = 0; i <= data.items.length - 1; i++) {
				if (data.items[i].tag == text) {
					result.items.push(data.items[i]);
				}
			}	
			return result;
		}
	}

	function getHashId(){
		var arr = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
		var hash = '';
		for (var i = 1; i <=10; i++) {
			hash += arr[Math.round(Math.random()*(arr.length-1)) ];
		}
		return hash;
	}


	return list;

});