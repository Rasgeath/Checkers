/**
 * Created by rasgeath on 16/02/17.
 */
var content="<table border='1'>";
for(let i=0;i<10;i++){
    content+="<tr>";
    for(let j=0;j<10;j++){
        content+="<td id='cel-c"+(j+1)+"-l"+(i+1)+"' class='";
        if((i+j)%2==0) {
            content += "black'></td>";
        }else{
            content += "white'></td>";
        }
    }
    content+="</tr>";
}
var Board;
Board= [
    1, 0, 1, 0, 1, 0, 1, 0, 1, 0,
    0, 1, 0, 1, 0, 1, 0, 1, 0, 1,
    1, 0, 1, 0, 1, 0, 1, 0, 1, 0,
    0, 1, 0, 1, 0, 1, 0, 1, 0, 1,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    2, 0, 2, 0, 2, 0, 2, 0, 2, 0,
    0, 2, 0, 2, 0, 2, 0, 2, 0, 2,
    2, 0, 2, 0, 2, 0, 2, 0, 2, 0,
    0, 2, 0, 2, 0, 2, 0, 2, 0, 2
];

content+="</table>";
document.getElementById("echiquier").innerHTML+=content;
for(let i=0;i<10;i++){
    for(let j=0;j<10;j++) {
        if(Board[i+j*10]==1) {
            document.getElementById("cel-c" + (i + 1) + "-l" + (j + 1)).innerHTML += ("<img src='img/bfairy.PNG' id='" + (i+10*j) + "'>");
        }
        if(Board[i+j*10]==2){
            document.getElementById("cel-c" + (i + 1) + "-l" + (j + 1)).innerHTML += ("<img src='img/wfairy.PNG' id='" + (i+10*j) + "'>");
        }
    }
}