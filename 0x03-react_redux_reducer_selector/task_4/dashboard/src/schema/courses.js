import { schema, normalize } from 'normalizr';

export const course = new schema.Entity('courses');

export const courseNormalizer = (data) => {
  const n = normalize(data, [course]);
  return {
    courses: {
      data: Object.fromEntries(
        n.result.map((id) => [
          id,
          { ...n.entities.courses[id], isSelected: false },
        ])
      ),
      ids: n.result,
    },
  };
};
