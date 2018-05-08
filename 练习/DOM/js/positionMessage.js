/**
 * Created by Ð¡»Ò on 2017/5/31.
 */
function moveElement(elementID,final_x,final_y,interval){
    var elem = document.getElementById(elementID);
    console.log(elem);
    var xpos = parseInt(elem.style.left);
    var ypos = parseInt(elem.style.top);
    //console.log(xpos,ypos);
    if(xpos==final_x && ypos == final_y){
        return true;
    }
    if (xpos<final_x){
        xpos++;
    }
    if(xpos>final_x){
        xpos--;
    }
    if(ypos <final_y){
        ypos++;
    }
    if(ypos>final_y){
        ypos--;
    }
    elem.style.left = xpos +"px";
    elem.style.top = ypos + "px";
    var repeat = "moveElement('"+elementID+" ',"+final_x+","+final_y+","+interval+")";
    movement = setTimeout(repeat,interval);
}
function positionMessage() {
    var elem = document.getElementById("message");
    elem.style.position = "absolute";
    elem.style.left = "50px";
    elem.style.top ="100px";

    moveElement("message",200,100,10);

}