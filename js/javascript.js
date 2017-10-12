


/* Revision des variables

var  police=17;
var pompiers=18;
var numVert=0800;

var saisie=prompt("Saisissez un numéro : ");

if (saisie == police){
	console.log("Numéro Police");
	console.log(prompt("Saisissez un numéro : "));
} else if (saisie == pompiers) {
	console.log("Numéro Pompiers");
	console.log(prompt("Saisissez un numéro : "));

} else if (saisie == numVert){
	console.log("Numéro Numéro Vert");
	console.log(prompt("Saisissez un numéro : "));
} else {
	console.log("Vous avez saisi un mauvais numéro")
	console.log(prompt("Saisissez un numéro : "));
}
*/

/* parcourir un tableau 

var etudiant=["Jacques", "Jules", "Sophie","Robert","Patrick", "Amanda"];

for (var i =0; i< etudiant.length ; i++){
	if (etudiant[i] === "Robert"){
		etudiant[i] = "Dujardin";
	} alert (etudiant[i]);
}
*/
 
/* OBJET
var admis=true;
var etudiants = [
	{
		nom:"Pierre",
		moyenne: "15",
		admis:true
	},
	{
		nom:"Paul",
		moyenne: "10",
		admis:true
	},
	{
		nom:"Jacques",
		moyenne: "8",
		admis:false,
	},
	{
		nom:"Manon",
		moyenne: "5",
		admis:false
	}
]

for (var i=0; i< etudiants.length; i++){
	var etudiant = etudiants[i];
	if (etudiant.moyenne >= 10 && admis) {
		console.log(etudiant.nom + " est admis. Sa moyenne est de " + etudiant.moyenne );
	} else {
		console.log(etudiant.nom + " est non admis. Sa moyenne est de " + etudiant.moyenne)
	}
}

*/
/* TABLEAU
var questions = [
	{
		ques: "Aimes-tu le Javascript ?",
		rep: "oui"
	},

	{
		ques: "Aimes-tu le chocolat?",
		rep: "oui"
	},

	{
		ques: "Le chocolat est-il bleu?",
		rep: "non"
	},

	{
		ques: "Le chocolat est-il un fruit?",
		rep: "oui"
	},
]

	
for (var i=0; i < questions.length; i++){
	if (prompt(questions[i].ques).toLowerCase() === questions[i].rep.toLowerCase()){
		console.log("Bonne réponse ! à la question : " + questions[i].ques);
	} else{
		console.log("La réponse était " + questions[i].rep);
	}
}

*/
function additionner(chiffre1, chiffre2){
	return chiffre1 + chiffre2 ;
};

function multiplier(chiffre1, chiffre2){
	return chiffre1 * chiffre2 ;
};

function diviser(chiffre1, chiffre2){
	return chiffre1 / chiffre2 ;
};

function soustraire(chiffre1, chiffre2){
	return chiffre1 - chiffre2 ;
};

function modulo(chiffre1, chiffre2){
	return chiffre1 % chiffre2 ;
};

console.log(additionner(2,5));
console.log(multiplier(2,5));
console.log(diviser(2,5));
console.log(soustraire(2,5));
console.log(modulo(2,5));












