Posts = new Meteor.Collection('posts');
//Posts.remove({})

Meteor.methods({

	displayAndAddPost: function(word, counter) {

	var exist = Posts.findOne({word: word})

		if (word == "") {
			console.log("empty")
			pass = false

		}else if(exist != undefined ){
			//console.log(exist._id)
			Posts.update(exist._id, {$inc: {counter: 1}});
			pass = true
		}else{
			Posts.insert({
				word: word,
				counter: counter,
				createdAt: new Date()
			});
			pass = true
		}		
	}


});

Meteor.publish("posts", function () {
	return Posts.find({});
});