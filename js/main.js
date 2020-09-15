$(document).ready(function(){

// 1. Creo un oggetto Studente e stampo con il ciclo for in tutte le sue proprietà


// Creo l'oggetto Studente

var studente ={

  nome : "Claudia",
  cognome: "Simoncelli",
  eta : 15,
};

// Stampo in console tutte le sue proprietà

for (var k in studente){
  console.log(k + " --> " + studente[k]);
}

});



// 2. Creo un array di oggetti studenti e stampo il nome e cognome di ognuno

// Creo un array di oggetti

var studenti = [

  {
    nome : "Claudia",
    cognome: "Simoncelli",
    eta : 15,
  },

  {
    nome : "Filippo",
    cognome: "Tornatori",
    eta : 17,
  },

  {
    nome : "Denise",
    cognome: "Petruzzi",
    eta : 14,
  },

  {
    nome : "William",
    cognome: "Shakespears",
    eta : 18,
  },

];

// Stampo in console solo nome + cognome

for (var i = 0; i< studenti.length; i++ ){

    console.log(studenti[i].nome + " " + studenti[i].cognome);

}
