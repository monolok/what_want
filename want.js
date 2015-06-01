if (Meteor.isClient) {

  Meteor.subscribe("posts");

  Template.want_posts.helpers({

  	posts: function () {
  		return Posts.find({});
  	}

  });

  Template.want_posts.events({

  	"click .btn": function() {
  		var word = document.getElementsByClassName("form-control")[0].value;
  		var counter = 1;
  		Meteor.call("displayAndAddPost", word, counter);
      if (pass) {
        $(".posts_form").hide();
        $(".posts_index").show();        
      };

  	},

  	"keydown input.form-control": function(event) {
  		if (event.which == 13) {
        var word = document.getElementsByClassName("form-control")[0].value
        var counter = 1		
        Meteor.call("displayAndAddPost", word, counter)
        if (pass) {
          $(".posts_form").hide();
          $(".posts_index").show();        
        };
        return false;
  		};
  	}  	

  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
