export default class TeamWithIterator {
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

  [Symbol.iterator]() {
    return {
      index: 0,
      len: this.members.size,
      data: this.members.entries(),
      next() {
        if (this.index < this.len) {
          this.index += 1;
          return { done: false, value: this.data.next().value[0] };
        }
        return { done: true };
      },
    };
  }
}
