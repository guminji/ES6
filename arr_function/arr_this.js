/**
 * Created by guminji on 2017/5/23.
 */

/*{
    let a =1;
    let b =function(){
        let c=()=>{
            console.log(this.a);//undefined
        }
        c();
        //console.log(this.a);
    }
    b();//当b运行时b方法中获得的this为{}，所以c所拿到的this也是空;this.a为undefined
}//{}在这里起到了局部作用域的关系（与内部let定义有关），与函数作用域类似。*/

/*var example ={
    a:1,
    b:()=>{
        console.log(this)//b在example（对象中定义），因此b中的this指向的是对象的上级最用域
    }
}
example.b();
exports.example1 =example;*/
/*b=()=>{
    console.log(this)//空对象
}*/
/*b();//输出空对象
{
    console.log(this)//global对象
}
example.b();
c = example.b;
c();*/
{
    let example={
        a:1,
        b:function(){
            let a=()=>{
                console.log(this);
            }
            a();
        }
    }
    //example.b();//this对象为example 而let a()function运行时指向的外级最用域b()的this
    //var c =example.b;
    //c();//this对象为全局变量对象 而let a()function运行时指向的外级最用域(全局变量对象)
    exports.example1 =example;
}

