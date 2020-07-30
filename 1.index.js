/**
 * 
 */
let nunjucks = require('nunjucks');
let path = require('path');
let express = require('express');
let app = express();

nunjucks.configure('views',{
  autoescape: true,
  express: app // 这个属性把nunjucks和express绑定在一起
})

app.get('/', function(req, res){
  res.render(path.resolve(__dirname, 'views'), {name:'yy'})
});
app.listen(3000);