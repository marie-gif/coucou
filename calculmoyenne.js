var somme = 0 ; // c'est la somme des nombres qui sont données par l'utilisateur
var nombre = 0 ; // c'est le nombre total de chiffres differents de 0 données par l'utilisateur 



// FONCTIONS AFFICHAGE
function affiche_text_et_compte(){
	var nb = document.getElementById('nombre').value; // recupere la valeur de l'age 
	var int_nb = parseInt(nb)
	
	document.getElementById('entrees').innerHTML = document.getElementById('entrees').innerHTML + nb
	
	if(int_nb==0){
		document.getElementById('entrees').innerHTML = document.getElementById('entrees').innerHTML + " = " + somme; 	
		document.getElementById('resultats').innerHTML = "La moyenne est de : " + somme/nombre; 	
		



		
	} else {
		somme = somme + int_nb
		nombre = nombre + 1
		document.getElementById('entrees').innerHTML = document.getElementById('entrees').innerHTML + " + "; 
	}
};


function remise_a_zero(){
	// remise_a_zero efface le contenu du text "reponse" et remet a 0 le input "number"
	document.getElementById('nombre').value = ""; 
	
	document.getElementById('entrees').innerHTML = ""; 
	document.getElementById('resultats').innerHTML = ""; 	
	somme = 0
	nombre = 0
	
};