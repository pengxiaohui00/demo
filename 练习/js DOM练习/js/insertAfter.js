/**
 * Created by Ð¡»Ò on 2017/6/8.
 */
function insertAfter(newElement,targetElement){
    var parent =targetElement.parentNode;
    if(parent.lastChild==targetElement){
        parent.appendChild(newElement);
    }else{
        parent.insertBefore(newElement,targetElement.nextSibling);
    }
}