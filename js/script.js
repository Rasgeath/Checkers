/**
 * Created by rasgeath on 16/02/17.
 */
var content="<table border='1'>";
for(let i=0;i<8;i++){
    content+="<tr>";
    for(let j=0;j<8;j++){
        content+="<td id='cel-c"+(j+1)+"-l"+(i+1)+"' class='";
        if((i+j)%2==0) {
            content += "black'></td>";
        }else{
            content += "white'></td>";
        }
    }
    content+="</tr>";
    }
content+="</table>";
document.getElementById("echiquier").innerHTML+=content;
for(let i=0;i<8;i++){
    for(let j=0;j<8;j++) {
        if(i==0) {
            switch (j) {
                case 0:
                    document.getElementById("cel-c" + (j + 1) + "-l" + (i + 1)).innerHTML += ("<img src='chess/br.gif' id='br-1'>");
                    break;
                case 7:
                    document.getElementById("cel-c" + (j + 1) + "-l" + (i + 1)).innerHTML += ("<img src='chess/br.gif' id='br-2'>");
                    break;
                case 1:
                    document.getElementById("cel-c" + (j + 1) + "-l" + (i + 1)).innerHTML += ("<img src='chess/bn.gif' id='bn-2'>");
                    break;
                case 6:
                    document.getElementById("cel-c" + (j + 1) + "-l" + (i + 1)).innerHTML += ("<img src='chess/bn.gif' id='bn-2'>");
                    break;
                case 2:
                    document.getElementById("cel-c" + (j + 1) + "-l" + (i + 1)).innerHTML += ("<img src='chess/9b.png' id='9bb-1'>");
                    break;
                case 5:
                    document.getElementById("cel-c" + (j + 1) + "-l" + (i + 1)).innerHTML += ("<img src='chess/9b.png' id='9bb-2'>");
                    break;
                case 3:
                    document.getElementById("cel-c" + (j + 1) + "-l" + (i + 1)).innerHTML += ("<img src='chess/bq.gif' id='bq-1'>");
                    break;
                case 4:
                    document.getElementById("cel-c" + (j + 1) + "-l" + (i + 1)).innerHTML += ("<img src='chess/yy.png' id='yyb-2'>");
                    break;
                default:
                    break;
            }
        }
        if(i==1){
            document.getElementById("cel-c" + (j + 1) + "-l" + (i + 1)).innerHTML += ("<img src='chess/bp.gif' id='bp-"+(j+1)+"'>");
        }
        if(i==6){
            document.getElementById("cel-c" + (j + 1) + "-l" + (i + 1)).innerHTML += ("<img src='chess/wp.gif' id='wp-"+(j+1)+"'>");
        }
        if(i==7){
            switch (j) {
                case 0:
                    document.getElementById("cel-c" + (j + 1) + "-l" + (i + 1)).innerHTML += ("<img src='chess/wr.gif' id='wr-1'>");
                    break;
                case 7:
                    document.getElementById("cel-c" + (j + 1) + "-l" + (i + 1)).innerHTML += ("<img src='chess/wr.gif' id='wr-2'>");
                    break;
                case 1:
                    document.getElementById("cel-c" + (j + 1) + "-l" + (i + 1)).innerHTML += ("<img src='chess/wn.gif' id='wn-2'>");
                    break;
                case 6:
                    document.getElementById("cel-c" + (j + 1) + "-l" + (i + 1)).innerHTML += ("<img src='chess/wn.gif' id='wn-2'>");
                    break;
                case 2:
                    document.getElementById("cel-c" + (j + 1) + "-l" + (i + 1)).innerHTML += ("<img src='chess/9b.png' id='9bn-1'>");
                    break;
                case 5:
                    document.getElementById("cel-c" + (j + 1) + "-l" + (i + 1)).innerHTML += ("<img src='chess/9b.png' id='9bn-2'>");
                    break;
                case 3:
                    document.getElementById("cel-c" + (j + 1) + "-l" + (i + 1)).innerHTML += ("<img src='chess/wq.gif' id='wq-1'>");
                    break;
                case 4:
                    document.getElementById("cel-c" + (j + 1) + "-l" + (i + 1)).innerHTML += ("<img src='chess/yy.png' id='yyw-2'>");
                    break;
                default:
                    break;
            }
        }

    }
}