/**
 * Created by С�� on 2017/11/13.
 */
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

var k=2;//���������Ŀ���趨�õ����������
var rows=[]; //���ڴ洢ÿ�е�����

rl.on('line',function(line){
    rows.push(line);//��ÿ������������ݴ���
    if(k==rows.length){//����������������趨��kֵʱ����ʼ�߼�����

        var result=rows[0]+rows[1]; //�����ַ���
        console.log(result); //������

        rows.length=0;//״̬����
    }

});
