import md5 from 'md5';

const salt = process.env.ENCRYPTION_SALT;

export default function encrypt(val: string): string {
  return md5(`${salt}${md5(val)}`);
}
