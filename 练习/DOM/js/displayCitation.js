/**
 * Created by С�� on 2017/5/24.
 */
//��ʾ������Դ���ӱ�
function displayCitation(){
    //ȡ����������
    var quotes = document.getElementsByTagName("blockquote");
    //��������
    //alert("aa");
    for(var i=0; i<quotes.length;i++){
        //���û��cite���ԣ�����ѭ��
        if(!quotes[i].getAttribute("cite")) continue;
        //����cite����
        var url = quotes[i].getAttribute("cite");
        //ȡ�������е�����Ԫ�ؽڵ�
        var quoteChildren = quotes[i].getElementsByTagName("*");
        //���û��Ԫ�ؽڵ㣬����ѭ��
        if (quoteChildren.length <1) continue;
        //�������һ��Ԫ�ؽڵ�
        var elem = quoteChildren[quoteChildren.length-1];
        //�������
        var link = document.createElement("a");
        var link_text = document.createTextNode("source");
        link.appendChild(link_text);
        link.setAttribute("href",url);
        var superscript = document.createElement("sup");
        superscript.appendChild(link);
        //�ѱ����ӵ������е����һ��Ԫ�ؽڵ�
        elem.appendChild(superscript);
    }
}
//addLoadEvent(displayCitation);