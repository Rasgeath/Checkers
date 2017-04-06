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
var joueur_actuel=true; //joueur1

function clickdown(){
	var v_case;
	var valide=false;
	if(joueur_actuel==true){
		v_case=1;
	}else{
		v_case=2;
	}
	if(i==true){
		//while(valide==false){
			//console.log("Sélectionner un de vos pions");
			//coordonnée_p1=[];
			var result = this.id.split(" ");
			//if(Board[result[1]+result[3]*10])
				//console.log(Board[result[1]+result[3]*10]);
			console.log(Board[(result[1]-1)+(result[3]-1)*10]);
			
			if(Board[(result[1]-1)+(result[3]-1)*10]==v_case){
				this.style.backgroundColor = "red";
				console.log("Vous avez bien sélectionner un de vos pions");
				coordonnée_p1=[result[1]-1,result[3]-1];
				console.log(coordonnée_p1);
				console.log("Veuillez sélectionner une autre case pour effectuer le déplacement");
				valide=true;
				//i=!i;
			}else{
				console.log("Veuillez sélectionner un de vos pions !");
				//i=!i;
			}
		//}
		
	}
	//valide=false;
	if(i==false){
		valide=false;
		//while(valide==false){
			//console.log("Sélectionner un de vos pions");
			var result = this.id.split(" ");
			console.log(Board[(result[1]-1)+(result[3]-1)*10]);
			
			if(Board[(result[1]-1)+(result[3]-1)*10]!=v_case){
				this.style.backgroundColor = "red";
				console.log("Vous avez bien sélectionner une case");
				coordonnée_p2=[result[1]-1,result[3]-1];
				console.log(coordonnée_p2);
				//console.log(result);
				console.log("Déplacement effectué");
				valide=true;
				//joueur_actuel=!joueur_actuel;
			}else{
				console.log("Veuillez sélectionner un de vos pions !");
				//i=!i;
				//joueur_actuel!=joueur_actuel;
			}
		//}	
			
		if(valide)
		joueur_actuel=!joueur_actuel;
		if(joueur_actuel==true){
			console.log("Joueur1, à vous de jouer");
		}else{
			console.log("Joueur2, à vous de jouer");
		}
		
	}
	if(valide){
		i=!i;
	}
	//i=!i;
	console.log(this.id);
	//this.style.backgroundColor = "red";
	//i++;
	console.log(i);
}

function clickup(){
	console.log("ok");
}

function myScript(){
	console.log("click");
}
