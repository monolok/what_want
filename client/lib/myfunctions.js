Meteor.myfunctions = {
	ranges: function () {
		var number_of_posts = Posts.find().count()
		var biggest_counter = Posts.find({}, {sort: {counter: -1}}).fetch()[0].counter
		var smallest_counter = Posts.find({}, {sort: {counter: 1}}).fetch()[0].counter

		var range = biggest_counter / 5

		var range1 = smallest_counter + range
		var range2 = range1 + range
		var range3 = range2 + range
		var range4 = range3 + range
		var range5 = range4 + range

		var range_dico = {
			"range1": [range1],
			"range2": [range2],
			"range3": [range3],
			"range4": [range4],
			"range5": [range5]
		}

		return range_dico;
	}
}