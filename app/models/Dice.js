module.exports = class Dice {
  sides = 6
  constructor (sides) {
    if (sides) { this.sides = sides }
  }

  roll () {
    return Math.floor(Math.random() * this.sides) + 1
  }

  rollDices (numberDices) {
    if (typeof numberDices !== 'number') { return 0 }
    let result = 0
    for (let i = 0; i < numberDices; i++) {
      result += this.roll()
    }
    return result
  }
}
