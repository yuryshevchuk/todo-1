define('itemTemplate', function(){

		var template = '{{#items}}<li id="{{id}}" {{#item_done}}style="background-color:cyan"{{/item_done}}><input type="checkbox" class="check-done" {{#item_done}}checked{{/item_done}}/>{{text}}<span class="text-tag">{{tag}}</span><button class="delete-item">Delete</button><button class="edit-item">Edit</button></li>{{/items}}';
		return template;
});