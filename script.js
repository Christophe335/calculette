

position=0;
sens=0;
const btup = document.getElementById('bouton_up');
const btdown = document.getElementById('bouton_down');
const mySlider = document.getElementById("my-slider");
const sliderValue = document.getElementById("pourcent");
const reinitialise = document.getElementById('bouton_reset');
const validation = document.getElementById('bouton_valider');
const popo = document.getElementById('popo'); // la DIV Pourboire par personnes
const toto = document.getElementById('toto');  // la DIV Total avec pourboires
let direction = document.querySelectorAll('.bton');    // les boutons UP DOWN 
let btNumber = document.querySelectorAll('.saisie');   // tous les chiffres
let valCase = document.querySelectorAll('.addition, .personne');  // les div résultat
let addition = document.getElementsByClassName('addition');  // la DIV Total de l'addition
let personne = document.getElementsByClassName('personne');  // la DIV Nombre de personnes
let bt1 = document.getElementById('b5');
let bt2 = document.getElementById('b10');
let bt3 = document.getElementById('b15');
let bt4 = document.getElementById('b25');
let bt5 = document.getElementById('b50');
let flecheUp = document.getElementById('addition_img2');
let flecheDown = document.getElementById('personne_img2');


// ecoute des boutons pour les chiffres
for ( let btn of btNumber ) {
       btn.addEventListener('click', function(){
       valCase[position].innerText += this.innerText; 
      });
}

btup.addEventListener('click', function(){
   sens=0;
   valCase = addition;
   flecheUp.style.display = "block";
   flecheDown.style.display = "none";
});
btdown.addEventListener('click', function(){
   sens=1;
   valCase = personne;
   flecheUp.style.display = "none";
   flecheDown.style.display = "block";
});

// affiche resultat dans valCase
function resultat() {
   let x = 0;
   if (verification(window.document.calculatrice.valCase.value))
      x = eval(window.document.calculatrice.valCase.value);
    window.document.calculatrice.valCase.value = x;
  };
  function ajouter(caracteres) {
    window.document.calculatrice.valCase.value =
    window.document.calculatrice.valCase.value + caracteres;
  };

  // ma barre slider et boutons pourcent
function slider() {
   valPercent = (mySlider.value / mySlider.max) *500;
   sliderValue.textContent = mySlider.value;
}

// je récupère le clic souris sur les boutons pourcentages
bt1.addEventListener('click', function(){
   valPercent =bt1;
   sliderValue.textContent = bt1.value;
});
   
bt2.addEventListener('click', function(){
   valPercent =bt2;
   sliderValue.textContent = bt2.value;
});
   
bt3.addEventListener('click', function(){
   valPercent =bt3;
   sliderValue.textContent = bt3.value;
});
   
bt4.addEventListener('click', function(){
   valPercent =bt4;
   sliderValue.textContent = bt4.value;
});
   
bt5.addEventListener('click', function(){
   valPercent =bt5;
   sliderValue.textContent = bt5.value;
});

// reset all bouton_reset
reinitialise.addEventListener('click', function(){
   location.reload();
});


validation.addEventListener('click', function(){
// valider calcul
let facture = document.getElementById('inpt_add').innerHTML;
let fac = +facture;
let pour = document.getElementById('pourcent').innerHTML;
let pou = +pour;
let gens = document.getElementById('inpt_gens').innerHTML;
let gen = +gens;

console.log("montant de la facture " + fac);
console.log("pourcentage retenu " + pou);
console.log("nombre de personnes " + gen);
// calcul du pourcentage a verser par personnes
let pb = ((fac * pour / 100) / gen);
popo.textContent = pb.toFixed(2);
console.log("montant du pourboire par personne " + pb.toFixed(2));
// calcul du montant total de la facture + les pourboires
let tot = (pb * gen);
toto.textContent = tot.toFixed(2);
console.log("montant Total avec les pourboires " + tot.toFixed(2));
});

