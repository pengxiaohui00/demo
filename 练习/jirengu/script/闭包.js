/**
 * Created by 小灰 on 2018/4/4.
 */
//var fnArr = [];
//for(var i= 0;i<10;i++){
//    fnArr[i] = function(i){
//        return i
//    };
//}
//console.log(fnArr[3]())
//
//var fnArr = [];
//for(var i=0 ;i<10;i++){
//    fnArr[i]=(function(j){
//        return function(){
//            return j;
//        }
//    }(i));
//}
//console.log(fnArr[3]());
//
//var fnArr = [];
//for(var i=0;i<10;i++){
//    (   function(i){
//        fnArr[i]= function(){
//            return i;
//        }
//    }(i))
//}
//console.log(fnArr[3]());
//
////var fnArr = [];
////for(let i = 0;i<10;i++){
////    fnArr[i]=function(){
////        return i;
////    }
////}
////console.log(fnArr[3]());
////封装一个 Car 对象。
//var Car = (function(){
//    var speed = 0;
//    function set(s){
//        speed=s;
//    }
//    function get(){
//        return speed;
//    }
//    function speedUp(){
//        speed++;
//    }
//    function speedDown(){
//        speed--;
//    }
//    return {
//        set: set,
//        get: get,
//        speedUp: speedUp,
//        speedDown: speedDown
//    }
//})()
//Car.set(30)
//Car.get() //30
//Car.speedUp()
//Car.get() //31
//Car.speedDown()
//Car.get()  //30
////如下代码输出多少？如何连续输出 0,1,2,3,4？
//for(var i=0; i<5; i++){
//    (function(j){
//        setTimeout(function(){
//            console.log('delayer:' + j )
//        }, 0)
//    }(i))
//}
//
//for (var i=0;i<5;i++){
//    setTimeout((function (j) {
//            return function(){
//                console.log('delayer:'+j)
//            }
//        }(i))
//    ,0)
//}
//
//function makeCounter() {
//    var count = 0;
//    return function() {
//        return count++
//    };
//}
//var counter = makeCounter();
//console.log(counter());
//console.log(counter());
//console.log(counter());
//console.log(counter());
//var counter2 = makeCounter();
//console.log(counter2());
//console.log(counter2());
//console.log(counter2());
//console.log(counter2());

//补全代码，实现数组按姓名、年纪、任意字段排序。
//var users = [
//    { name: "John", age: 20, company: "Baidu" },
//    { name: "Pete", age: 18, company: "Alibaba" },
//    { name: "Ann", age: 19, company: "Tecent" }
//]
//
//
//function byName(v1,v2){
//    return v1.name>v2.name;
//}
//function byAge(v1,v2){
//    return v1.age>v2.age;
//}
//function byCompany(v1,v2){
//    return v1.company>v2.company;
//}
//function byField(field){
//    return function(v1,v2){
//        return v1[field]>v2[field]
//    }
//}
//console.log(users.sort(byName))
//console.log(users.sort(byAge))
//console.log(users.sort(byCompany))
//console.log(users.sort(byField('age')))
//console.log(users.sort(byField('company')))
function sum(a){
    return function(b){
        return a+b;
    }
}
console.log(sum(1)(2))