let nunjucks = require('nunjucks');
let path = require('path');

 // 设置自动转译
 /**
  * 第一个参数设置的是识图所在的路径
  * autoescape为true的话遇到标签会自动进行转译
  * */
// nunjucks.configure({autoescape: true});

// 渲染字符串
let ret = nunjucks.renderString(
  `hello {{name}}`, {name: '<span>yang</span>'}
);
console.log(ret);

// 渲染文件(真正项目中一般会渲染文件)
// __dirname
nunjucks.configure(path.resolve(__dirname, 'views'), {autoescape: true});
let res = nunjucks.render('index.html', {name: 'yang'});
console.log(res);

