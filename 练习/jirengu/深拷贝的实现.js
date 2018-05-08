/**
 * Created by 小灰 on 2018/3/20.
 */
// 递归实现一个深拷贝
function deepCopy1(oldObj){
    var newObj ={};
    for ( var key in oldObj ){
        if(typeof oldObj[key]==="object"){
            newObj[key]=deepCopy1(oldObj[key]);
        }else{
            newObj[key]=oldObj[key];
        }
    }
    return newObj;
}
//用JSON实现深拷贝
function deepCopy2(oldObj){
     return JSON.parse(JSON.stringify(obj));
}
var obj = {
    name:"xiao hui",
    age:18,
    info:{
        sex:"男",
        爱好:"女"
    }
}
obj2=deepCopy1(obj);
obj3=deepCopy2(obj);
console.log(obj2);
console.log(obj===obj2);
console.log(obj3);
console.log(obj===obj3);

