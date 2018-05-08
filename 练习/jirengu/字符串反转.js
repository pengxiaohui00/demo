/**
 * Created by 小灰 on 2018/3/20.
 */
//JavaScript算法练习：字符串反转
//1.通过数组内置方法
function reversstring(str){
    var splitstring=str.split("");
    var reversearray=splitstring.reverse();
    var joinarry=reversearray.join("");
    return  joinarry;
}
reversstring("hello");
//简化
function reversestring(str){
    return str.split("").reverse().join("");
}
reversstring("hello");
//2.通过for循环
function reversestring(str){
    var newstr="";
    for(var i=str.length-1;i>=0;i--){
        newstr+=str[i]
    }
    return newstr;
}
reversestring("hello");
