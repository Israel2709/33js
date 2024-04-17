let data = [
  {
    name: "Israel",
    lastname: "Salinas",
    expertise: "Front-End",
    age: 34,
  },
  {
    name: "Naomi",
    lastname: "Lopez",
    expertise: "Back-End",
    age: 27,
  },
  {
    name: "Charles",
    lastname: "Silva",
    expertise: "Back-End",
    age: 25,
  },
  {
    name: "Leonardo",
    lastname: "Santiago",
    expertise: "Marketing",
    age: 40,
  },
];

const getPersonsTotalAge = (dataArray) => {
  let result = 0;
  dataArray.forEach((person) => {
    let { age } = person;
    result += age;
  });
  return result;
};

const getPersonsUnderAge = (dataArray, limit) => {
  let result = dataArray.filter((person) => {
    return person.age < limit;
  });

  return result;
};

const thirdFunction = (dataArray) => {
  let result = dataArray.map((person) => {
    let value = `${person.name} ${person.lastname}`;
    value = value.toUpperCase();
    return value;
  });

  return result;
};

/*
{
    name: "Charles",
    lastname: "Silva",
    expertise: "Back-End",
    age: 25,
  }
  */
const fourthFunction = (dataArray) => {
  let result = dataArray.reduce((accum, current) => {
    return accum[current.expertise]
      ? {
          ...accum,
          [current.expertise]: [...accum[current.expertise], current],
        }
      : { ...accum, [current.expertise]: [current] };
  }, {});
  return result;
};

console.log(fourthFunction(data));
