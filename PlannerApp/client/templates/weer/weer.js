Template.weather.rendered = function() {
        Meteor.call("weather");
    };

Template.weather.helpers({
	'weather': function(){
    return PA.Weather.findOne({temperature: {$exists: true}});
}});