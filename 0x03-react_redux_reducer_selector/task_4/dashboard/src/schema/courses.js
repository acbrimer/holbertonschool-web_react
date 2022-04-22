import { schema, normalize } from 'normalizr';

export const course = schema.Entity('courses');

export const courseNormalizer = (data) => normalize(data, [course]);
