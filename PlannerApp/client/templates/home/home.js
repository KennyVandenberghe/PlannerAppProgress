Template.home.events({
  "click .delete-all": function(){
    Meteor.call("removeAllCollections");
  }
});
