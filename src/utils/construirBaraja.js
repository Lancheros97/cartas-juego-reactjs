import shuffle from 'lodash.shuffle';

const NUMERO_DE_CARTAS = 12;

export default () =>  {
  const fontAwesomeClasses = ["fa fa-grav", "fa-youtube-square", "fa-facebook-square", "fa-btc","fa-ambulance", "fa-android"]
  let cartas = [];

  while (cartas.length < NUMERO_DE_CARTAS) {
    const index = Math.floor(Math.random() * fontAwesomeClasses.length);
    const carta = {
      icono: fontAwesomeClasses.splice(index, 1)[0],
      fueAdivinada: false
    };

    cartas.push(carta);
    cartas.push({...carta});
  }

  return shuffle(cartas);
};
