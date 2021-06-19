import db from '@services/db';

export default async function init(): Promise<void> {
  await db.authenticate();
}
