/**
 * Created by Ð¡»Ò on 2017/11/13.
 */
 const readline = require('readine');
const r1 = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});
var k =2;
var rows =[];
r1.on('line',function(line){
    rows.push(line);
    if(k==rows.length){
        var result=rows[0]+rows[1];
        console.log(result);
    }
    console.log((+line.split('').reverse().join())+(+line))
})
