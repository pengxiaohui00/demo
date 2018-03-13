/**
 * Created by С�� on 2017/5/24.
 */
//��ʾ�������б�
function displayAbbreviations() {
    // ȡ���������Դ�
    //alert("aa");
    var abbreviations = document.getElementsByTagName('abbr');
    if(abbreviations.length < 1) return false;
    //������Щ���Դ�
    var defs = new Array();
    for (var i=0 ; i<abbreviations.length;i++) {
        var current_abbr = abbreviations[i];
        if(current_abbr.childNodes.length<1) continue;
        var definition = current_abbr.getAttribute("title");
        var key = current_abbr.lastChild.nodeValue;
        defs[key] = definition;
    //    for(key in defs){}
    //}
    }
    //���������б�
    var dlist = document .createElement("dl");
    //��������
    for(key in defs) {
        var definition=defs[key];
        //�����������
        var dtitle = document.createElement("dt");
        var dtitle_text = document.createTextNode(key);
        dtitle.appendChild(dtitle_text);
        //������������
        var ddesc = document.createElement("dd");
        var ddesc_text = document.createTextNode(definition);
        ddesc.appendChild(ddesc_text);
        //��������ӵ������б�
        dlist.appendChild(dtitle);
        dlist.appendChild(ddesc);
    }
    if(dlist.childNodes.length <1) return false;
    //��������
    var header = document.createElement("h2");
    var header_text = document.createTextNode("Abbreviations");
    header.appendChild(header_text);
    //�ѱ�����ӵ�ҳ������
    //document.getElementsByTagName("body")[0]
    document.body.appendChild(header);
    //�Ѷ����б���ӵ�ҳ������
    document.body.appendChild(dlist);
}






