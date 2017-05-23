/**
 * Created by guminji on 2017/5/23.
 */
var arr_this= require('./arr_this');
//console.log(arr_this);
arr_this.example1.b();//这里输出的是example{}对象，不是箭头函数的原理
bb =arr_this.example1.b;
bb();