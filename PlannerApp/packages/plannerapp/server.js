if (Meteor.isServer) {
	Meteor.methods({
		removeAllCollections: function(){
			PA.Appointments.remove({});
			PA.UpcomingAppointments.remove({});
			PA.Tasks.remove({});
			PA.UpcomingTasks.remove({});
			PA.Groceries.remove({});
		},
		weather: function(){
			var weather = Npm.require('Openweather-Node');
			weather.now("Antwerp",function(err, aData)
			{
				var temperature = aData.getDegreeTemp();
				temp = _.extend({}, {temperature: Math.round(temperature.temp_min)});
				console.log(temp);
				if(err) console.log(err);
			});
			PA.Weather.remove({});
			PA.Weather.insert(temp);
		}
	});
}
