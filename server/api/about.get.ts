import { getAbout } from '../database/queries/getAbout';

export default defineEventHandler(async event => {
  const key = getQuery(event).key as string;
  return await getAbout(key);
});
