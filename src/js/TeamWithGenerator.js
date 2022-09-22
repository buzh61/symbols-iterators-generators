export default class TeamWithGenerator {
  constructor() {
    this.members = new Set();
  }

  add(character) {
    if (this.members.has(character)) {
      throw new Error('The team has this character');
    }
    this.members.add(character);
  }

  addAll(...characters) {
    characters.forEach((character) => {
      this.add(character);
    });
  }

  *[Symbol.iterator]() {
    const data = this.members.entries();
    for (let i = 0; i < this.members.size; i += 1) {
      yield data.next().value[0];
    }
  }
}
