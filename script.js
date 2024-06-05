 const submit = document.getElementById('submit');

const results = document.getElementById('result');
const indication = document.getElementById('indication');


submit.addEventListener('click', (e) => {
  e.preventDefault();

  let weightValue = document.getElementById('weight-input').value;
  let heightValue = document.getElementById('height-input').value;

  let height = parseInt(heightValue);
  let weight = parseInt(weightValue);

  let calcul = (weight / (height * height)) * 10000;

  let IMC = Math.round(calcul * 10) / 10;

  results.textContent = IMC;

  if (IMC < 18.5) {
    indication.textContent = '⚠️ Insuffisance pondérale (maigreur)';
  } else if (IMC >= 18.5 && IMC <= 25) {
    indication.textContent = '👍 Corpulence normale';
  } else if (IMC > 25 && IMC <= 30) {
    indication.textContent = '⚠️ Surpoids';
  } else if (IMC > 30 && IMC <= 35) {
    indication.textContent = '❗️ Obésité modérée';
  } else if (IMC > 35 && IMC <= 40) {
    indication.textContent = '❗️❗️ Obésité sévère';
  } else {
    indication.textContent = '⛔️ Obésité morbide ou massive';
  }

  let grid = document.getElementById('grid');
});
