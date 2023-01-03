var musketeers = ['Athos', 'Porthos', 'Aramis'];

for (let i = 0; i < musketeers.length; i++) {
  //   console.log(musketeers[i]);
}
musketeers.push("D'Artagnan");
// console.log(musketeers);

musketeers.forEach((person) => {
  //   console.log(person);
});

musketeers.splice(2, 1);

for (const myPers of musketeers) {
  //   console.log('For loop after Aramis removed:', myPers);
}

const auroroa = {
  name: 'Auroroa',
  health: 150,
  strength: 25,
  xp: 0,
  describe() {
    return `${this.name} has ${this.health} health points, ${this.strength} as strength and ${this.xp} XP points`;
  },
};

// console.log(
//   `${auroroa.name} has ${auroroa.health} health points and ${auroroa.strength} as strength`
// );

auroroa.health -= 20;
auroroa.strength += 10;
auroroa.xp += 15;

console.log(auroroa.describe());

const account = {
  name: 'Alex',
  balance: 0,
  credit(num) {
    if (num > 0) {
      return (this.balance += num);
    } else {
      return (this.balance -= num);
    }
  },
  describe() {
    return `Owner: ${this.name}, balance ${this.balance}`;
  },
};

account.credit(22);
console.log(account.balance);
console.log(account.describe());
