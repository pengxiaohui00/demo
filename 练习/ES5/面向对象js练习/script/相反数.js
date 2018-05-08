/**
 * Created by Ğ¡»Ò on 2017/11/13.
 */
function reverseNum(n){
    var s1=String(n);
    var A1=s1.split("");
    var A2=A1.reverse();
    var s2=A2.join("");
    var n2=Number(s2);
    var sum=n+n2;
    return sum;
}
var outputNum =reverseNum(123);
console.log (outputNum);