// Give our package a description
Package.describe({
  summary: "Plannerapp"
});

Npm.depends({"openweather-node": "0.0.4"});

// Tell Meteor what to do with our package at bundle time
Package.on_use(function (api, where) {

  // The api.use method allows us to depend on other
  // packages that ship with meteor or are in our project's
  // package directory
  api.use([
    'ui',
    'handlebar-helpers',
    'handlebars',
    'iron-router',
    'templating'
    ], 'client');
  api.use([
    'npm'
    ], 'server');

  // we can add files to the client, server, or both
  // in this case load both.js on the client AND the server
  api.add_files([
    'namespace.js',
     'model.js',
     'server.js'
     ], ["client", "server"]);

  api.export('PA');

  // Add templates.html and client.js files ONLY on
  // the client
  //api.add_files(["templates.html", "client.js"], "client");
});
