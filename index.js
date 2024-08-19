class Person {
  constructor(name, add) {
    this.name = name;
    this.place = add;
  }

  bio() {
    return `Hey this is ${this.name},live  in ${this.place}`;
  }
  nameUpper() {
    this.name = this.name.toUpperCase();
  }

  placeUpper() {
    this.place = this.place.toUpperCase();
  }
}

const bivekObj = new Person("bivek", "darwin");
bivekObj.nameUpper();
bivekObj.placeUpper();

console.log(bivekObj.bio());
