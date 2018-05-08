/**
 * Created by Ð¡»Ò on 2017/11/28.
 */
function Person(name,age,job){
    this.name = name;
    this.age = age;
    this.job = job ;
    this.sayName = sayName;
}
function sayName () {
    alert (this.name);
}
var person1 = new Person ("Nicholars");
var person2 = new Person ("Greg");
alert ( person1.sayName== person2.sayName);
