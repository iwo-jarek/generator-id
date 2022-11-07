const fs = require("fs");

const genders = ["male", "female"];
const maleNames = [
  "Hubert",
  "Igor",
  "Karol",
  "Adam",
  "Andrzej",
  "Czesław",
  "Adrian",
  "Bartłomiej",
];
const femaleNames = [
  "Joanna",
  "Małgorzata",
  "Justyna",
  "Karolina",
  "Krystyna",
  "Gracja",
  "Nadzieja",
  "Jagoda",
];
const lastNames = [
  "Kowalski",
  "Majewski",
  "Zaorski",
  "Pomorski",
  "Mazowiecki",
  "Raben",
  "Sienkiewicz",
  "Mickiewicz",
];

const randChoice = (arr) => {
  return arr[Math.floor(Math.random() * arr.length)];
};

const people = [];

for (let i = 1; i <= 20; i++) {
  const genderChoice = randChoice(genders);

  if (genderChoice === "female") {
    firstName = randChoice(femaleNames);
  } else if (genderChoice === "male") {
    firstName = randChoice(maleNames);
  }

  const lastName = randChoice(lastNames);
  const age = Math.floor(Math.random() * 78) + 18;
  people.push({
    gender: genderChoice,
    firstName: firstName,
    lastName: lastName,
    age: age,
  });
}

fs.writeFile("people.json", JSON.stringify(people), (err) => {
  if (err) throw err;
  console.log("The file has been saved");
});
