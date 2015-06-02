if (Meteor.isClient) {

  Meteor.subscribe("posts");

  Template.want_posts.helpers({

  	posts: function () {
  		return Posts.find({});
  	},

    range1: function () {
     if (this.counter <= Meteor.myfunctions.ranges().range1[0]) {
      //console.log("range1")
      return true
     };
    },

    range2: function () {
     if (this.counter > Meteor.myfunctions.ranges().range1[0] && this.counter <= Meteor.myfunctions.ranges().range2[0]) {
      //console.log("range2")
      return true
     };
    },

    range3: function () {
     if (this.counter > Meteor.myfunctions.ranges().range2[0] && this.counter <= Meteor.myfunctions.ranges().range3[0]) {
      //console.log("range3")
      return true
     };
    },

    range4: function () {
     if (this.counter > Meteor.myfunctions.ranges().range3[0] && this.counter <= Meteor.myfunctions.ranges().range4[0]) {
      //console.log("range4")
      return true
     };
    },

    range5: function () {
     if (this.counter > Meteor.myfunctions.ranges().range4[0]) {
      //console.log("range5")
      return true
     };
    }

  });

  Template.want_posts.events({

  	"click .btn": function() {
  		var word = document.getElementsByClassName("form-control")[0].value.toLowerCase();
  		var counter = 1;
  		Meteor.call("displayAndAddPost", word, counter);
      if (pass) {
        $(".posts_form").hide();
        $(".posts_index").show();        
      };

  	},

  	"keydown input.form-control": function(event) {
  		if (event.which == 13) {
        var word = document.getElementsByClassName("form-control")[0].value.toLowerCase()
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
