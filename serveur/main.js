Posts = new Meteor.Collection('posts');
//Posts.remove({})

Meteor.methods({

	displayAndAddPost: function(word, counter) {

	var exist = Posts.findOne({word: word})

		if (word == "") {
			console.log("empty")

		}else if(exist != undefined ){
			//console.log(exist._id)
			Posts.update(exist._id, {$inc: {counter: 1}});
			$(".posts_form").hide();
			$(".posts_index").show();	
					
		}else{
			Posts.insert({
				word: word,
				counter: counter,
				createdAt: new Date()
			});
			$(".posts_form").hide();
			$(".posts_index").show();			
		}		
	}


});