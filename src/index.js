import TeamWithIterator from './js/TeamWithIterator.js';
import TeamWithGenerator from './js/TeamWithGenerator.js';
import Character from './js/task1/Character.js';

const daemon = new Character('Dima', 'Daemon', 100, 1, 20, 50);
const magician = new Character('Ivan', 'magocian', 80, 2, 25, 60);
const archer = new Character('Vasia', 'archer', 50, 2, 90, 60);

const team = new TeamWithIterator();
team.addAll(daemon, magician, archer);

const teamTwo = new TeamWithGenerator();
teamTwo.addAll(daemon, magician, archer);

// Задание 1
console.log('// Задание 1');

for (const i of team) {
  console.log(i);
}

// Задание 2
console.log('// Задание 2');

for (const i of teamTwo) {
  console.log(i);
}
