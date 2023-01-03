var musketeers = ['Athos', 'Porthos', 'Aramis'];

for (let i = 0; i < musketeers.length; i++) {
  console.log(musketeers[i]);
}
musketeers.push("D'Artagnan");
console.log(musketeers);

musketeers.forEach((person) => {
  console.log(person);
});

musketeers.splice(2, 1);

for (const myPers of musketeers) {
  console.log('For loop after Aramis removed:', myPers);
}
