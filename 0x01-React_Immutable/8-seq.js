import { Seq } from 'immutable';

const titleCase = (str) => [str.charAt(0).toUpperCase(), str.slice(1)].join('');

export default function printBestStudents(object) {
  const filteredObject = Object.fromEntries(
    Object.keys(object)
      .filter((k) => object[k].score >= 70)
      .map((k) => [
        k,
        {
          ...object[k],
          firstName: titleCase(object[k].firstName),
          lastName: titleCase(object[k].lastName),
        },
      ])
  );
  console.log(Seq(filteredObject).toJS());
}
