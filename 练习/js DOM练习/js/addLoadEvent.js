/**
 * Created by Ð¡»Ò on 2017/5/24.
 */
function addLoadEvent(func) {
    var oldonload = window.onload;
    if (typeof window.onload !="function"){
        window.onload =func;
    }else{
        window.onload = function(){
            oldonload();
            func();
        }
    }
}