import { Seq } from 'immutable';

function titleCase(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export default function printBestStudents(object) {
  const filteredArray = Object.keys(object)
    .filter((k) => object[k].score >= 70)
    .map((k) => [
      k,
      {
        ...object[k],
        firstName: titleCase(object[k].firstName),
        lastName: titleCase(object[k].lastName),
      },
    ]);
  const filteredObject = Object.fromEntries(filteredArray);
  console.log(Seq(filteredObject).toJS());
}
