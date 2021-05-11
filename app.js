
let h2 = document.querySelector('h2');



function getChrono() {
  let now = new Date().getTime(); //date parcouri depuis 1 janvier 1970 jusqu'a now
  let countDate = new Date("May 14, 2021").getTime(); //de 1970 jusqu'a la date qu'on veut

  let distanceDate = countDate - now; //
  let days = Math.floor(distanceDate / (1000 * 60 * 60 * 24)); //on calcul pour voir combien de jour nous reste pour atteindre le jour qu'on veut
  const hours = Math.floor(
    (distanceDate % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  ); //le nombre d'heure qui reste pour atteindre le jour
  const minutes = Math.floor((distanceDate % (1000 * 60 * 60)) / (1000 * 60)); //le npombre de minute qui rste
  const secondes = Math.floor((distanceDate % (1000 * 60)) / 1000); //le nbre de seconde;

  // console.log(days , hours , minutes , secondes);

  h2.innerHTML = `${days}j ${hours}h ${minutes}mn ${secondes}s`; //pour afficher le jour et......
}
getChrono();

const countInterval = setInterval(() =>{
getChrono();
},1000);