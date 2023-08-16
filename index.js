function createPerson(name, age) {
  return {
    name,
    age,
    friends: [],
  };
}

function addPersonAsFriend(personA, friend) {
  personA.friends.push(friend);
  return personA;
}

module.exports = {
  createPerson,
  addPersonAsFriend,
};