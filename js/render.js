define('render', ['mustache', 'itemTemplate','tagTemplate'], function(mustache, itemTemplate, tagTemplate){
	
	var render = {
		list: function(data, template, renderTag){
			renderTag.html(mustache.render(template, data));
		}
	}
	return render;
})