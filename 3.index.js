// 模板继承
/**
 * 模板继承可以达到模板复用的效果，当写一个模板的时候可以定义 "blocks"，子模板可以覆盖他
 * 同时支持多层继承。
 */
// --------------------
// let nunjucks=require('nunjucks');
// const path=require('path');
// nunjucks.configure(path.resolve(__dirname,'views'),{autoescape:true});
// let ret2 = nunjucks.render('login.html',{name: 'y'});
// console.log(ret2);
// ---------------------

// 包含
/**
 * include 可引入其他的模板，可以在多模板之间共享一些小模板，如果某个模板已使用了继承那么 include 将会非常有用。
 */
// ---------------------
let nunjucks=require('nunjucks');
const path=require('path');
nunjucks.configure(path.resolve(__dirname,'views'),{autoescape:true});
let ret2=nunjucks.render('items.html',{items: [{id:1,name:'y1'},{id:2,name:'y2'}]});
console.log(ret2);
// -------------------