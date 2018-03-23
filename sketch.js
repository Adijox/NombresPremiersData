var premiers = [];
var diviseurs = [2];
var end = prompt('Combien de nombre voulez-vous vérifier?');
//On crée une liste dont chaque élément correspond à un chiffre (0 à 9)
var counts = new Array(10).fill(0);

function isPrime(a) {
    for(var i=0; i < diviseurs.length; i++) {
    if(a%diviseurs[i] === 0 && diviseurs[i]!=a && diviseurs[i]!=1) {
        return false;
        console.log(i);
    }
       }
    if(a!= 1) {
    return true;
    }else {
        return false;
    }
}

function findPrimes(stop) {
for(var i = 0; i < stop; i++) {
    if(isPrime(i)) {
        premiers.push(i);
        diviseurs.push(i);
    }
}
}

function countDigits() {
for(var i = 0; i < premiers.length; i++) {
// Méthode pas très clean mais efficace pour décomposer un nombre en les chiffres qui le composent    
    let tempstring = premiers[i].toString();
    for(elt in tempstring) {
        let digit = parseInt(tempstring.charAt(elt));
        counts[digit] += 1;
    }
}
}

// Partie DataViz

function renderData() {
window.onload = function() {
var chart = new CanvasJS.Chart("chartContainer", {
	animationEnabled: true,
	theme: "light2", // "light1", "light2", "dark1", "dark2"
	title:{
		text: "Répartition des différents chiffres dans l'ensemble de nombres premiers allant de 0 à " + end.toString()
	},
	axisY: {
		title: "Apparitions"
	},
	data: [{        
		type: "column",  
		dataPoints: [      
			{ y: counts[0], label: "0" },
			{ y: counts[1],  label: "1" },
			{ y: counts[2],  label: "2" },
			{ y: counts[3],  label: "3" },
			{ y: counts[4],  label: "4" },
			{ y: counts[5], label: "5" },
			{ y: counts[6],  label: "6" },
			{ y: counts[7],  label: "7" },
			{ y: counts[8],  label: "8" },
			{ y: counts[9],  label: "9" }
		]
	}]
});
chart.render();

}
}


findPrimes(end);   
countDigits();
renderData();

function setup() {

    for(var i = 0; i < premiers.length; i++) {
        var temparr = [];
            temparr.push(premiers[i]);
        createDiv(temparr);

    }
}