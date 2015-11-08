$(function() {
 
    Parse.$ = jQuery;
 
    // Replace this line with the one on your Quickstart Guide Page
    Parse.initialize("HIdHMohXXU001RA3Mprd0PVxheSKZvKTV2aCETM4", "B2zi3VC0duOrR6mcAJdspek1DrnWi9LIyxWQ33ih");
 
    var TestObject = Parse.Object.extend("TestObject");
    var testObject = new TestObject();
    testObject.save({foo: "bar"}).then(function(object) {
      alert("yay! it worked");
    });
 
});



