/**
 * Created by Ð¡»Ò on 2017/5/22.
 */
function getNewContent() {
    var request = getHTTPObject();
    if(requst) {
        requst.open("GET","example.txt",true);
        request.onreadylstatechange = function(){
            if (request.readyState ==4) {
                var para = document.createElement("p");
                var txt = document.createTextNode(requst.responseText);
                para.appendChild(text);
                document.getElementById("new").appendchild(para);
            }
        };
        requst.send(null);
    }else{
        alert("Sorry,your browser doesn\'t  support XMLHttpRequest");
    }
}
addloadEvent(getNewContent());