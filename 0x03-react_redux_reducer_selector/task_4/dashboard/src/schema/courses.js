import { schema, normalize } from 'normalizr';

export const course = new schema.Entity('courses');

export const courseNormalizer = (data) => normalize(data, [course]);
