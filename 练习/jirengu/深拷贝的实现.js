/**
 * Created by С�� on 2018/3/20.
 */
// �ݹ�ʵ��һ�����
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
//��JSONʵ�����
function deepCopy2(oldObj){
     return JSON.parse(JSON.stringify(obj));
}
var obj = {
    name:"xiao hui",
    age:18,
    info:{
        sex:"��",
        ����:"Ů"
    }
}
obj2=deepCopy1(obj);
obj3=deepCopy2(obj);
console.log(obj2);
console.log(obj===obj2);
console.log(obj3);
console.log(obj===obj3);

