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
var id;
var id2=1000;

function clickdown(){
	var v_case;
	var v_case_spe;
	var valide=false;
	if(joueur_actuel==true){
		v_case=1;
		v_case_spe=11;
	}else{
		v_case=2;
		v_case_spe=22;
	}
	if(i==true){
		//while(valide==false){
			//console.log("Sélectionner un de vos pions");
			//coordonnée_p1=[];
			var result = this.id.split(" ");
			//if(Board[result[1]+result[3]*10])
				//console.log(Board[result[1]+result[3]*10]);
			console.log(Board[(result[1]-1)+(result[3]-1)*10]);
			
			if(Board[(result[1]-1)+(result[3]-1)*10]==v_case || Board[(result[1]-1)+(result[3]-1)*10]==v_case_spe){
				this.style.backgroundColor = "red";
				console.log("Vous avez bien sélectionner un de vos pions");
				coordonnée_p1=[result[1]-1,result[3]-1];
				console.log(coordonnée_p1);
				console.log("Veuillez sélectionner une autre case pour effectuer le déplacement");
				valide=true;
				id=document.getElementById(this.id).children[0].id;
				//console.log('sfs',id);
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
			
			if(Board[(result[1]-1)+(result[3]-1)*10]!=v_case && Board[(result[1]-1)+(result[3]-1)*10]!=v_case_spe){
				this.style.backgroundColor = "red";
				console.log("Vous avez bien sélectionner une case");
				coordonnée_p2=[result[1]-1,result[3]-1];
				console.log(coordonnée_p2);
				//console.log(result);
				console.log(coordonnée_p2[0]+coordonnée_p2[1]*10);
								
				if((joueur_actuel==true && coordonnée_p2[1]==coordonnée_p1[1]+1) || (joueur_actuel==false && coordonnée_p2[1]==coordonnée_p1[1]-1) || Board[coordonnée_p1[0]+coordonnée_p1[1]*10]==11 || Board[coordonnée_p1[0]+coordonnée_p1[1]*10]==22){
					if(coordonnée_p2[0]==(coordonnée_p1[0]-1) || coordonnée_p2[0]==(coordonnée_p1[0]+1)){
						var ajoutimage=0;
						/*if(joueur_actuel==true && Board[coordonnée_p2[0]+coordonnée_p2[1]*10]==2){
							Board[coordonnée_p2[0]+coordonnée_p2[1]*10]="0";
							if(coordonnée_p2[0]==(coordonnée_p1[0]-1)){
								if(joueur_actuel){
									Board[coordonnée_p2[0]-1+coordonnée_p2[1]*10+1]="1";
								}else{
									Board[coordonnée_p2[0]-1+coordonnée_p2[1]*10+1]="1";	
								}
							}
						}*/
						if(coordonnée_p2[0]==(coordonnée_p1[0]-1)){
							if(joueur_actuel==true && Board[coordonnée_p2[0]+coordonnée_p2[1]*10]==2 || Board[coordonnée_p1[0]+coordonnée_p1[1]*10]==11 && coordonnée_p2[1]==(coordonnée_p1[1]+1) || Board[coordonnée_p1[0]+coordonnée_p1[1]*10]==22 && coordonnée_p2[1]==(coordonnée_p1[1]+1)){
								//Board[coordonnée_p2[0]-1+coordonnée_p2[1]*10+1]=Board[coordonnée_p1[0]+coordonnée_p1[1]*10]; //1
								//document.getElementById("cel-c " + coordonnée_p2[0]-1+1 + " -l " + coordonnée_p2[1]*10+1+1).innerHTML="<img src='img/bfairy.PNG' id='" + id + "'>";
								if(Board[coordonnée_p2[0]+(coordonnée_p2[1])*10]!=0){
								if(Board[coordonnée_p2[0]-1+(coordonnée_p2[1]+1)*10]==0){
									if(coordonnée_p2[0]-1>=0 && coordonnée_p2[0]-1<=9 ){ //si on reste à l'intérieur du tableau
									Board[coordonnée_p2[0]+coordonnée_p2[1]*10]=0;
									Board[coordonnée_p2[0]-1+(coordonnée_p2[1]+1)*10]=Board[coordonnée_p1[0]+coordonnée_p1[1]*10]; //2
									//Board[coordonnée_p1[0]+coordonnée_p1[1]*10]="0";
									console.log((coordonnée_p2[0]+1+1)," ",(coordonnée_p2[1]));
									document.getElementById(this.id).innerHTML="";
									if((coordonnée_p2[1]+1)!=9){
										document.getElementById("cel-c " + (coordonnée_p2[0]+1-1) + " -l " + (coordonnée_p2[1]+1+1)).innerHTML="<img src='img/bfairy.PNG' id='" + id2 + "'>";
										if(Board[coordonnée_p1[0]+coordonnée_p1[1]*10]==22)
										document.getElementById("cel-c " + (coordonnée_p2[0]+1-1) + " -l " + (coordonnée_p2[1]+1+1)).innerHTML="<img src='img/wfairyspe.PNG' id='" + id2 + "'>";
										if(Board[coordonnée_p1[0]+coordonnée_p1[1]*10]==11)
										document.getElementById("cel-c " + (coordonnée_p2[0]+1-1) + " -l " + (coordonnée_p2[1]+1+1)).innerHTML="<img src='img/bfairyspe.PNG' id='" + id2 + "'>";
									}else{
										document.getElementById("cel-c " + (coordonnée_p2[0]+1-1) + " -l " + (coordonnée_p2[1]+1+1)).innerHTML="<img src='img/bfairyspe.PNG' id='" + id2 + "'>";
										Board[coordonnée_p2[0]-1+(coordonnée_p2[1]+1)*10]=11;
									}
									id2++;
									ajoutimage=1;
									}else{
										console.log("On sort du tableau");
										ajoutimage=0; // On va prendre la condition du (si on a une case derriere) pour éviter qu'on sorte le pion du tableau
									}
								}else{
									ajoutimage=0; //on va prendre la condition plus bas permettant d'avancer de juste une case
								}
								}else{
									ajoutimage=0;
								}								
							}
							if(joueur_actuel==false && Board[coordonnée_p2[0]+coordonnée_p2[1]*10]==1 || Board[coordonnée_p1[0]+coordonnée_p1[1]*10]==11 && coordonnée_p2[1]==(coordonnée_p1[1]-1) || Board[coordonnée_p1[0]+coordonnée_p1[1]*10]==22 && coordonnée_p2[1]==(coordonnée_p1[1]-1)){
								//Board[coordonnée_p2[0]-1+coordonnée_p2[1]*10-1]=Board[coordonnée_p1[0]+coordonnée_p1[1]*10]; //2
								//document.getElementById("cel-c " + coordonnée_p2[0]-1+1 + " -l " + coordonnée_p2[1]*10-1+1).innerHTML="<img src='img/wfairy.PNG' id='" + id + "'>";
								if(Board[coordonnée_p2[0]+(coordonnée_p2[1])*10]!=0){
								if(Board[coordonnée_p2[0]-1+(coordonnée_p2[1]-1)*10]==0){
									if(coordonnée_p2[0]-1>=0 && coordonnée_p2[0]-1<=9 ){ //si on reste à l'intérieur du tableau
									Board[coordonnée_p2[0]+coordonnée_p2[1]*10]=0;
									Board[coordonnée_p2[0]-1+(coordonnée_p2[1]-1)*10]=Board[coordonnée_p1[0]+coordonnée_p1[1]*10]; //2
									//Board[coordonnée_p1[0]+coordonnée_p1[1]*10]="0";
									console.log((coordonnée_p2[0]+1-1)," ",(coordonnée_p2[1]));
									document.getElementById(this.id).innerHTML="";
									if((coordonnée_p2[1]-1)!=0){
										document.getElementById("cel-c " + (coordonnée_p2[0]+1-1) + " -l " + (coordonnée_p2[1])).innerHTML="<img src='img/wfairy.PNG' id='" + id2 + "'>";
										if(Board[coordonnée_p1[0]+coordonnée_p1[1]*10]==22)
										document.getElementById("cel-c " + (coordonnée_p2[0]+1-1) + " -l " + (coordonnée_p2[1])).innerHTML="<img src='img/wfairyspe.PNG' id='" + id2 + "'>";
										if(Board[coordonnée_p1[0]+coordonnée_p1[1]*10]==11)
										document.getElementById("cel-c " + (coordonnée_p2[0]+1-1) + " -l " + (coordonnée_p2[1])).innerHTML="<img src='img/bfairyspe.PNG' id='" + id2 + "'>";
									}else{
										document.getElementById("cel-c " + (coordonnée_p2[0]+1-1) + " -l " + (coordonnée_p2[1])).innerHTML="<img src='img/wfairyspe.PNG' id='" + id2 + "'>";
										Board[coordonnée_p2[0]-1+(coordonnée_p2[1]-1)*10]=22;
									}
									id2++;
									ajoutimage=1;
									}else{
										console.log("On sort du tableau");
										ajoutimage=0; // On va prendre la condition du (si on a une case derriere) pour éviter qu'on sorte le pion du tableau
									}
								}else{
									ajoutimage=0;
								}
								}else{
									ajoutimage=0;
								}
							}
						}
						
						if(coordonnée_p2[0]==(coordonnée_p1[0]+1)){
							if(joueur_actuel==true && Board[coordonnée_p2[0]+coordonnée_p2[1]*10]==2 || Board[coordonnée_p1[0]+coordonnée_p1[1]*10]==11 && coordonnée_p2[1]==(coordonnée_p1[1]+1) || Board[coordonnée_p1[0]+coordonnée_p1[1]*10]==22 && coordonnée_p2[1]==(coordonnée_p1[1]+1)){
								//Board[coordonnée_p2[0]+1+coordonnée_p2[1]*10+1]=Board[coordonnée_p1[0]+coordonnée_p1[1]*10]; //1
								//document.getElementById("cel-c " + coordonnée_p2[0]+1+1 + " -l " + coordonnée_p2[1]*10+1+1).innerHTML="<img src='img/bfairy.PNG' id='" + id + "'>";
								if(Board[coordonnée_p2[0]+(coordonnée_p2[1])*10]!=0){
								if(Board[coordonnée_p2[0]+1+(coordonnée_p2[1]+1)*10]==0){
									if(coordonnée_p2[0]+1>=0 && coordonnée_p2[0]+1<=9 ){ //si on reste à l'intérieur du tableau
									Board[coordonnée_p2[0]+coordonnée_p2[1]*10]=0;
									Board[coordonnée_p2[0]+1+(coordonnée_p2[1]+1)*10]=Board[coordonnée_p1[0]+coordonnée_p1[1]*10]; //2
									//Board[coordonnée_p1[0]+coordonnée_p1[1]*10]="0";
									console.log((coordonnée_p2[0]+1+1)," ",(coordonnée_p2[1]));
									document.getElementById(this.id).innerHTML="";
									if((coordonnée_p2[1]+1)!=9){
										document.getElementById("cel-c " + (coordonnée_p2[0]+1+1) + " -l " + (coordonnée_p2[1]+1+1)).innerHTML="<img src='img/bfairy.PNG' id='" + id2 + "'>";
										if(Board[coordonnée_p1[0]+coordonnée_p1[1]*10]==22)
										document.getElementById("cel-c " + (coordonnée_p2[0]+1+1) + " -l " + (coordonnée_p2[1]+1+1)).innerHTML="<img src='img/wfairyspe.PNG' id='" + id2 + "'>";
										if(Board[coordonnée_p1[0]+coordonnée_p1[1]*10]==11)
										document.getElementById("cel-c " + (coordonnée_p2[0]+1+1) + " -l " + (coordonnée_p2[1]+1+1)).innerHTML="<img src='img/bfairyspe.PNG' id='" + id2 + "'>";
									}else{
										document.getElementById("cel-c " + (coordonnée_p2[0]+1+1) + " -l " + (coordonnée_p2[1]+1+1)).innerHTML="<img src='img/bfairyspe.PNG' id='" + id2 + "'>";
										Board[coordonnée_p2[0]+1+(coordonnée_p2[1]+1)*10]=11;
									}
									id2++;
									ajoutimage=1;
									}else{
										console.log("On sort du tableau");
										ajoutimage=0; // On va prendre la condition du (si on a une case derriere) pour éviter qu'on sorte le pion du tableau
									}
								}else{
									ajoutimage=0;
								}
								}else{
									ajoutimage=0;
								}								
							}
							if(joueur_actuel==false && Board[coordonnée_p2[0]+coordonnée_p2[1]*10]==1 || Board[coordonnée_p1[0]+coordonnée_p1[1]*10]==11 && coordonnée_p2[1]==(coordonnée_p1[1]-1) || Board[coordonnée_p1[0]+coordonnée_p1[1]*10]==22 && coordonnée_p2[1]==(coordonnée_p1[1]-1)){
								if(Board[coordonnée_p2[0]+(coordonnée_p2[1])*10]!=0){
								if(Board[coordonnée_p2[0]+1+(coordonnée_p2[1]-1)*10]==0){
									if(coordonnée_p2[0]+1+1-1>=0 && coordonnée_p2[0]+1+1-1<=9 ){ //si on reste à l'intérieur du tableau
									Board[coordonnée_p2[0]+coordonnée_p2[1]*10]=0;
									Board[coordonnée_p2[0]+1+(coordonnée_p2[1]-1)*10]=Board[coordonnée_p1[0]+coordonnée_p1[1]*10]; //2
									//Board[coordonnée_p1[0]+coordonnée_p1[1]*10]="0";
									console.log((coordonnée_p2[0]+1+1)," ",(coordonnée_p2[1]));
									document.getElementById(this.id).innerHTML="";
									if((coordonnée_p2[1]-1)!=0){
										document.getElementById("cel-c " + (coordonnée_p2[0]+1+1) + " -l " + (coordonnée_p2[1])).innerHTML="<img src='img/wfairy.PNG' id='" + id2 + "'>";
										if(Board[coordonnée_p1[0]+coordonnée_p1[1]*10]==22)
										document.getElementById("cel-c " + (coordonnée_p2[0]+1+1) + " -l " + (coordonnée_p2[1])).innerHTML="<img src='img/wfairyspe.PNG' id='" + id2 + "'>";
										if(Board[coordonnée_p1[0]+coordonnée_p1[1]*10]==11)
										document.getElementById("cel-c " + (coordonnée_p2[0]+1+1) + " -l " + (coordonnée_p2[1])).innerHTML="<img src='img/bfairyspe.PNG' id='" + id2 + "'>";										
									}else{
										document.getElementById("cel-c " + (coordonnée_p2[0]+1+1) + " -l " + (coordonnée_p2[1])).innerHTML="<img src='img/wfairyspe.PNG' id='" + id2 + "'>";
										Board[coordonnée_p2[0]+1+1-1+(coordonnée_p2[1]-1)*10]=22;
									}
									id2++;
									ajoutimage=1;
									}else{
										console.log("On sort du tableau");
										ajoutimage=0; // On va prendre la condition du (si on a une case derriere) pour éviter qu'on sorte le pion du tableau
									}
								}else{
									ajoutimage=0;
								}
								}else{
									ajoutimage=0;
								}
							}							
						}
						
						
						if(ajoutimage!=1){
							//console.log("JE PASSE PAR LA")
							Board[coordonnée_p2[0]+coordonnée_p2[1]*10]=Board[coordonnée_p1[0]+coordonnée_p1[1]*10];
							if(joueur_actuel==true && coordonnée_p2[1]==9)
								Board[coordonnée_p2[0]+coordonnée_p2[1]*10]=11;
							if(joueur_actuel==false && coordonnée_p2[1]==0)
								Board[coordonnée_p2[0]+coordonnée_p2[1]*10]=22;
							ajoutimage=0;
							/*if(joueur_actuel){
								document.getElementById(this.id).innerHTML="<img src='img/bfairy.PNG' id='" + id + "'>";
								//document.getElementById(this.id).style.backgroundColor="";
								//document.getElementById(id).parentElement.style.backgroundColor="";
							}else{
								document.getElementById(this.id).innerHTML="<img src='img/wfairy.PNG' id='" + id + "'>";
								console.log("okok");
								console.log(this.id);
								//document.getElementById(this.id).style.backgroundColor="red";
								//document.getElementById(this.id).style.backgroundColor="";
								//document.getElementById(id).parentElement.style.backgroundColor="";
							}*/
						}
						Board[coordonnée_p1[0]+coordonnée_p1[1]*10]="0";
						document.getElementById(id).parentElement.style.backgroundColor="";
						document.getElementById(id).parentElement.innerHTML="";

						if(joueur_actuel){
								if(ajoutimage==0)
								document.getElementById(this.id).innerHTML="<img src='img/bfairy.PNG' id='" + id + "'>";
								if(Board[coordonnée_p2[0]+coordonnée_p2[1]*10]==11)
								document.getElementById(this.id).innerHTML="<img src='img/bfairyspe.PNG' id='" + id + "'>";		
								if(coordonnée_p2[1]==9)
								document.getElementById(this.id).innerHTML="<img src='img/bfairyspe.PNG' id='" + id + "'>";	
								//document.getElementById(this.id).style.backgroundColor="";
								//document.getElementById(id).parentElement.style.backgroundColor="";
							}else{
								if(ajoutimage==0)
								document.getElementById(this.id).innerHTML="<img src='img/wfairy.PNG' id='" + id + "'>";
								if(Board[coordonnée_p2[0]+coordonnée_p2[1]*10]==22)
								document.getElementById(this.id).innerHTML="<img src='img/wfairyspe.PNG' id='" + id + "'>";	
								if(coordonnée_p2[1]==0)
								document.getElementById(this.id).innerHTML="<img src='img/wfairyspe.PNG' id='" + id + "'>";	
								console.log("okok");
								console.log(this.id);
								//document.getElementById(this.id).style.backgroundColor="red";
								//document.getElementById(this.id).style.backgroundColor="";
								//document.getElementById(id).parentElement.style.backgroundColor="";
							}
						
						document.getElementById(this.id).style.backgroundColor="";
						valide=true;
					}else{
						document.getElementById(this.id).style.backgroundColor="";
					}
				}else{
					document.getElementById(this.id).style.backgroundColor="";
				}
				
				/*Board[coordonnée_p2[0]+coordonnée_p2[1]*10]=Board[coordonnée_p1[0]+coordonnée_p1[1]*10];
				Board[coordonnée_p1[0]+coordonnée_p1[1]*10]="0";*/
				console.log("sdfsdf",this.id);
				console.log('id', id);
				//document.getElementById(id).parentElement.innerHTML="";
				/*if(joueur_actuel){
					document.getElementById(this.id).innerHTML="<img src='img/bfairy.PNG' id='" + id + "'>";
				}else{
					document.getElementById(this.id).innerHTML="<img src='img/wfairy.PNG' id='" + id + "'>";
				}*/
				console.log("Déplacement effectué");
				//valide=true;
				//joueur_actuel=!joueur_actuel;
			}else{
				document.getElementById(id).parentElement.style.backgroundColor="";
				this.style.backgroundColor = "red";
				coordonnée_p1=[result[1]-1,result[3]-1];
				id=document.getElementById(this.id).children[0].id;
				console.log("Veuillez sélectionner une autre case !");
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
