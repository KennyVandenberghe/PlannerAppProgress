PA = {};

if(Meteor.isClient){
  Handlebars.registerHelper("PA", function() {
    return PA;
  });
}