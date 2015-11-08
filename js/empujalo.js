$(function() {
	
	Parse.$ = jQuery;
	// Replace this line with the one on your Quickstart Guide Page
	Parse.initialize("HIdHMohXXU001RA3Mprd0PVxheSKZvKTV2aCETM4", "B2zi3VC0duOrR6mcAJdspek1DrnWi9LIyxWQ33ih");
	

	var Blog = Parse.Object.extend("Blog"); // clase

	var Blogs = Parse.Collection.extend({
	    model: Blog
	});

	var blogs = new Blogs();

	blogs.fetch({
	    success: function(blogs) {
	         var blogsView = new BlogsView({ collection: blogs });
			 blogsView.render();
			 $('.main-container').html(blogsView.el);
	    },
	    error: function(blogs, error) {
	        console.log(error);
	    }
	});


	console.log("Hola....");

	
	var BlogsView =  Parse.View.extend({
	    template: Handlebars.compile($('#blogs-tpl').html()),
	    render: function(){ 
	        var collection = { blog: this.collection.toJSON() };
	        this.$el.html(this.template(collection));
	    }
	});
	

 
/*
    var TestObject = Parse.Object.extend("TestObject");
    var testObject = new TestObject();
    testObject.save({foo: "bar"}).then(function(object) {
      alert("yay! it worked");
    });
*/
     
});



