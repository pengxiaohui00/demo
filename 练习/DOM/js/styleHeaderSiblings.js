/**
 * Created by С�� on 2017/5/26.
 */
function styleHeaderSiblings() {
    if(!document.getElementsByTagName) return false;
    var elems = document.getElementsByTagName(tag);
    var elem;
    for (var i= 0; i<elems.length;i++){
        elem = getNextElement(headers[i].nextSibling);
        addClass(elem.theclass);
    }
}
function getNextElement(node){
    if(node.nodeType==1){
        return node;
    }
    if(node.nextSibling){
        return getNextElement(node.nextSibling);
    }
    return null;
}
addLoadEvent(function(){
    styleElementSiblings("h1","intro");
});