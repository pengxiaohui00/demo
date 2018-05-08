/**
 * Created by Ð¡»Ò on 2017/6/1.
 */
function prepareSlideshow(){
    if(!document.getElementsByTagName) return false;
    if(!document.getElementById) return false;
    if(!document.getElementById("linklist")) return false;
    //if(!document.getElementById("preview")) return false;
   /* var preview = document.getElementById("preview");
    preview.style.position="absolute";
    preview.style.left = "0px";
    preview.style.top = "0px";*/
    var slideshow =document.createElement("div");
    slideshow.setAttribute("id","slideshow");
    var preview = document.createElement("img");
    preview.setAttribute("src","images/topics.gif");
    preview.setAttribute("alt","buliding blocks of web design");
    preview.setAttribute("id","preview");
    slideshow.appendChild(preview);
    var list = document.getElementById("linklist");
    console.log(2);
    //list.appendChild(slideshow);
    insertAfter(slideshow,list);
    var links = list.getElementsByTagName("a");
    links[0].onmouseover = function() {
        moveElement("preview",0,-100,10);
    }
    links[1].onmouseover =function() {
        moveElement("preview",0,-200,10);
    }
    links[2].onmouseover = function(){
        moveElement("preview",0,-300,10)
    }

}