/**
 * Created by С�� on 2018/3/20.
 */
//JavaScript�㷨��ϰ���ַ�����ת
//1.ͨ���������÷���
function reversstring(str){
    var splitstring=str.split("");
    var reversearray=splitstring.reverse();
    var joinarry=reversearray.join("");
    return  joinarry;
}
reversstring("hello");
//��
function reversestring(str){
    return str.split("").reverse().join("");
}
reversstring("hello");
//2.ͨ��forѭ��
function reversestring(str){
    var newstr="";
    for(var i=str.length-1;i>=0;i--){
        newstr+=str[i]
    }
    return newstr;
}
reversestring("hello");
