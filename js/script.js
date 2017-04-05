/**
 * Created by rasgeath on 16/02/17.
 */
var content="<table border='1'>";
for(let i=0;i<10;i++){
    content+="<tr>";
    for(let j=0;j<10;j++){
        content+="<td id='cel-c "+(j+1)+" -l "+(i+1)+"' class='";
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
            document.getElementById("cel-c " + (i + 1) + " -l " + (j + 1)).innerHTML += ("<img src='img/bfairy.PNG' id='" + (i+10*j) + "'>");
        }
        if(Board[i+j*10]==2){
            document.getElementById("cel-c " + (i + 1) + " -l " + (j + 1)).innerHTML += ("<img src='img/wfairy.PNG' id='" + (i+10*j) + "'>");
        }
		document.getElementById("cel-c " + (i + 1) + " -l " + (j + 1)).addEventListener("mousedown", clickdown);
		document.getElementById("cel-c " + (i + 1) + " -l " + (j + 1)).addEventListener("mouseup", clickup);
    }
}

/*function deplacement(int x,int y){
	
}*/
var i=true;
var coordonnée_p1;
var coordonnée_p2;

function clickdown(){
	if(i==true){
		//coordonnée_p1=[];
		var result = this.id.split(" ");
		coordonnée_p1=[result[1],result[3]]
		console.log(coordonnée_p1);
		console.log("Veuilliez sélectionner une autre case pour effectuer le déplacement");
	}
	if(i==false){
		var result = this.id.split(" ");
		coordonnée_p2=[result[1],result[3]]
		console.log(coordonnée_p2);
		//console.log(result);
		console.log("Déplacement effectué");
	}
	i=!i;
	console.log(this.id);
	this.style.backgroundColor = "red";
	//i++;
	console.log(i);
}

function clickup(){
	console.log("ok");
}

function myScript(){
	console.log("click");
}
