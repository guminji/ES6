/**
 * Created by guminji on 2017/5/23.
 */
console.log(this);
Function a(x){
    Console.log(x);
}
Var a = (x)=>{
    Console.log(x);
}
var obj ={
    value:'test',
    showValue:function(){
        console.log(this.value);
    }
}
obj.showValue()//调用showValue方法的对象是obj,因此这里showValue运行时的上下文this,指向obj对象
var showValue =obj.showValue;//把对象的方法赋值给一个变量
showValue();//执行这个方法,这个时候是直接执行的这个方法,他的this指向最外层的window对象(browser中)或者global对象(nodejs中);
在严格模式下指向的就是undefined;
var obj ={
    value:'test',
    showValue:function(){
        arrFun = ()=>{
            console.log(this.value);
        }
        arrFun();
    }
}
a.showValue()//test 这个时候showValue中的this指向obj对象 而arrFun直接调用 按照ES5的规则应该是他的this对象应该是全局对象 但是因为他的定义是用箭头函数定义的 所以他的this指向外层作用域的this即obj.showValue中的this 就是obj对象
var showValue =obj.showValue;//把对象的方法赋值给一个变量
showValue();这个时候showValue的this是window 所以arrFun的this也指向了window