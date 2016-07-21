
var url   = require('url');
var param = url.parse('https://github.com/creationix/nvm/issues/586');
console.log(param.host);

//console.log(module.paths);

// iKeepStudying.echo('this is my testing !');

var iKS = require('gd');
var gd  = new iKS();
gd.echo('this is my testing !');
gd.echo(gd.current_dir_name);

