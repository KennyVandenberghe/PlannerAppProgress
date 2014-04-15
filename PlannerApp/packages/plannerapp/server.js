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
			PA.Weather.remove({});
			var weather = Npm.require('Openweather-Node');
			weather.now("Antwerp",Meteor.bindEnvironment(function(err, aData)
			{
				if(err){
					console.log(err);
				}
				else{
					console.log("Success!");
					var temperature = aData.getDegreeTemp();
					temp = _.extend({}, {temperature: Math.round(temperature.temp_min)});
					PA.Weather.insert(temp);
				}
			}));
		},
		getTemperature: function(){
			PA.Weather.remove({});
			var weather = Npm.require('Openweather-Node');
			weather.now("Antwerp",Meteor.bindEnvironment(function(err, aData)
			{
				if(err){
					console.log(err);
				}
				else{
					console.log("Success!");
					var temperature = aData.getDegreeTemp();
					temp = _.extend({}, {temperature: Math.round(temperature.temp_min)});
					PA.Weather.insert(temp);
				}
			}));
		}
	});
}
