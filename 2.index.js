// 语法
let nunjucks = require('nunjucks');
nunjucks.configure({autoescape:true});

/**
 * 过滤器
 * 过滤器是一些可以执行变量的函数，通过管道操作符 (|) 调用，并可接受参数。
 */
// --------------------------------
// let res = nunjucks.renderString(
//   `hello {{names | join('-')}}`,{names:['a','b','c']},
// )
// let res1 = nunjucks.renderString(
//   `hello {{name | replace("s","ss") | capitalize}}`, {name: 'nunjucks'} // capitalizez 首字母大写
// )
// console.log(res);
// console.log(res1);
// ---------------------------------


// 判断
// ---------------------------------
// let res = nunjucks.renderString(
//   `
//   {% if score>=90 %}
//   优秀
//   {% elseif score>=60 %}
//   及格
//   {% else %}
//   不及格
//   {% endif %}
//   `,
//   {score: 59}
// )
// console.log(res)
// ---------------------------------

// 循环
// ---------------------------------
let res = nunjucks.renderString(
  `
  <ul>
  {% for user in users %}
  <li data-id="{{user.id}}">{{user.name}}{{loop.index}}</li>
  {% endfor %}
  </ul>
  `,
  {users: [{name:'yy',id:1}]}
)
console.log(res)
// ---------------------------------
